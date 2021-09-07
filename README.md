# TU Delft CSE Discord Bot

## Requirements

- npm
- node.js

## Setup

Create a new file in the repository directory and name it `.env`.
Put the following into that file:

> token=TOKEN

and replace `TOKEN` with the bot's private token.

Install dependencies with this command:

> npm install

Edit config.json and replace the `clientId` with your bot's *Client ID* and `guildId` with your *server ID*.

Edit `config.json` and replace the channel and message ID's which are listed there with ID's from your server. You can change some other settings there too.

Make sure your Discord server has a channel named `bot-commands` which the bot has access to, or set a different bot channel in `config.json`.

Finally, once the bot is added to the server, put its role above other roles the bot will manage (courses, years, honours, and so on).

## Usage

To run the bot:

> node main.js

For a list of commands, in Discord type:

> /help
