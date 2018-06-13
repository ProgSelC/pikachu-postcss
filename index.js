var postcss = require('postcss');

module.exports = postcss.plugin('pikachuplugin', function (options) {

    return function (css) {

        css.walkRules(function (rule) {

            rule.walkDecls(function (decl, i) {

                decl.prop = 'pikachu-' + decl.prop;

            });

        });

    }

});