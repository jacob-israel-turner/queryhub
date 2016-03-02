import koaRouter from 'koa-router'
import { setRouteType } from '../helpers/middleware'

const router = koaRouter()

router
  .use('*', setRouteType('api'))
  .get('/test', function *(){
    this.body = 'nested routes work!'
  })
  .all('*', function *(){
    this.status = 401
    this.body = `That API endpoint doesn't exist`
  })

export default router.routes()
