import { app } from './main'
// Channel you want to post the message to
const channel= "test-env";
export async function runIt() {
    try {
        // Call the chat.scheduleMessage method using the WebClient
        const result = await app.client.chat.postMessage({
        channel,
        blocks: [
		{
			"type": "header",
			"text": {
				"type": "plain_text",
				"text": ":tada: CTP Weekly Tech Challenge :tada:"
			}
		},
		{
			"type": "divider"
		},
		{
			"type": "context",
			"elements": [
				{
					"type": "image",
					"image_url": "https://cunytechprep.nyc/_next/static/image/public/ctp-logo-square.57c4c8517df448c781ad113a7e0bb894.png",
					"alt_text": "cute cat"
				},
				{
					"type": "mrkdwn",
					"text": "Solution To The Wednesday Challenge"
				}
			]
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": ""
			}
		}
	]
      });

    }
    catch (error) {
        console.error(error);
    }
}