"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var loggingInterceptor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let loggingInterceptor = exports.loggingInterceptor = loggingInterceptor_1 = class loggingInterceptor {
    constructor() {
        this.logger = new common_1.Logger(loggingInterceptor_1.name);
    }
    intercept(context, next) {
        const httpContext = context.switchToHttp();
        const req = httpContext.getRequest();
        const res = httpContext.getResponse();
        const { method, url, body, headers } = req;
        const { statusCode } = res;
        const class_name = context.getClass().name;
        const timestamp = new Date().toISOString();
        return next.handle().pipe((0, operators_1.map)((request) => {
            this.logger.log(`headers:${JSON.stringify(headers)}, statusCode: ${statusCode}, method:${method}, url:${url},   
         class_name: ${class_name}, timeStamp:${timestamp}`, body);
            return request;
        }));
    }
};
exports.loggingInterceptor = loggingInterceptor = loggingInterceptor_1 = __decorate([
    (0, common_1.Injectable)()
], loggingInterceptor);
//# sourceMappingURL=logging.interceptor.js.map