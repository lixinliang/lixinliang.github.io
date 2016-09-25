define('mod-a', ['mod-b', 'mod-c'], function ( b, c ) {
    console.log('i am mod-a');
    return 'mod-a,' + b + ',' + c;
});
