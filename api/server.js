import koa from 'koa'
import _ from 'koa-route'

const app = koa()

app.use(_.get('/test', function *(){
  this.body = 'here is a response'
}))

app.listen(9001)
