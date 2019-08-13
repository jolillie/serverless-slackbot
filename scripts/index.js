'use strict'
/**
 * Test Script
 */
var json = require('./answers.json');
module.exports = bot => {

  // responds to any slash command
  bot.on('slash_command', payload => {

    bot.reply(payload, {
      text: "Making changes to the main and vanity URLs *after* an article is published should be your *last resort*. URLs are the very life-source to your article and even minor changes can *negatively affect* SEO. \n :star: \n <https://fox.quip.com/XXiZAkgKeKwh/Vanity-and-Main-URLs|Vanity and Main URLs>"
    })
  })  

  // responds to keyword in a text
  bot.hears(/vanity urls/, (payload, bot, match) => {

    bot.reply(vanity_urls, {
      text: JSON.stringify(json)
    })
  })
}


  d
