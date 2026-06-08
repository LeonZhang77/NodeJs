import Koa from 'koa';
import Router from '@koa/router';

const app = new Koa();
const router = new Router();

// Define routes
router.get('/', (ctx, next) => {
  console.log(ctx);
  console.log(ctx.request);
  ctx.body = 'Hello World!';
});

router.get('/api', (ctx, next) => {
  console.log(ctx);
  console.log(ctx.request);
  ctx.body = 'Hello World! From API!';
});

// Apply router middleware
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);