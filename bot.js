const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
});

client.on('ready', async() => {
var server = "511942218479566859"; // ايدي السررفر
var channel = "511942218945396767";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Superspam , Superspam , Superspam , Superspam, Magic   , ')
    },400);
})

client.login("NTExOTk5MDA1MzY3MDc0ODE5.DszGlw.NUqDt300BTRa2dxypyXa3OP8kNY");
