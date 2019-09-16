let get_gateway_url = () => {
    if(window.location.host.includes("cloud.ushakov.co")){
        return "https://" + window.location.host.split('.')[0] + ".gateway.dialogflow.cloud.ushakov.co"
    }

    else {
        return "https://dialogflow-web-v2.gateway.dialogflow.cloud.ushakov.co"
    }
}

export default {
    app: {
        gateway: "https://project-paca-twiecl.gateway.dialogflow.cloud.ushakov.co",
        muted: false, // <- mute microphone at start
        start_suggestions: [], // <- array of suggestions, displayed at the start screen
        fallback_lang: 'en' // <- fallback language code, if history mode or network is unavailable
    },
    i18n: {
        en: {
            welcomeTitle: "Welcome to Paca web",
            muteTitle: "Mute Toggle",
            inputTitle: "Type your message",
            sendTitle: "Send",
            microphoneTitle: "Voice Input"
        },
        th: {
            welcomeTitle: "ยินดีต้อนรับสู่ Paca web",
            muteTitle: "Mute Toggle",
            inputTitle: "พิมพ์ข้อความ",
            sendTitle: "ส่ง",
            microphoneTitle: "Voice Input"
        }
    }
}
