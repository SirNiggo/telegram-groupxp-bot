import Telegraf, { ContextMessageUpdate } from "telegraf";

export const echoFeature = (ctx: ContextMessageUpdate) => {
    ctx.reply(ctx.message.text);
}