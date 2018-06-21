var postcss = require('postcss');

module.exports = postcss.plugin('pikachuplugin', function (options) {

    return function (css) {

        options = Object.assign( { prefix: "--pikachu-" }, options || {} );
        
        css.walkRules(function (rule) {

            rule.walkDecls(function (decl, i) {

                var newDecl = decl.cloneBefore();
                newDecl.prop = options.prefix + newDecl.prop;

            });

        });

    }

});
