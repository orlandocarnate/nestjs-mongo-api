import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type TestDocsDocument = TestDocs & Document;

@Schema()
export class TestDocs {
    @Prop({required: true})
    title: string;

    @Prop()
    description?: string;
}

export const TestDocsSchema = SchemaFactory.createForClass(TestDocs);