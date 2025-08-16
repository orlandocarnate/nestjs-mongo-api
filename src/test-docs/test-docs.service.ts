import { Injectable } from '@nestjs/common';

@Injectable()
export class TestDocsService {
    constructor() {
        console.log(`MONGO_URI=${process.env.MONGO_URI}`);
    }
}
