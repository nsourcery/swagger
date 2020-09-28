import { Test, TestingModule } from '@nestjs/testing';
import { AutoSwaggerService } from './auto-swagger.service';

describe('SourceryService', () => {
  let service: AutoSwaggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutoSwaggerService],
    }).compile();

    service = module.get<AutoSwaggerService>(AutoSwaggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
