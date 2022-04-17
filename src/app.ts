import dotenv from "dotenv";
dotenv.config();
import Discord = require("discord.js");
import parser from "./parser";
import QRCode from "./QRCode";

const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

client.on("ready", () => {
  console.log(`Bot has been logged in as ${client.user?.tag}`);
});

client.on("message", (msg) => {
  const {
    command,
    data,
    args: { width, height, color },
  } = parser(msg.content);

  if (command === "qr" && data.length > 0) {
    const qrCode = new QRCode(data, width, height, color);
    msg.reply(qrCode.getQRCode());
  }
});

client.login(process.env.CLIENT_TOKEN);
