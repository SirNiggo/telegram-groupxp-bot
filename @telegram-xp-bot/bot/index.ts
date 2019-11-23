import Telegraf from "telegraf";
import { echoFeature } from "./feature/echo.feature";

require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.on('text', echoFeature);
bot.launch()
