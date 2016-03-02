export const setRouteType = function (type) {
  return function *(next){
    this.routeType = type
    yield next
  }
}
