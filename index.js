const CmdHandle = require('./cmdModule/commands')
const Discord   = require('discord.js')
const config    = require('config')
const path      = require('path')

const bot       = new Discord.Client()
const handler   = new CmdHandle.CommandHandler({
  bot: bot,
  prefix: '-'
})



bot.on('ready', () => {

  console.log('Project Chicago has started.')
})

bot.on('message', (msg) => {
  handler.handleMessage(msg)
})
bot.login(config.get('bot.token'))