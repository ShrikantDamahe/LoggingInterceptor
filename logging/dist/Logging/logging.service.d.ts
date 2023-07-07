import { CreateLogDto } from './dto/response.dto';
export declare class LogsService {
    private readonly uri;
    private readonly dbName;
    private client;
    private db;
    private logsCollection;
    constructor();
    create(createLogDto: CreateLogDto): Promise<any>;
    findAll(): Promise<any[]>;
    private connectToMongoDB;
}
