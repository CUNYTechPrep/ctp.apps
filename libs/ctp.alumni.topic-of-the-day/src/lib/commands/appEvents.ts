const welcomeChannelId = '#topic-of-the-day';
/*
 * https://api.slack.com/events
 * You can listen to any Events API event using the event() method after subscribing to it in your app configuration. 
*/

export const appEvents = {
/**
 *
 * Join Team 
 * @param {*} { event, client, logger }
 */
team_join: async ({ event, client, logger }) => {
    try {
      // Call chat.postMessage with the built-in client
      const result = await client.chat.postMessage({
        channel: welcomeChannelId,
        text: `Welcome to the team, <@${event.user}>! 🎉`,
      });
      logger.info(result);
    } catch (error) {
      logger.error(error);
    }
  },
};
