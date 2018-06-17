var postcss = require('postcss');

module.exports = postcss.plugin('pikachuplugin', function (options) {

    return function (css) {

        options = Object.assign( { prefix: "--pikachu-" }, options || {} );
        
        css.walkRules(function (rule) {

            rule.walkDecls(function (decl, i) {

                decl.prop = options.prefix + decl.prop;

            });

        });

    }

});
