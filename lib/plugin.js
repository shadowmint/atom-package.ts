var ts;
(function (ts) {
    /* Atom helpers */
    var Atom;
    (function (Atom) {
        var _atomic = null;

        /* Get access to the atom API */
        function get() {
            if (_atomic == null) {
                var helper = window['require'];
                _atomic = helper('atom');
            }
            return _atomic;
        }
        Atom.get = get;
    })(Atom || (Atom = {}));

    /* Basic console log function */
    function prefix() {
        console.log("Hello World");
    }
    ts.prefix = prefix;

    /* Inject an arbitrary dom node */
    function break_dom() {
        var $ = Atom.get().$;
        var $cat = $('<img/>');
        $cat.attr('src', 'http://placekitten.com/150/150');
        $cat.addClass('ts');
        $cat.addClass('cat');
        var workspace = atom.workspaceView.length ? atom.workspaceView[0] : null;
        if (workspace) {
            $(workspace).append($cat);
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

    /* Execute an external process */
    function execute_process() {
        var process = Atom.get().BufferedProcess;
        var args = {
            command: '/bin/ls',
            options: {},
            args: [],
            stdout: function (l) {
                console.log("ls: " + l);
            },
            stderr: function (l) {
                console.log("ls: " + l);
            },
            exit: function (code) {
                console.log("Task completed:" + code);
            }
        };
        var runner = new process(args);
        console.log(runner);
    }
    ts.execute_process = execute_process;

    /* Create a 'view' container */
    function create_view() {
        // ????
    }
    ts.create_view = create_view;
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
    atom.workspaceView.command('ts:Process', ts.execute_process);
    atom.workspaceView.command('ts:View', ts.create_view);
    return true;
}
exports.activate = activate;
//# sourceMappingURL=plugin.js.map
