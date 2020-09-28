import { Module } from '@nestjs/common';
import { EnvironmentModule } from '@nsourcery/env';
import { AutoSwaggerService } from './auto-swagger.service';

@Module({
  imports: [EnvironmentModule],
  providers: [AutoSwaggerService],
  exports: [AutoSwaggerService],
})
export class AutoSwaggerModule {}
