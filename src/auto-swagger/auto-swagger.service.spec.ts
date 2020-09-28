import { Test, TestingModule } from '@nestjs/testing';
import { MockEnvironmentService } from '@nsourcery/common';
import { EnvironmentService } from '@nsourcery/env';
import { AutoSwaggerService } from './auto-swagger.service';

describe('SourceryService', () => {
  let service: AutoSwaggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AutoSwaggerService,
        { provide: EnvironmentService, useClass: MockEnvironmentService },
      ],
    }).compile();

    service = module.get<AutoSwaggerService>(AutoSwaggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
