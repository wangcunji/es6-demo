function* f (){
    yield '1';
    yield '2';
    return 3;
}

let foo = f()

console.log(foo.next())

console.log(foo.next())

console.log(foo[Symbol.iterator]())

