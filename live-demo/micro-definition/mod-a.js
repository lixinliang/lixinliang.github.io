define('mod-a@1.0.0', ['mod-b', 'mod-c'], function ( b, c ) {
    console.log('i am mod-a');
    return 'mod-a,' + b + ',' + c;
});
