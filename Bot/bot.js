import { Telegraf } from "telegraf";
const TOKEN = "7635121657:AAGUq8flSMrIx2p5mMOXBPmLNmePP2j7nJQ";
const bot = new Telegraf(TOKEN);

const web_link = "https://tap-game-mini-app.vercel.app/";


bot.start((ctx) =>
    ctx.reply("Welcome :)))))", {
      reply_markup: {
        inline_keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
        
    },
    })
  );
  
  bot.launch();