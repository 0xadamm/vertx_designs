import React, { useEffect } from "react";

declare global {
	interface Window {
		voiceflow: {
			chat: {
				load: (options: any) => void;
			};
		};
	}
}

const VoiceflowChatbot = () => {
	useEffect(() => {
		// Create a new script element
		const script = document.createElement("script");
		script.type = "text/javascript";

		// Set the onload function
		script.onload = () => {
			window.voiceflow.chat.load({
				verify: { projectID: "651121ceab3cff00089f6c26" },
				url: "https://general-runtime.voiceflow.com",
				versionID: "production",
			});
		};

		// Set the script source
		script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";

		// Append the script to the DOM
		document.getElementsByTagName("head")[0].appendChild(script);

		// Cleanup: Remove the script when the component unmounts
		return () => {
			document.getElementsByTagName("head")[0].removeChild(script);
		};
	}, []);

	return <div id="voiceflow-chat" />;
};

export default VoiceflowChatbot;
