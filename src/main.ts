import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { sequelize } from './db/models';
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env' });

async function bootstrap() {
  await sequelize.sync();
  await sequelize.authenticate();
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT).then(() => {
    console.log(`Click link http://localhost:${process.env.PORT}/graphql`)
  });
}
bootstrap();
