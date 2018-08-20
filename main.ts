import { Server } from './server/server'
import { usersRouter } from './users/users.router'
import { restaurantRouter } from './restaurants/restaurants.router'
import { reviews } from './reviews/reviews.router'

const server = new Server()
server.bootstrap([
  usersRouter,
  restaurantRouter,
  reviews
]).then(server => {
  console.log('Server is listening on:', server.application.address())
}).catch(error => {
  console.log('Server failed to start')
  console.error(error)
  process.exit(1)
})
