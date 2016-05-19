'use strict';

function collect_all_even(collection) {
    var newarray = [];

    for(var i = 0; i < collection.length; i++){
        if(i % 2 != 0){
            newarray.push(collection[i]);
        }
    }
    return newarray;
}

module.exports = collect_all_even;
