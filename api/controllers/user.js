export const getUser = function *(){
  if (!this.request.query.user_name) {
    this.status = 400
    this.body = 'Insufficient Parameters'
    return
  }
  console.log(`I'm gonna get stuff for this user: ${this.request.query.user_name}`)
  this.body = `got stuff for user: ${this.request.query.user_name}`
}
