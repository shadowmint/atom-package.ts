# Sample atom.io package in typescript.

## Quickstart

    cd build
    npm run quickstart

Or run npm install and grunt manually.

You must then copy the folder into your .atom/packages directory, or run:

    apm install .

From the cloned folder.

For development purposes it's convenient to create a symbolic link to that
folder:

    ln -s package.ts ~/.atom/packages/package.ts

Then run 'grunt watch'; don't forget to use the system appropriate reload-editor
to see changes (on mac: control-option-command-l).

This package uses SASS and you do actually need sass installed for it to run
grunt; 'gem install sass' usually does the trick.

### Usage in atom

Run the command: ts:dev

You'll then have access to various other ts:* functions to play with.

## Notes regarding packages without coffee

### Build layout

Don't use the parent package.json for dev; that's used by atom to manage
the package; adding dependencies to that needlessly bloats the plugin install.

### Debugging

See View > Developer > Toggle Developer Tools in Atom.

### Activation

Notice that package.json contains an activation hook:

    "activationEvents": ["ts:Hello"],

The module will not *actually be loaded* until after the activation
hook is run. This is not mandatory; to load on application load, exclude
this line from the top level package.json.

However, don't be surprised if the module doesn't run.

Also note that there is nothing 'magical' about lib. The manifest specifically
says what file to load and from where in package.json:

    ...
    "main": "./lib/ts.js",
    ...

This is the file that must contain an activate, etc.

### Regarding 'activate'

Note that console.log is not available when activate is invoked; the developer
console will not show messages traced here.

### UI

TODO

How on earth does this work?

see: https://atom.io/docs/api/v0.69.0/api/classes/WorkspaceView.html

