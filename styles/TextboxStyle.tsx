import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    textboxContainer: {
        position: "absolute",
        bottom: 20,
        height: 50,
        // backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    micButtonContainer: {
        position: "absolute",
        right: 22,
        overflow: "hidden",
        borderRadius: 100,
    },

    micButton: {
        padding: 14,
    },

    menuButton: {
        position: "absolute",
        right: 24,
        overflow: "hidden",
        borderRadius: 100,
    },

    sendButton: {
        padding: 14,
    },

    addButtonContainer: {
        position: "absolute",
        left: 18,
        overflow: "hidden",
        borderRadius: 100,
        zIndex: 5,
    },

    addButton: {
        padding: 14,
    },

    textbox: {
        elevation: 10,
        height: "100%",
        width: "90%",
        borderWidth: 2,
        borderColor: '#444',
        borderRadius: 200,
        fontFamily: "Poppins_400Regular",
        fontSize: 15,
        padding: 10,
        paddingLeft: 46,
        paddingRight: 40,
        color: "#eee",
        backgroundColor: "#272727",
    },
});