import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import node_modulesnya
import cookieParser from "cookie-parser"
// import mustache
import mustache from "mustache-express"
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  // Perlu menambahkan NestExpressApplication untuk menggunakan fitur bawaan ExpressJS yang lebih maksimal
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(cookieParser("MY SECRET KEY"))
  app.set('views', __dirname + '/../views')
  app.set('view engine', 'html')
  app.engine('html', mustache())
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
