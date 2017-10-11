/**
 * Created by Administrator on 2017/10/11.
 */
//设置默认值
function log(x, y = 'World') {
    console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hell