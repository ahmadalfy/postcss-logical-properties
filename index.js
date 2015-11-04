'use strict';

var postcss = require('postcss');

var BASE_DIRECTION  = 'ltr';
var whitelistProps  = /^(float|clear|text-align)/;
var logicalValues   = ['inline-start', 'inline-end', 'start', 'end'];

module.exports = postcss.plugin('postcss-logical-properties', function (opts) {

  opts = opts || {};

  return function (css) {

    var options = {};
    options.rootDir       = (opts.rootDir  !== undefined) ? opts.rootDir  : BASE_DIRECTION;
    options.replace       = (opts.replace  !== undefined) ? opts.replace  : false;
    options.html          = (opts.html     !== undefined) ? opts.html     : true;

    if (options.html) {
      // First, check root direction
      css.walkRules(function (rule) {
        if (/^(html|:root)$/.test(rule.selectors)) {
          rule.walkDecls(function (decl) {
            if (decl.prop === 'direction') {
              options.rootDir = decl.value;
            }
          });
        }
      });
    }

    // Use the proper value based on the direction
    css.walkRules(function (rule) {
      rule.each(function (decl, i) {
        if (decl.type !== 'decl') { return; }
        var value = decl.value;
        var prop = decl.prop;
        if(!whitelistProps.test(prop)) {
          return;
        }
        if (logicalValues.indexOf(value) !== -1) {
          if (options.rootDir === 'ltr') {
            switch(value) {
              case 'inline-start':
              case 'start':
                value = 'left';
                break;
              case 'inline-end':
              case 'end':
                value = 'right';
                break;
            }
          } else if (options.rootDir === 'rtl') {
            switch(value) {
              case 'inline-start':
              case 'start':
                value = 'right';
                break;
              case 'inline-end':
              case 'end':
                value = 'left';
                break;
            }
          }
          if (options.replace) {
            decl.value = value;
          } else {
            var clone = decl.clone({ value: value });
            if (decl.raws.before) {
              clone.raws.before = decl.raws.before;
            }
            rule.insertBefore(i, clone);
          }
        }
      });
    });
  };
});
