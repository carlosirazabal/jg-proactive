const proactive = require('../service/proactive');

const controller = {
    sendProactive: async function (req, res) {
        const body = req.body;
        console.log(JSON.stringify(body));
        const response = await proactive.sendProactive(body);
        res.json(response);
    }
};

module.exports = controller;