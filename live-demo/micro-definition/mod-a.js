define('mod-a@1.0.0', ['mod-b', 'mod-c'], function ( b, c ) {
    console.log('mod-a is definitional/registed, I am waiting for some one use me.');
    return 'mod-a,' + b + ',' + c;
});
