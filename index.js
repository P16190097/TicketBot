import Discord from 'discord.js';

const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot loaded succesfully');
});

// TODO: get token from discord client to add here
client.login(process.env.CLIENT_TOKEN);
