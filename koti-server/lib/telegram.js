import config from '../config.json';
import request from 'request';
import _ from 'lodash';

const telegram = {
  lastUpdate: {},

  tremblingCreatureOrHaveITheRight (user) {
    return _.includes(config.telegramAllowedUsers, user);
  },

  sendMessage (lastUpdate, text) {
    request.post({
        url: 'https://api.telegram.org/bot' + config.telegramBotToken + '/sendMessage', 
        form: {chat_id: lastUpdate.from.id, text: text}
      }, 
      function(err, httpResponse, body) {
        if (err) {
          return console.error('failed to send telegram message:', err);
        }
        // console.log('Upload successful!  Server responded with:', body);
      }
    );
  }
};

export default telegram;