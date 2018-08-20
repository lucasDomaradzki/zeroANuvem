"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../common/model.router");
const reviews_model_1 = require("./reviews.model");
class ReviewsRouter extends model_router_1.ModelRouter {
    constructor() {
        super(reviews_model_1.Review);
    }
    prepareOneQuery(query) {
        return query.populate('user', 'name')
            .populate('restaurant', 'name');
    }
    // This function have the same effect of the above
    // findById = (req, resp, next) => {
    //   this.model.findById(req.params.id)
    //     .populate('user', 'name')
    //     .populate('restaurant', 'name')
    //     .then(this.render(resp, next))
    //     .catch(next)
    // }
    applyRoutes(application) {
        application.get('/reviews', this.findAll);
        application.get('/reviews/:id', [this.validateId, this.findById]);
        application.post('/reviews', this.save);
    }
}
exports.reviews = new ReviewsRouter();
