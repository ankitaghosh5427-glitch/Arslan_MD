const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUpqVXZOelRqOUIzVmJ1ZVZhejNMVnV0TER1Z1B5WUMvOVJZdStRYlBuRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3p5b2RuN25xOTREYUVFVURwdTRDRmRIUzJRNFlOcWlFNThsRHZBMjBYVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQXVmdjJVT3QxRTZQMW9CWTRsT3d5SlRkMGkvVEdsUEZrSjdXaUt6eFVrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqTlZhcXdhU0xzc2tITTRrWWlyTkl6anBzSVhJRW5HSTlpN3E1WmNtYWhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJEejhHTWxLQS9GSzFXMjRqNG1MZVJHeUs1NHY4dXNlaFZsWVMxbHJsbEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlYM1JWeHFyQ0huYWRjTmNFbjd2eXVYMVdYMUloaU9mQ2wvRThQQ2ljMTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib09qODFhamc1enZDTVlPU1NYQ0x3NVJUa09TbzJ5aVNEU09WRDIwNU1rTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkd5ekIwTUhENGtWbVNLazJHdm1UaVJpZzUzTzd5UVZVUXRXSVZlTy9sRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZpK1Y3SUs3c3M4amJNZW1wb1k1eU4wakhZcDBMY2h3NUdlaXM3WXVqVGdQVjVRUmlUR1d4WWhVTjZEaDFmeWoyS21FMmtXVWUwcnJFSXd5alBWZGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA2LCJhZHZTZWNyZXRLZXkiOiJnZ21OZzc0eVFEd0RyTHpucWpoeDhmWnR1d1V6WXRUTUNOMnZzZTU5dmtjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk4OTEzNjc3MDY1OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUI2NkQ2RUQ3QUMwQ0M3MjNGQzUyNzM0MDUyN0UyOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU4MzkxMDAxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5ODkxMzY3NzA2NTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTVEMTU1MTU0MjQyRTZBQjMyNkE4OEU4REQ2RTJGMjEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1ODM5MTAwMX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTg5MTM2NzcwNjU5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1MEQ4ODRENDEwQTMzMUM2Q0E4NEY2ODU4REMwNjEwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTgzOTEwMDJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkNZQzQ4Tlk4IiwibWUiOnsiaWQiOiI5ODkxMzY3NzA2NTk6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJidXNzZXMiLCJsaWQiOiIxNTU3NDA0NDY2NzQ5ODc6MUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pLdC9md0VFTlRWdThZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InFCZkdyd20vTVBtdUFzVW05dURYLzdPWVhiWVM5VFZZYklxelduUUFQaWM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ilp5V1FIUCt5MTRpeGswWG1aKzcvbkgyNkdOVENMQ3kxclp2NnJyQzlRelR0VmVmdkFXcTYxaFBXcmpNVlVFelFPeGdkL2pHWWg2SXZSUW5QSE5PZERRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI1MGZ1d1dWMGwzTFJPbTgwcFpzc0s4dlN5V0F4em1nb0orUDJHYzE1SFRxZDROelI0M2tQeGJia3pRajQrb0RoZkpSdzlwR1JQRVNoNFkwSVhRVjlodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk4OTEzNjc3MDY1OToxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFnWHhxOEp2ekQ1cmdMRkp2YmcxLyt6bUYyMkV2VTFXR3lLczFwMEFENG4ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1ODM5MTAwMCwibGFzdFByb3BIYXNoIjoiMkc0QW11IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIalcifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Arslan_MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/lcpy9f.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Arslan_MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Arslan_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Arslan_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/lcpy9f.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*Arslan_MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "989136770659",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
