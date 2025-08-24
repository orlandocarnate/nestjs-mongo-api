import { Injectable } from '@nestjs/common';
import { HelloWorldDto } from './hello-world.dto';

@Injectable()
export class HelloWorldService {
    public getMessage(): HelloWorldDto {
        return {
            message: "Hello, World!"
        };
    }
}
