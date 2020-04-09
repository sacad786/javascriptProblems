// Create a function that takes an object and returns the keys and values as separate arrays.

// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]

function keysAndValues(obj) {
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    let a = [];
    a.push(keys,values)
    console.log(a)
}

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })



