import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: "center"
    },
    img: {
        width: 300,
        height: 310
    },
    parentContainer: {
        marginTop: 20,
        // flex: 2,
        width: "100%",
    },
    inputParentContainer: {
        marginBottom: 10,
        marginHorizontal: 34
    },
    input: {
        width: "100%",
        paddingVertical: 9,
        marginBottom: 10,
        shadowColor: "#444444",
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowRadius: 20,
        shadowOpacity: 0.8,
        elevation: 5,
        backgroundColor: "#fff",
        borderRadius: 7,
        fontSize: 16,
        fontWeight: "600",
        paddingLeft: 6
    },
    buttonsParentContainer: {
        marginHorizontal: 34
    },
    button: {
        backgroundColor: "#C43FAE",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        paddingVertical: 8,
        borderRadius: 7,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: "700"
    },
    newImg: {
        width: 250,
        height: 250
    },
    welcomeImg: {
        width: 400,
        height: 200
    }
});

export default GlobalStyles;