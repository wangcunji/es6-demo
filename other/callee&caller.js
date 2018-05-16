// "use strict"  在严格模式会报错

function foo (){
    function bar(){
        console.log(arguments.callee)//bar
        console.log(arguments.caller)//值始终为undefined
        console.log(arguments.callee.caller)//foo
    };
    bar()
}
foo()//arguments.callee 指向正在执行的函数，arguments.callee.caller指向调用该函数的函数



