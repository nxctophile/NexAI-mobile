import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    heroContainer: {
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#ff0",
        width: "100%",
        // marginTop: 680,
    },

    heroImage: {
        height: 40,
        width: 40,
        margin: 20,
    },

    heroText: {
        fontFamily: "Poppins_200ExtraLight",
        fontSize: 16,
        color: "#eee",
    },

    featureContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },

    featureRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    featureCard: {
        overflow: "hidden",
        height: 120,
        width: 160,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#444",
    },

    feature: {
        height: "100%",
        width: "100%",
        backgroundColor: "#272727",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    featureImage: {
        height: 40,
        width: 40,
        marginBottom: 10,
    },

    featureText: {
        fontFamily: "Poppins_400Regular",
        fontSize: 12,
        color: "#eee",
    },
});