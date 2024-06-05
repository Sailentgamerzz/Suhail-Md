const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Daniel:Toyosi@cluster0.xqnrkny.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_01_06_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA2MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDU3LFxuICAgICAgICA0MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgODcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDY3LFxuICAgICAgICA0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDU4LFxuICAgICAgICA4NixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc4LFxuICAgICAgICA3MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxODgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMzEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgODYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODUsXG4gICAgICAgIDM2LFxuICAgICAgICAzNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDksXG4gICAgICAgIDAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjExLFxuICAgICAgICA2MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA5NixcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDU3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE5LFxuICAgICAgICA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQyLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDk5LFxuICAgICAgICA1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzksXG4gICAgICAgIDg4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyLFxuICAgICAgICA3NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDcwLFxuICAgICAgICA4NixcbiAgICAgICAgMTEwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiM1dCc3hZbEdueFlMUDd1Y3Bya2Iva0RZNTlwS2RqOWhnc2ZoWWYzenhObz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDMzMjYwMTg3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxMjgyREJCMjE5RDcxRjZFMzVERTRBQjY5NjlGQ0ExNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc2MDMyNjFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUmZlTnBoWFJUZEdQWm9WZlQ1MWxFQVwiLFxuICBcInBob25lSWRcIjogXCI3ZTAxYTNhYi1lNWZhLTRlMmUtYTk2OC1hYzM3M2E0YjNhYWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY3LFxuICAgICAgMjU0LFxuICAgICAgMjMzLFxuICAgICAgMjI3LFxuICAgICAgMTIsXG4gICAgICA1NSxcbiAgICAgIDIyNixcbiAgICAgIDEzMCxcbiAgICAgIDIwLFxuICAgICAgMjE2LFxuICAgICAgODUsXG4gICAgICAyNyxcbiAgICAgIDIyMyxcbiAgICAgIDIwNixcbiAgICAgIDYxLFxuICAgICAgNTEsXG4gICAgICAxOTAsXG4gICAgICAyMzksXG4gICAgICA3MixcbiAgICAgIDE5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjQsXG4gICAgICAyMzksXG4gICAgICAxMDMsXG4gICAgICAxMTEsXG4gICAgICAxMzcsXG4gICAgICAyMjYsXG4gICAgICAyNDksXG4gICAgICAxNDMsXG4gICAgICAyMSxcbiAgICAgIDExNCxcbiAgICAgIDE5MixcbiAgICAgIDg0LFxuICAgICAgMjA2LFxuICAgICAgMTk0LFxuICAgICAgODYsXG4gICAgICAxMzQsXG4gICAgICAxNjksXG4gICAgICA5MCxcbiAgICAgIDEyOSxcbiAgICAgIDI1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUWEE4UTNXRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzMzI2MDE4NzoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTIzMTQyMTIxNDg1NzoyNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLeTJ0R1VRczVlQ3N3WVlDaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImRuWGtMUTVRdlJ2Z3BlOEh3Z3hvNGlmSmxiUW5Oa09iaGh5N01wZWlHeFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVzE4SjlMNEl6dVhxeVZoTnM2bEtqOGdCSzdaMVJRWU9vZ1JsclR3S1poaG5aenVRbWNYbXlyZzNUTzNZcC9uRWxhNlZIUisyd0JLV2FuUkp1UmhRQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMmJlb1lKcG1oNGttZDgzeC8ybldWbTZBTXVUa3ZmV21DV3ppRmVIeVJrZVIxcVYwcG8xbDlWUlk2bld0Z25ZczBQMzZKTU1jMHhRZ3p4bVpBMDR1Qmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzMzI2MDE4NzoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzYwMzI1NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdnZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2dnLmpzb24iOiAie1wia2V5RGF0YVwiOlwiREdpS3FiVXpEVjgrR2dzOWE0ZnJ5TFV1Y2gvcWlkSytLQjM0YkpiaUh3TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTI2NzEyNzYsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzA2Mjg5OTYwNTMyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
