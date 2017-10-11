/**
 * Created by Administrator on 2017/10/11.
 */
//去除一个数的小数部分，返回整数部分
Math.trunc(4.1)//4
Math.trunc('11.23')//11
Math.trunc(true)//1
Math.trunc(false)//0
Math.trunc()//NaN
Math.trunc('asda')//NaN
//方法模拟
Math.trunc = Math.trunc || function(x) {
        return x < 0 ? Math.ceil(x) : Math.floor(x);
    };

//数值判断
Math.sign(12)//正数返回+1
Math.sign(-12)//负数返回-1
Math.sign(0)//0
Math.sign(-0)//-0
Math.sign('dadas')//NaN
//方法模拟
Math.sign = Math.sign || function(x) {
        x = +x; // convert to a number
        if (x === 0 || isNaN(x)) {
            return x;
        }
        return x > 0 ? 1 : -1;
    };

//计算一个数的立方根
Math.cbrt(-1)//-1
Math.cbrt(1)//1
Math.cbrt(9)//3
//方法模拟
Math.cbrt = Math.cbrt || function(x) {
        var y = Math.pow(Math.abs(x), 1/3);
        return x < 0 ? -y : y;
    };

//返回一个数的32位无符号整数形式有多少个前导0
Math.clz32(0) // 32
Math.clz32(1) // 31
Math.clz32(1000) // 22

//返回两个数以32位带符号整数形式相乘的结果
Math.imul(2, 4)   // 8
Math.imul(-1, 8)  // -8
Math.imul(-2, -2) // 4

//返回一个数的单精度浮点数形式
Math.fround(0)     // 0
Math.fround(1)     // 1
Math.fround(1.337) // 1.3370000123977661
Math.fround(1.5)   // 1.5
Math.fround(NaN)   // NaN
//方法模拟
Math.fround = Math.fround || function(x) {
        return new Float32Array([x])[0];
    };

//返回所有参数的平方和的平方根
Math.hypot(3, 4);        // 5
Math.hypot(3, 4, 5);     // 7.0710678118654755
Math.hypot();            // 0
Math.hypot(NaN);         // NaN
Math.hypot(3, 4, 'foo'); // NaN
Math.hypot(3, 4, '5');   // 7.0710678118654755
Math.hypot(-3);          // 3

//对数方法
Math.expm1()//Math.expm1(x)返回ex - 1，即Math.exp(x) - 1。
Math.expm1(0)  // 0
Math.log1p()//返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN。
Math.log1p(1)  // 0.6931471805599453
Math.log1p(0)  // 0
Math.log10()//Math.log10(x)返回以10为底的x的对数。如果x小于0，则返回NaN。
Math.log10(2)      // 0.3010299956639812
Math.log10(1) //0
Math.log2()//Math.log2(x)返回以2为底的x的对数。如果x小于0，则返回NaN。
Math.log2(2)       // 1
Math.log2(1)       // 0
Math.log2(0)       // -Infinity
Math.log2(-2)      // NaN

//Math.signbit()方法判断一个数的符号位是否设置了
Math.signbit(2) //false
Math.signbit(-2) //true
Math.signbit(0) //false
Math.signbit(-0) //true

//指数运算符**
2 ** 2 //4
2 ** 4 //16
//**=
let a =3
a **= 3 //相当于a = a*a*a
//注意，在 V8 引擎中，指数运算符与Math.pow的实现不相同，对于特别大的运算结果，两者会有细微的差异。
























