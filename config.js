const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '254772942486'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'maxdavid126@gmail.com'
global.github = 'https://github.com/Bladeh4x/BLADE-MD'
global.location = 'Lahore pakistan'
global.gurl = 'https://instagram.com/alex_david/' // add your username
global.sudo = process.env.SUDO || "254772942486,25421224079,254735441274"
global.devs = '2348059540212';
global.website = 'https://github.com/Bladeh4x/BLADE-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3f3ae4aace2d012c11509.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "BLADE-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0cyTjBVSFRQQkNSN2tjWndadzVYdVlDKzI0OUJBNHdKWG9xdi94Mk1uVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianlJbVQ0L1RTNkxCMU9nUmR6Z1ZhQWwyZW5CSVUwb2ZRdlBCMHVQZGNFYz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSm1adkxkWTkwYWJQcWl4Nk5hd1hPNGJ1NjJuSXpVQzRkeFRiUCtqRW1RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlUGMxeFRCajMyQytKL1N4SFhrWXN0YkZUeU9ld1VLMjVWNmhzM1IxNGo0PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1JaWI1c2hYUXp2QjhxcjUxWm9MZm1MakNkbktzdkFFTXVqc3d0TXpnazQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRjdm92V1FhS2lVdUR5dTdoZitQQWNiMmJjRWM5WTBLYlN0L1RFcWJEMFE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuM05GTGhaeFkyRjRaSHVZZHRldDV2NVkwSXFIdnl1ZkVKRWlsTjhHMnpXT2pvM2s2U0E1Q1p4amlDdDFQUUFnaXdnL250Vi9ieEdLWlZKUXJTSHBodz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjExMiwiYWR2U2VjcmV0S2V5IjoiMXpGVllZd0xFbVJaeXp0aHd4TVQvSFpWMFgwQVRsa3lKU1lUMlVpNFNRYz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicTBnVHFQaENRRkNWLWFnTlhVajZtZyIsInBob25lSWQiOiI3ZGIwNTljOC03ZWM0LTQ5MWQtOTExZS00Mjc3YjQyZGM5MDkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFlKSy9USTNOMzlnMU0yS3RqU2RTWGZlTS93PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvQ0k1WGhwc2kva3NVZExKQUVEejRGNHZNbWc9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNLTE80TzRFRU5lcWxLb0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ink3U2FIWUE4dG1DZnFreEYxbm9qT29VaktxNHdZMnAySWZueHM5RklEZ289IiwiYWNjb3VudFNpZ25hdHVyZSI6ImhtSUgyVXV0aUNaaWJBWHZDSEdCd2dFKzJUcEk0dHFNanF4QWs3M3ZMWWkzYmdtSkx3MnEyWi9DNXpjak9ZM2ovSXMrRjA2VjJ5eU54SDhnNFN6R0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJXVlJWV0tmMDlQdm03dnh3NjJIUTNrQ1A0OTJMZExIOFlEaFMxRzMwMlFXdTk2L212K2o2WFhnQTlraDdOaUtiK29GTWhpdk9aWXpQem8vbG40emNnUT09In0sIm1lIjp7ImlkIjoiMjU0NzcyOTQyNDg2OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4Ly6IPCShpzhtK7LoeG1g+G2nOG1j+G0uOG1ksqz4bWI4LySIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc3Mjk0MjQ4NjoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmN1MG1oMkFQTFpnbjZwTVJkWjZJenFGSXlxdU1HTnFkaUg1OGJQUlNBNEsifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE2OTkwMjYyNjZ9",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'BLADE BOT',
  packname:  process.env.PACK_NAME || 'MADE BY ALEX DAVID',
  
  botname:   process.env.BOT_NAME === undefined ? "BLADE-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'alexdavid' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴅᴇ-²²¹-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
