/* eslint-disable prettier/prettier */
import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Injectable()
export class loggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(loggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const httpContext = context.switchToHttp();
    const req = httpContext.getRequest();
    const res = httpContext.getResponse();

    const { method, url, body, headers } = req;
    const { statusCode } = res;

    const class_name = context.getClass().name;
    const timestamp = new Date().toISOString();
 // refrence from https://stackoverflow.com/questions/55093055/logging-request-response-in-nest-js

    return next.handle().pipe(map((request)=>{
      // const log={
      //   body:body ,  
      //   `statusCode: ${statusCode},
      //    method:${method},
      //    url:${url},   
      //    class_name: ${class_name},
      //    TimeStamp:${timestamp}`,
      // };  
      this.logger.log(`headers:${JSON.stringify(headers)}, statusCode: ${statusCode}, method:${method}, url:${url},   
         class_name: ${class_name}, timeStamp:${timestamp}`, body)
      return request;
    }))
    
  }

  //   return next.handle().pipe(
  //     tap(request => { 
  //       this.logRequest(req,request);
  //     }), 
  //   );  
  // }

  // private logRequest(req: any, request: any,): void {

  //   const { statusCode } = req;
  //   const requestBody = JSON.stringify(request);
  //   const timestamp = new Date().toISOString();

  //   this.logger.log(` Time:${timestamp}, Request: [Status ${statusCode}], Body: ${requestBody}`);
  // }
}
