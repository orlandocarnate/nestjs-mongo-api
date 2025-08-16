import { Test, TestingModule } from '@nestjs/testing';
import { TestDocsService } from './test-docs.service';

describe('TestDocsService', () => {
  let service: TestDocsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestDocsService],
    }).compile();

    service = module.get<TestDocsService>(TestDocsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
