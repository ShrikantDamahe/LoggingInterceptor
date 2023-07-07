/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { LoggingController } from './logging.controller';
import { LogsService } from './logging.service';
import { loggingInterceptor } from './logging.interceptor';

@Module({ 
  controllers: [LoggingController],
  providers: [LogsService, loggingInterceptor],
})
export class LogsModule {} 
