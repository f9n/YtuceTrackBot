require('dotenv').config()

const TelegramBot = require('node-telegram-bot-api')
const token = process.env.TelegramToken

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true})

var GlobalChatId = null
// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id
  console.log(chatId)
  GlobalChatId = chatId
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message')
})

setInterval(function () {
  console.log('[+] Runned setInterval function again')
  if (GlobalChatId) {
    bot.sendMessage(GlobalChatId, 'Okey')
  }
}, 2000)
