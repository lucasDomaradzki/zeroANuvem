import { Router } from '../common/router'
import * as restify from 'restify'
import { User } from './users.model'

class UsersRouter extends Router {

  constructor() {
    super()
    this.on('beforeRender', document => {
      document.password = undefined
    })
  }

  applyRoutes(application: restify.Server) {

    application.get('/users', (req, resp, next) => {
      User.find().then(this.render(resp, next))
    })

    application.get('/users/:id', (req, resp, next) => {
      User.findById(req.params.id).then(this.render(resp, next))
    })

    application.post('/users', (req, resp, next) => {
      let user = new User(req.body)
      user.save().then(this.render(resp, next))
    })

    application.put('/users/:id', (req, resp, next) => {
      const options = {overwrite: true}
      User.update({_id:req.params.id}, req.body, options)
          .exec().then(result => {
            if(result.n) {
              return User.findById(req.params.id)
            } else {
              resp.send(404)
            }
          }).then(this.render(resp, next))
    })

    application.patch('/users/:id', (req, resp, next) => {
      const options = {new: true}
      User.findByIdAndUpdate(req.params.id, req.body, options)
          .then(this.render(resp, next))
    })

    application.del('/users/:id', (req, resp, next) => {
      User.remove({_id:req.params.id}).exec().then((cmdResult: any) => {
        if(cmdResult.result.n) {
          resp.send(204)
          return next(204)
        } else {
          resp.send(404)
        }
        return next()
      })
    })
  }
}

export const usersRouter = new UsersRouter()