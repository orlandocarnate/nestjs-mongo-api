import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestDocs, TestDocsSchema } from './test-docs.schema';
import { TestDocsService } from './test-docs.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: TestDocs.name, schema: TestDocsSchema }]),
    ],
    providers: [TestDocsService],
    exports: [TestDocsService],
})
export class TestDocsModule {}
