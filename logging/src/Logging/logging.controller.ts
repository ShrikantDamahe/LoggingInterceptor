/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, ValidationPipe, UseInterceptors } from '@nestjs/common';
import { LogsService } from './logging.service';
import { CreateLogDto } from './dto/response.dto';
import {loggingInterceptor} from './logging.interceptor'

@Controller('logs')
@UseInterceptors(loggingInterceptor)
export class LoggingController {
  constructor(private readonly logsService: LogsService) {}

  @Post()
  create(@Body(ValidationPipe) createLogDto: CreateLogDto) {
    return this.logsService.create(createLogDto);
  }

  @Get()
  async findAll() {
    return this.logsService.findAll();
  }
}

