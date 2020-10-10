/* Magic Mirror
 * Module: MMM-JEOPARDY
 *
 * By Mykle1
 *
 */
const NodeHelper = require('node_helper');
const request = require('request');



module.exports = NodeHelper.create({

    start: function() {
        console.log("Starting node_helper for: " + this.name);
    },

    fetchData: function(url) {
        request({
            url: url,
            method: 'GET'
        }, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                var result = JSON.parse(body); // Parsing an array this line and next line
			    console.log(response.statusCode);
                this.sendSocketNotification('CORONA_DRESDEN_RESULT', result);
            }else {
                this.sendSocketNotification('CORONA_DRESDEN_RESULT', null);
            }
        });
    },

    socketNotificationReceived: function(notification, payload) {
        if (notification === 'FETCH_CORONA_DRESDEN') {
            this.fetchData(payload);
        }
    }
});