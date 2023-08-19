import { useCallback, useContext } from 'react'
import { Linking, View, Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
import { Button as ButtonComponent } from '../../components/Button';
import { AuthContext } from '../../context/auth';

type OpenURLButtonProps = {
  url: string;
  children: string;
  textColor: string;
  icon?: React.ReactNode;
};

export const OpenURLButton = ({ url, children, textColor, icon }: OpenURLButtonProps) => {
  const { aviso } = useContext(AuthContext);

  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      aviso(`Não foi possivél abrir a página desejada!`, 'danger', RFValue(64));
    }
  }, [url]);

  return (
    <ButtonComponent onPress={handlePress} typeButton='extraButton'>
      <Text style={{ color: textColor, fontSize: 16 }}>{children}</Text>
      {icon ? <View >{icon}</View> : null}
    </ButtonComponent>
  );
};