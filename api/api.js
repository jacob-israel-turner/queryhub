import koaRouter from 'koa-router'
import { setRouteType } from '../helpers/middleware'
import { user } from './controllers'

const router = koaRouter()

router
  .use('*', setRouteType('api'))
  .get('/user', user.getUser)
  .all('*', function *(){
    this.status = 404
    this.body = `That API endpoint doesn't exist`
  })

export default router.routes()
