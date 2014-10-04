var paypal_api = require('paypal-rest-sdk');

var config_opts = {
    'host': 'api.sandbox.paypal.com',
    'port': '',
    'client_id': 'AeQjSxAqfJJ_Km70P1rNuO_Tp6C9FWHdDWPsKfEpu8tDmEJpveUheghDcMto',
    'client_secret': 'ECSbXhDMCHRGU3VYH9-ByQzvhwX7y9ncvNeles7XU9PL2E6d4doHGfvp1BkA'
};

paypal_api.configure(config_opts);

var create_payment_json = {
            intent: 'sale',
            payer: {
                payment_method: 'paypal'
            },
            redirect_urls: {

                // http://localhost:3000/1/post/539eb886e8dbde4b39000007/paid?token=EC-4T17102178173001V&PayerID=QPPLBGBK5ZTVS
                return_url: 'https://localhost:3000/1/post/' + 'aaa' + '/paid',
                cancel_url: 'https://localhost:3000/1/post/' + 'aaa' + '/cancel'
            },
            transactions: [{
                amount: {
                    currency: 'TWD',
                    total: 99
                },
                description: '購買教學文章'
            }]
};

paypal_api.payment.create(create_payment_json, function (err, res) {
    if (err) {
        console.log(err);
    }

    if (res) {
        console.log("Create Payment Response");
        console.log(res);
    }
});