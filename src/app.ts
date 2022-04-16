import dotenv from "dotenv";
dotenv.config();
import Discord = require("discord.js");
const QRCode = require("./QRCode");

const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

client.on("ready", () => {
  console.log(`Bot has been logged in as ${client.user?.tag}`);
});

client.on("message", async (msg) => {
  const [command, argument] = msg.content.split(" ");
  if (command === "qr" && argument) {
    const qrCode = new QRCode(argument);
    msg.reply(qrCode.getQRCode());
  }
});

client.login(process.env.CLIENT_TOKEN);
