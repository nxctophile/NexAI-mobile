import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    sidebarContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: "100%",
        width: "100%",
    },

    sidebar: {
        height: "90%",
        width: "70%",
        borderTopEndRadius: 40,
        borderBottomEndRadius: 40,
        backgroundColor: "#272727",
        paddingTop: 20,
        alignItems: "center",
    },

    button: {
        height: 50,
        width: "80%",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#1a1a1a",
        borderRadius: 10,
    },

    buttonLabel: {
        marginTop: 2,
        marginLeft: 6,
        color: "#aaa",
        fontFamily: "Poppins_600SemiBold",
    },

    historyTitle: {
        width: "80%",
        marginTop: 20,
        color: "#888",
        fontFamily: "Poppins_400Regular",
    },

    recentChatsScrollview: {
        height: "100%",
        width: "100%",
    },

    recentChatsContainer: {
        height: "100%",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },

    noRecentChats: {
        color: "#888",
        fontFamily: "Poppins_400Regular",
    },

    bottomButtons: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },

    loginButton: {
        elevation : 10,
        height: 50,
        width: "80%",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#333",
        borderRadius: 10,
        marginTop: 20,
    },

    settingsButton: {
        paddingLeft: 30,
        height: 70,
        width: "100%",
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    closeSidebarButton: {
        marginLeft: 20,
        padding: 20,
    },
});