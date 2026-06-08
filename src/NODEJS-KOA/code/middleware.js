import Koa from 'koa';
const app = new Koa();

const middleware = function async(ctx, next) {
    console.log ('this is middleware') ;
    next();
    console.log ('out middleware') ;

};

const middleware1 = function async(ctx, next) {
    console.log ('this is middleware1') ;
    next();
    console.log ('out middleware1') ;
};

const middleware2 = function async(ctx, next) {
    console.log ('this is middleware2') ;
    next();
    console.log ('out middleware2') ;
};

app.use(middleware);
app.use(middleware1);
app.use(middleware2);
app.listen(3000);