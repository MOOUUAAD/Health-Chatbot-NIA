import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        composerPlaceholder: "Chat with NurseGPT",
        botConversationDescription: "I will find what disease you have",
        botId: "f8a52dd3-077b-460d-8841-533bec77eedb",
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        StyleSheet:
          "https://webchat-styler-css.botpress.app/prod/2760eca1-911a-4b1b-9976-d16ccbe554e0/v47774/style.css",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "f8a52dd3-077b-460d-8841-533bec77eedb",
        webhookId: "934ee4ad-a860-4e43-a1f6-b2b752a1a164",
        lazySocket: true,
        themeName: "prism",
        botName: "NurseGPT",
        frontendVersion: "v1",
        theme: "prism",
        themeColor: "#EE0000",
      });
    };

    const cssLink = document.createElement("link");
    cssLink.href = "/Chatbot.css";
    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
    document.getElementById("bp-web-widget")?.appendChild(cssLink);
  }, []);

  return <div id="webchat" />;
};

export default Chatbot;
