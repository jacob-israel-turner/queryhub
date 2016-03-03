import koa from 'koa'
import mongoose from 'mongoose'
import koaRouter from 'koa-router'
import apiRoutes from './api/api.js'

const app = koa()
const router = koaRouter()

import { port, mongoURI } from './helpers/constants.js'

router.use('*', function *(next){
  const startTime = new Date()
  yield next
  // Save response time to DB, by this.routeType
  this.set('Response-Time', new Date() - startTime)
})
router.use('/api', apiRoutes)

mongoose.connect(mongoURI, (e) => {
  if (e) {
    console.error(e)
    throw e
  }
  console.log(`Connected to Mongo at: ${mongoURI}`)
  app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(port, (e) => {
      if (e) {
        console.error(e)
        throw e
      }
      console.log(`Now listening on port ${port}`)
    })
})
