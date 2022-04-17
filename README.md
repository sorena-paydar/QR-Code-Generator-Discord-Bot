# QR Code Generator Discord Bot
A discord bot that turns your message to a QR code using Nodejs and [Google charts QR Code](https://developers.google.com/chart/infographics/docs/qr_codes).

![chart](https://user-images.githubusercontent.com/76770827/163732541-400b976b-09c0-4071-b26d-40fcf7356ba7.png)

## Setup
### Cloning and Installing The Dependencies
Clone the repository to your local machien:
```
git clone https://github.com/SorenaPaydar/QR-Code-Generator-Discord-Bot.git
```
Install the dependencies:
```
npm install
```
## Environment Setup
Create a file called `.env` in the root directory of the project and fill in the information shown below:
```
CLIENT_TOKEN=<YOUR CLIENT TOKEN>
``` 
> Create Discord bot [here](https://discord.com/developers/applications) and replace your bot's token with `<YOUR CLIENT TOKEN>`.

### Start the server
You can now start the server using following command:
```
npm run start
```
> It will create a folder called `dist` in the root folder of the project that contains the minimized version of the source code.
