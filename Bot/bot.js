import { Telegraf } from "telegraf";
const TOKEN = "7690253021:AAECH7uTJYYoG7pcGuz13WA82A0McZ-mRio";
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