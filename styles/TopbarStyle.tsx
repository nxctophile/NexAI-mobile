import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    topbarContainer: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 8,
    },

    topbar: {
        overflow: "hidden",
        borderRadius: 100,
        backgroundColor: "#17171700",
        height: "80%",
        width: "96%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 6,
        paddingRight: 6,
    },

    menuButton: {
        overflow: "hidden",
        borderRadius: 100,
    },

    menu: {
        padding: 7,
    },

    appInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    appLogo: {
        display: "none",
        height: 20,
        width: 20,
    },

    appName: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 17,
        color: "#aaa",
    },
});