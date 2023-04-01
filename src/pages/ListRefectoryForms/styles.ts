import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
    titlePage: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 30,
        alignSelf: 'center',
    },

    // Tabela 
    tableContainer: {
        width: '95%',
        height: 320,
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
    },
    tableHeader: {
        backgroundColor: '#E5E5E5',
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
    },
    tableHeaderText: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    tableRow: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
    },
    tableRowText: {
        flex: 1,
        paddingLeft: 10,
    },
    tableRowButton: {
        paddingRight: 10,
    },
});

export default styles;