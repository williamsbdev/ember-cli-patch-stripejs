/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-patch-stripejs',
  contentFor: function(type) {
    var environment = this.app.env.toString();
    if (type === 'head') {
      if (environment === 'production') {
        return '<script type="text/javascript" src="https://js.stripe.com/v2/"></script>';
      } else {
        return '<script type="text/javascript">' +
          'var Stripe = {' +
            'setPublishableKey: function() { console.log("Setting publishable key.") },' +
              'card: {' +
                'createToken: function(card, callback) { ' +
                  'console.log("createToken was called.");' +
                  'callback(status, response);' +
              '}' +
            '}' +
          '};' +
          '</script>';
      }
    }
  }
};
