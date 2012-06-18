var util = require('util');

/*
 * GET home page.
 */

exports.index = function(req, res) {
    res.render('home/index',
                {
                    title: 'Express',
                    secondTitle: 'And this the second title that shows up'
                });
};
