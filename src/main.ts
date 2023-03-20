import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
	const PORT = process.env.PORT || 5500;
	const app = await NestFactory.create(AppModule);

	const config = new DocumentBuilder().setTitle('Nest + Sequelize').setVersion('Documents Rest API').setVersion('1.0.0').addTag('Sequelize learn').build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api/docs', app, document);
	app.useGlobalPipes(new ValidationPipe());
	await app.listen(PORT, () => console.log(`server working on port = ${PORT}`));
}

bootstrap();
