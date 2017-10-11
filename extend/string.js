/**
 * Created by Administrator on 2017/10/10.
 */
//字符串重复
'x'.repeat(2)//'xx'
//repeat的参数是负数或者Infinity，会报错。
//小数取整，参数NaN等同于0。repeat的参数是字符串，则会先转换成数字
//字符串补全
'x'.padStart(2,'z')//zzx
'x'.padEnd(2,'z')//xzz
'xxxx'.padStart(2,'z')//xxxx
'abc'.padStart(10, '0123456789')//'0123456abc'多了截取
//如果省略第二个参数，默认使用空格补全长度
//两个用途，为数值补全指定位数和提示字符串格式。
//模板字符串
let x = 'x'
let y = `this is ${x}`//${}的大括号内可以进行运算，调用函数，变量未声明会报错
console.log(`string text line 1
string text line 2`);//换行
console.log(`
string text line 1
string text line 2`.trim())//第一行之前有一空白换行，trim()可消除换行