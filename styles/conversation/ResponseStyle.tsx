import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    response: {
        marginBottom: 20,
        width: "100%",
    },

    nexaiResponse: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },

    nexai: {
        flexDirection: 'row',
        // backgroundColor: "#f00",
        alignItems: "center",
    },

    nexaiLogo: {
        height: 18,
        width: 18,
        marginRight: 6.5,
    },

    nexaiText: {
        fontFamily: "Poppins_600SemiBold",
        color: "#eee",
        marginTop: 3,
    },

    speechButton: {
        padding: 8,
        borderRadius: 50,
    },
});