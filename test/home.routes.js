var home = require('../routes/home.js'),
    should = require('should');

describe('home routes', function() {
    describe('index', function() {
        it('should return home/index view', function() {
            var res = {};
            res.render = function(view, vars) {
                view.should.equal('home/index');
            };
            home.index(null, res);
        });
        it('should have "Express" as title in locals', function() {
            var res = {};
            res.render = function(view, vars) {
                vars.title.should.equal('Express');
            };
            home.index(null, res);
        });
        it('should have a non-empty secondTitle property', function() {
            var res = {};
            res.render = function(view, vars) {
                vars.secondTitle.should.not.equal('');
            };
            home.index(null, res);
        });
    });
});
