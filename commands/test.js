const Command = require('../cmdModule/commands').Command


class TestCommand extends Command {
  constructor() {
    super({
      name: 'test',
      help: 'A test lol'
    })
  }

  async run(message, args, api) {
    message.reply('you are a piece of shit!')
    return true
  }
}

module.exports = TestCommand