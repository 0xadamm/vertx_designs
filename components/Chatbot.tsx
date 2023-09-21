// Chatbot.tsx

import React, { useEffect } from "react";

interface BotpressWebChat {
	init: (options: any) => void;
	// Add other methods that you might use from Botpress
}

declare global {
	interface Window {
		botpressWebChat: BotpressWebChat;
	}
}

const Chatbot = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
		script.async = true;
		document.body.appendChild(script);

		script.onload = () => {
			window.botpressWebChat.init({
				composerPlaceholder: "Chat with Jeff",
				botConversationDescription: "This is an Amazing Bot",
				botId: "4ea69f6d-e5ad-4f5a-822a-df7f2ff00c9c",
				hostUrl: "https://cdn.botpress.cloud/webchat/v1",
				messagingUrl: "https://messaging.botpress.cloud",
				clientId: "4ea69f6d-e5ad-4f5a-822a-df7f2ff00c9c",
				lazySocket: true,
				botName: "Adam",
				stylesheet:
					"https://webchat-styler-css.botpress.app/prod/0b919466-e958-4096-ac8d-288f895430e1/v13471/style.css",
				frontendVersion: "v1",
			});
		};
	}, []);

	return <div id="webchat" />;
};

export default Chatbot;
