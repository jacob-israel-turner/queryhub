import koa from 'koa'
import koaRouter from 'koa-router'
import apiRoutes from './api/api.js'

const app = koa()
const router = koaRouter()

router.use('*', function *(next){
  // Set request timer, Save request/response time to DB, by this.routeType
  yield next
})
router.use('/api', apiRoutes)

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(9001)
