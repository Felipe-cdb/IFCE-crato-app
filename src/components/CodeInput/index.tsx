import React, { useState, useRef, useEffect } from 'react';
import { TextInput, View, StyleSheet,
    NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';

interface ICodeInputProps {
    valueCode: string;
    onChange: (code: string) => any;
}

const CodeInput = ({ onChange, valueCode }: ICodeInputProps) => {
  const [code, setCode] = useState(valueCode);
  const codeInputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  useEffect(() => {
    if (valueCode === '') {
        setCode('')
        codeInputRefs[0].current?.focus();
    }
  }, [valueCode])

  useEffect(() => {
    if(code.length==4) onChange(code);
  }, [code]);

  const handleFocus = (index: number) => {
    if (index > code.split('').length){
        codeInputRefs[code.split('').length].current?.focus();
    }
  }

  const handleCodeChange = (value: string, index: number) => {
    
    setCode((prevCode) => {
        const newCode = prevCode.split('');
        newCode[index] = value;
        return newCode.join('');
    });

    if (value && index < 3) {
        codeInputRefs[index + 1].current?.focus();
    }

    if (value && index === 3) {
        codeInputRefs[index].current?.focus();
    }

    if (index > 0 && !value && !code[index - 1]) {
        codeInputRefs[index - 2].current?.focus();
    }
  };

  const handleCodeKeyPress = (event: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    const key = event.nativeEvent.key;
    if (index < 3 && key !== 'Backspace' && (
        key == '0' || key == '1' || key == '2' || key == '3' || key == '4' ||
        key == '5' || key == '6' || key == '7' || key == '8' || key == '9'
    )) {
        handleCodeChange(key, index+1)
    }

    if (key === 'Backspace' && index > 0) {
        codeInputRefs[index - 1].current?.focus();
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.container}>
            {Array.from({ length: 4 }).map((_, index) => (
                <TextInput
                    key={index}
                    ref={codeInputRefs[index]}
                    style={styles.codeInput}
                    maxLength={1}
                    value={code[index]}
                    onChangeText={(value) => handleCodeChange(value, index)}
                    onKeyPress={(event) => handleCodeKeyPress(event, index)}
                    keyboardType="number-pad"
                    autoFocus={index === 0}
                    onFocus={() => handleFocus(index)}
                />
            ))}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
    },
    codeInput: {
        padding: 16,
        textAlign: 'center',
        fontSize: 24,
        backgroundColor: '#D8D8D8',
        borderWidth: 1,
        borderColor: '#727272',
        borderRadius: 8
    },
});

export default CodeInput;