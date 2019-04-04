const postcss = require('postcss');
const flex = require('./lib/flex');

module.exports = postcss.plugin('postcss-propro',  opts => {
  	return (root, result) => {
        root.walkRules(rule => {
            rule.walkDecls(decl => {
                decl.prop === 'display' &&
                decl.value.startsWith('flex-') &&
                flex(decl, opts, result);
            });
        });
  	};
});
