declare var atom;
module ts {

    /* Atom helpers */
    module Atom {
        export interface Atomic {
            $:any;
            $$:any;
            $$$:any;
            BufferedNodeProcess:any;
            BufferedProcess:any;
            EditorView:any;
            Git:any;
            Point:any;
            Range:any;
            ScrollView:any;
            SelectListView:any;
            Task:any;
            View:any;
            Workspace:any;
            WorkspaceView:any;
        }

        var _atomic:Atomic = null;

        /* Get access to the atom API */
        export function get() {
            if (_atomic == null) {
                var helper = window['require'];
                _atomic = helper('atom');
            }
            return _atomic;
        }
    }

    /* Basic console log function */
    export function prefix() {
        console.log("Hello World");
    }

    /* Inject an arbitrary dom node */
    export function break_dom() {
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

    /* Bind event handlers */
    export function log_keys() {
        document.addEventListener('keydown', (e) => {
            console.log(e);
        });
    }

    /* Create a 'view' container */
    export function create_view() {
    }
}

/*
 * Start up.
 *
 * NB. This function is invoked every time a window opens, or
 * (if activationEvents are set) when the activation event is
 * run.
 */
export function activate(state) {
    atom.workspaceView.command('ts:Hello', ts.prefix);
    atom.workspaceView.command('ts:BreakDom', ts.break_dom);
    atom.workspaceView.command('ts:LogKeys', ts.log_keys);
    atom.workspaceView.command('ts:View', ts.create_view);
    return true;
}
