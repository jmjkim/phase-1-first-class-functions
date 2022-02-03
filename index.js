function receivesAFunction(cbFunction) {
    return cbFunction();
}

function returnsANamedFunction() {
    return function fn() {
        return 'invoked inner function \'fn\''
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        return 'invoked anonymous function';
    }
}