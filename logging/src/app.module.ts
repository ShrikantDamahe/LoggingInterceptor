/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
// import { APP_INTERCEPTOR } from '@nestjs/core';
// import { loggingInterceptor } from './Logging/logging.interceptor';
import { LogsModule } from './Logging/logging.module';
import {AppService} from './app.service';
import { AppController } from './app.controller'; 

@Module({
  imports: [LogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
