declare var atom;
declare var $;
module ts {

    /* Basic console log function */
    export function prefix() {
        console.log("Hello World");
    }

    /* Inject an arbitrary dom node */
    export function break_dom() {
        var cat = document.createElement('img');
        cat.src = 'http://placekitten.com/200/300';
        cat.className = "ts cat";
        var workspace = atom.workspaceView.length ? atom.workspaceView[0] : null;
        if (workspace) {
            workspace.appendChild(cat);
        }
    }

    /* Bind event handlers */
    export function log_keys() {
        document.addEventListener('keydown', (e) => {
           console.log(e);
        });
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
    return true;
}
