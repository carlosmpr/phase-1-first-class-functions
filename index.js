function  receivesAFunction(callback) {
    callback()
}


function returnsANamedFunction() {
    return function Hello() {
        return "before all"
    }
    
}

function returnsAnAnonymousFunction() {
    return function () {
        return "before all"
    }
    
}