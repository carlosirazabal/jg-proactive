const controller = require('./controller');

module.exports = function (app) {
    app.route('/proactive').post(controller.sendProactive);
};