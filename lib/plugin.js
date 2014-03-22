var ts;
(function (ts) {
    /* Basic console log function */
    function prefix() {
        console.log("Hello World");
    }
    ts.prefix = prefix;

    /* Inject an arbitrary dom node */
    function break_dom() {
        var cat = document.createElement('img');
        cat.src = 'http://placekitten.com/200/300';
        cat.className = "ts cat";
        var workspace = atom.workspaceView.length ? atom.workspaceView[0] : null;
        if (workspace) {
            workspace.appendChild(cat);
        }
    }
    ts.break_dom = break_dom;

    /* Bind event handlers */
    function log_keys() {
        document.addEventListener('keydown', function (e) {
            console.log(e);
        });
    }
    ts.log_keys = log_keys;
})(ts || (ts = {}));

/*
* Start up.
*
* NB. This function is invoked every time a window opens, or
* (if activationEvents are set) when the activation event is
* run.
*/
function activate(state) {
    atom.workspaceView.command('ts:Hello', ts.prefix);
    atom.workspaceView.command('ts:BreakDom', ts.break_dom);
    atom.workspaceView.command('ts:LogKeys', ts.log_keys);
    return true;
}
exports.activate = activate;
//# sourceMappingURL=plugin.js.map
