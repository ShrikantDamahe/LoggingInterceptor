import { LogsService } from './logging.service';
import { CreateLogDto } from './dto/response.dto';
export declare class LoggingController {
    private readonly logsService;
    constructor(logsService: LogsService);
    create(createLogDto: CreateLogDto): Promise<any>;
    findAll(): Promise<any[]>;
}
