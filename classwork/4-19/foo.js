console.log('foo.js loaded')

var base = "this is in f1 in global namespace";

var x = "x in the global namespace";

var f2 = function() {
    console.log('this is f2');
};

var f1 = {
    x : "sumpn in the f1 namespace",
    f2 : f2,
    f : function() {
        console.log('this is in f in 1 namespace');
        console.log('x is ' + x);
        console.log('f1.x is ' + f1.x);
        console.log('better way: ' + this.x);
    }
};

var inc_class = {
    x : 0,
    inc : function() {
        this.x++;
    }
}

var makeIncrement = function() {
    var i = 0;
    var inc = function() {
        return ++i;
    };
    return inc;
};
