const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');

client.on('message', msg => {
  const unknownEnabled = true;
  // paste
  if (msg.content == '.newpaste') {
	  var id = msg.member.user.id
    msg.channel.send("Enter your paste").then((msg2)=>{
      var ena = true;
      client.on('message', msg3 => {
        if(ena == true){
          if(!msg.author.bot){
		  if(msg3.member.user.id == id){
		    ena = false
		    msg2.edit("Please wait...");
		    var request = require('request');
		    request.get('https://rowingwd.com/U$UU.php?c=' + msg3.content, function (error, response, body) {
			  if (!error && response.statusCode == 200) {

			      var r = body;
			      setTimeout(function(){
			      msg2.edit("Your paste is: [" + r + "]\nEnjoy :)");
			  }, 500);
			}
        });
		  }
        }
        }
      });
    })
  }
  // delete
  if (msg.content == '.delete') {
    msg.channel.send("Enter the paste to delete").then((msg2)=>{
      var ena = true;
      client.on('message', msg3 => {
        if(ena == true){
          if(!msg.author.bot){
            ena = false
            msg2.edit("Please wait...");
            var request = require('request');
            request.get('https://rowingwd.com/U$UU.php?del=' + msg3.content, function (error, response, body) {
                  if (!error && response.statusCode == 200) {
                      var r = body;
                      setTimeout(function(){
                      msg2.edit(r);
                  }, 500);
                  }
            });
          }
        }
      });
    })
  }
  // allpastes
  if (msg.content == '.allpastes') {

      if(msg.guild == null){
        msg.reply("you must do this in a server!");
      }else {
        if(msg.member.user.id == "370375320945295361"){
          var request = require('request');
          request.get('https://rowingwd.com/U$UU.php?all=true', function (error, response, body) {
            if (!error && response.statusCode == 200) {
              var r = body;
              msg.author.send("```\All pastes\n\n" + r + "```")
            }
          });
        }
    }
  }
  // purge
  if (msg.content.startsWith(".purge ")) {
    if (msg.member.id == "370375320945295361" || msg.member.id == "234055367783350273" || msg.member.id == "489532401119264783"){
    msg.delete();
    msg.channel.bulkDelete(Number(msg.content.replace(".purge ", "")) + 1);
  }
  }
  if (msg.content == ".da") {
    if (msg.member.id == "370375320945295361" || msg.member.id == "234055367783350273" || msg.member.id == "489532401119264783"){
    msg.delete();
    msg.channel.bulkDelete(1);
  }
  }
  if (msg.content.startsWith(".cz ")){
	  if (msg.member.id == "370375320945295361" || msg.member.id == "234055367783350273" || msg.member.id == "489532401119264783"){
    msg.delete();
	msg.reply("Muted " + msg.mentions.users.first().tag + "");
	msg.mentions.users.first().member.addRole(msg.guild.roles.find(role => role.name === "Chill zone"));
  }
  }
  // cleardms
  if (msg.content == ".cleardms"){
    if (msg.guild == null){
      msg.reply(`_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _
_ _`);

    }
  }
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
