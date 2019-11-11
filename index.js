const koa = require('koa')

const app = new koa()

app.use(async ctx =>{
    ctx.body = 'hellow'
    console.log('第一层循环开始')
    await next()
    console.log('第一层循环结束')
})

app.use(async ctx =>{
    console.log('第二层循环开始')
    await next()
    console.log('第二层循环结束')
})

app.use(async ctx =>{
    console.log('第三层循环开始')
    await next()
    console.log('第三层循环结束')
})

app.listen(3000,()=>{
    console.log('启动成功')
})

// const Koa = require('koa');
// const app = new Koa();

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

// app.listen(3000);