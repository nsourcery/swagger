import { INestApplication, Injectable } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { EnvironmentService } from '@nsourcery/env';

@Injectable()
export class AutoSwaggerService {
  addSwagger(
    app: INestApplication,
    env: EnvironmentService,
    prefix: string = 'APP',
  ): void {
    const options = new DocumentBuilder()
      .setTitle(env.get(`${prefix}_TITLE`) || 'Sample API')
      .setDescription(
        env.get(
          `${prefix}_DESCRIPTION` ||
            'This is a sample API used, use it as you like.',
        ),
      )
      .setVersion(env.get(`${prefix}_VERSION`) || 'v1')
      .build();
    const docs = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup(env.get(`${prefix}_DOCS` || 'api-docs'), app, docs);
  }
}
