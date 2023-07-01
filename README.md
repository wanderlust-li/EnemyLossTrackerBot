<p align="center">
  <h1 align="center">EnemyLossTrackerBot 🤖</h1>
</p>

<p align="center">
This repository contains the source code for a Telegram bot, written using Google Apps Script, that utilizes the API from the website russianwarship.rip to track enemy losses.
</p>

## 🖼️ Screenshots

<p align="center">
  <img src="https://github.com/wanderlust-li/EnemyLossTrackerBot/assets/96470507/26e41c7b-533c-4029-9ca7-a7a723df3fe2" alt="Screenshot of the application">
</p>


## 🚀 Getting Started

### 📚 Prerequisites

1. Google account. If you don't have one, [create a Google account](https://accounts.google.com/SignUp).
2. Bot token from BotFather in Telegram. If you don't have the token, [create a new bot in Telegram](https://core.telegram.org/bots#6-botfather).

### 🤖 Access the bot

You can access the bot by clicking this [link](https://t.me/EnemyLossTracker_bot).

## 📖 Further Reading

- To learn more about the development of this bot, you can read this [discussion](https://dou.ua/forums/topic/30653/).


### 📝 Instructions

1. Open [Google Apps Script](https://script.google.com/) and create a new project.
2. Copy the entire code from `code.js` in this repository and paste it into the Apps Script editor.
3. Replace `const token = ''` with your Telegram bot's token.
4. Replace `const hookUrl = ''` with your Google Apps Script's URL (Publish > Deploy as web app > copy 'Current web app URL').
5. Save the project with a relevant name.
6. From the top menu, select Publish > Deploy as web app.
7. Under 'Project version', select 'New' and make a note about the project. Then, click 'Deploy'.
8. Copy the 'Current web app URL' and paste it into `const hookUrl = ''`.
9. Save and run the function `setWebhook()` to set up your Telegram bot's webhook.
10. Your bot should now be functional. Start a conversation with it in Telegram.

## 🛠️ Built With

- [Google Apps Script](https://developers.google.com/apps-script)
- [Telegram API](https://core.telegram.org/bots/api)

## 👥 Authors

- [wanderlust-li](https://github.com/wanderlust-li)

## 🙌 Acknowledgments

- The bot uses the API provided by [russianwarship.rip](https://russianwarship.rip/api-documentation/v1#/) for data.
