import { OnApplicationShutdown, Inject, Injectable } from "@nestjs/common";
import { DbContext } from "data-provider";
import { INJECTION_KEYS } from "infrastructure/@types/enum.keys";

@Injectable()
export class DatabaseShutdown implements OnApplicationShutdown {
    constructor(@Inject(INJECTION_KEYS.DbContext) private readonly dbContext:  DbContext){}
    
    async onApplicationShutdown(signal?: string) {
        await this.dbContext.closeConnection()
    }
}