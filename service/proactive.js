const restUtil = require('../util/rest');

function validateBody(body) {
    console.log(typeof body);
    console.log(typeof body.id);
    console.log(typeof body.message);
    console.log(Array.isArray(body.message));
    console.log(body.message.length);
    if (typeof body != 'object') {
        return false;
    }
    if (typeof body.id != 'string') {
        return false;
    }
    if (typeof body.message != 'object' || !Array.isArray(body.message)) {
        return false;
    }
    if (body.message.length == 0) {
        return false;
    }
    for (let i = 0; i < body.message.length; i++) {
        const item = body.message[i];
        console.log(typeof item);
        if (typeof item != 'string') {
            return false;
        }
    }
    return true;
}

const proactive = {
    sendProactive: async function (body) {
        let response = null;
        const fbAccessToken = process.env.FB_ACCESS_TOKEN;
        if (validateBody(body)) {

            const url = `https://graph.facebook.com/v6.0/me/messages?access_token=${fbAccessToken}`;

            for (let i = 0; i < body.message.length; i++) {
                const item = body.message[i];
                const sendBody = {
                    messaging_type: "UPDATE",
                    recipient: {
                        id: body.id
                    },
                    message: {
                        text: item
                    }
                };
                
                const options = {
                    url: url,
                    method: 'post',
                    body: sendBody,
                };
    
                const restResponse = await restUtil.send(options);
                console.log(restResponse.data);
            }

            response = {
                res: true
            };
        } else {
            response = {
                res: false
            };
        }
        return response;
    }
}

module.exports = proactive;