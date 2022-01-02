export const appActions = {
/**
 * Click Event to Say Thanks
 * @param {*} { client, body, ack }
 */
thank_you_for_clicking: async ({ client, body, ack }) => {
    await ack();
    client.chat.postEphemeral({
      token: process.env.SLACK_BOT_TOKEN,
      channel: body.channel.id,
      user: body.user.id,
      text: `Hey @${body.user.name}. Thank you for clicking`,
    });
  },
};

