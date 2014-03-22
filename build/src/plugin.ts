declare var module;
declare var atom;

/* global atom */
'use strict';
var plugin = module.exports;

function prefix() {
    console.log("Hello World");
}

plugin.configDefaults = {
    browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
};

plugin.activate = function (state) {
    return atom.workspaceView.command('ts:Hello', prefix);
};
//# sourceMappingURL=package.js.map
