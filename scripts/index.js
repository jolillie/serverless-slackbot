'use strict'
/**
 * Test Script
 */
var json = require('./answers.json');
module.exports = bot => {

  // responds to any slash command
  bot.on('slash_command', payload => {

    bot.reply(payload, {
      text: " "
    })
  })

  // responds to keyword in a text
  bot.hears(/ /, (payload, bot, match) => {

    bot.reply(payload, {
      text: JSON.stringify(json)
    })
  })



