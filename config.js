const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "zexmjCRY#WjDDs5W2c8CdMl-DMdzEr7g7Eb_V5NdR1HFPyZe7X-k", //put your session id
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/l7e7kt.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*👋 Hello I am nadeen poorna*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",  //true or false
MODE: process.env.MODE || "public", //private or public
AUTO_VOICE:"true" //true or false
};
