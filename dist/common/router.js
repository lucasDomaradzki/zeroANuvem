"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify_errors_1 = require("restify-errors");
const events_1 = require("events");
class Router extends events_1.EventEmitter {
    render(response, next) {
        return (document) => {
            if (document) {
                this.emit('beforeRender', document);
                response.json(document);
            }
            else {
                throw new restify_errors_1.NotFoundError('Documento não encontrado.');
            }
            return next();
        };
    }
    renderAll(response, next) {
        return (documents) => {
            if (documents) {
                documents.forEach(document => {
                    this.emit('beforeRender', document);
                });
                response.json(documents);
            }
            else {
                response.json([]);
            }
        };
    }
}
exports.Router = Router;
