
var gobal;

(function(a,b){
    a===1&&b===2?gobal = 12:a===3&&b===4?gobal = 34:gobal = 45;
}(4,2))

console.log(gobal)