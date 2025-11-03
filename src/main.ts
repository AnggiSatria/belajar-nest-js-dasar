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
  // Memberi tahu Express di mana folder berisi file template view (HTML).
  // __dirname adalah path folder tempat file main.ts berada (misalnya /dist saat sudah di-build).
  // + '/../views' artinya ambil folder views satu tingkat di atas folder ini.
  // Tujuannya: supaya Express tahu ke mana harus mencari file seperti index.html, login.html, dsb, ketika kamu memanggil res.render('index').
  // harus disesuaikan dengan path yang kamu set di app.set('views', ...).
  app.set('views', __dirname + '/../views')
  // Mengatur ekstensi default view engine yang digunakan untuk merender tampilan.
  // 'view engine' digunakan kalau kamu ingin menggunakan fungsi res.render() untuk menampilkan tampilan (HTML template).
  app.set('view engine', 'html')
  // Mendefinisikan bagaimana cara Express merender file .html menggunakan Mustache sebagai templating engine.
  // Biasanya Express butuh tahu engine apa yang digunakan untuk tiap ekstensi file template.
  // Di sini kamu mendaftarkan mustache-express sebagai engine untuk file .html.
  //   Dengan begini:
  // Kalau kamu panggil res.render('home', { name: 'Anggi' })
  // Express akan mencari file views/home.html
  // Mustache akan mengganti variabel {{name}} di file HTML dengan nilai "Anggi"
  // app.engine() adalah cara mendaftarkan custom view engine ke Express.
  // Artinya, kamu sedang bilang ke Express:
  // “Kalau nanti kamu harus merender file dengan ekstensi tertentu, gunakan engine (fungsi) ini untuk memprosesnya.”
  app.engine('html', mustache())
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
