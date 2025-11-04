<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ pnpm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

#Decorator

Nest JS mendukung kinerja Decorator dari Javascript yang mana lebih mempermudah bahkan berguna untuk clean code

#Cara menambahkan atau generate module otomatis

Jalankan perintah :

nest generate module nama-path

module akan otomatis terbuat di path yang di daftarkan

lalu module akan otomatis tergenerate di app.module atau module utama untuk terinisialisasi pada aplikasi nest js

#Cara menambahkan atau generate controller

Jalankan Perintah :

nest generate controller nama-path

controller akan ditambahkan berikut dengan unit testnya dengan spec dari jest

controller akan tergenerate langsung pada module yang tersedia di path yang di tuju

#Nest memiliki beberapa Decorator untuk mendukung HTTP Method antara lain

- `@Get(path)` untuk **HTTP GET**
- `@Post(path)` untuk **HTTP POST**
- `@Put(path)` untuk **HTTP PUT**
- `@Delete(path)` untuk **HTTP DELETE**
- `@Patch(path)` untuk **HTTP PATCH**
- `@Head(path)` untuk **HTTP HEAD**
- `@Options(path)` untuk **HTTP OPTIONS**
- `@All(path)` untuk **semua HTTP Method**

#Nest memiliki beberapa Decorator untuk mendukung HTTP Request bahkan Nest Dapat menjalankan fungsi Express JS namun dengan object express.Request karena Nest JS sendiri menggunakan teknologi dari Express JS itu sendiri

- `Saat membuat Routing, biasanya kita ingin mendapatkan informasi yang dikirim oleh pengguna, baik itu Query Param, Headers, Request Body dan lain-lain`
- `Karena Nest JS secara default menggunakan Express, kita bisa menambahkan parameter express.Request dan menggunakan decorator @Req()`
- `REKOMENDASI : Walaupun kita bisa menggunakan object express.Request, namun direkomendasikan kita langsung menyebutkan data yang dibutuhkan di parameter menggunakan Decorator yang sudah disediakan oleh Nest`

#Nest memiliki beberapa Decorator untuk mendukung HTTP Request antara lain

- `@Req()` untuk **express.Request**
- `@Param(key?)` untuk **req.params.key?**
- `@Body(key?)` untuk **req.body.key?**
- `@Query(key?)` untuk **req.query.key?**
- `@Header(key?)` untuk **req.headers.key?**
- `@Ip()` untuk **req.ip**
- `@HostParam()` untuk **req.hosts**

#Express HTTP Response, pada Nest memiliki feature yang sama untuk Response namun disarankan untuk langsung return

- `Secara default, return value dari method di controller akan dijadikan response body untuk HTTP Response`
- `Namun, kita juga bisa menggunakan express.Response jika kita mau, kita cukup menggunakan decorator @Res()`
- `Jika kita menggunakan express.Response, kita wajib mengirim response pada express.Response tersebut, bukan lewat return value lagi`
- `REKOMENDASI : Walaupun kita bisa menggunakan object express.Response, namun direkomendasikan kita langsung menggunakan return value pada method nya`
- `NestJS juga menyediakan Decorator yang bisa digunakan pada method untuk mengubah informasi Response`

#Nest memiliki beberapa Decorator untuk mendukung HTTP Response antara lain

- `@HTTPCode(code)` untuk **mengubah response status code**
- `@Header(key, value)` untuk **mengubah response header**
- `@Redirect(location, code)` untuk **melakukan redirect, lokasi redirect bisa diubah dengan mengembalikan data HTTPRedirectResponse**
- `@Next()` untuk **express.NextFunction atau jika berhasil langsung lanjut ke eksekusi selanjutnya**

#Asynchronous Nest JS

- `Sama seperti Handler di Express JS, di NestJS juga kita bisa menggunakan Asynchronous Method pada Controllernya`
- `Dengan begitu kita bisa menggunakan Async Method dan return Promise<T> data`

#Cookie Nest JS

- `Di Kelas NodeJS ExpressJS, kita sudah belajar tentang cara menggunakan Cookie di Express JS atau Server`
- `Secara default, ExpressJS tidak mendukung Cookie, oleh karena itu kita harus gunakan library tambahan seperti cookie-parser`
- `Untuk menggunakan di NestJS, kita bisa tambahkan ke app di file main.ts`

#Menginstall Cookie Parse

- `Sebelum menggunakan Cookie Parser, kita bisa menginstalnya menggunakan perintah : pnpm add cookie-parser untuk mendapatkan tipe datanya sekalian install pnpm add --save-dev @types/cookie-parser`

#View Nest JS

- `NestJS tidak memiliki template engine untuk membuat View, namun karena menggunakan ExpressJS, kita bisa menggunakan template engine yang bisa diintegrasikan dengan ExpressJS`
- `Kita pernah bahas di kelas ExpressJS tentang menggunakan tentang menggunakan Mustache`
- `Cara penggunaannya sama`

#Menambahkan Library Mustache

- `Kita bisa tambahkan library Mustache ke project yang kita buat : pnpm add mustache-express & pnpm add --save-dev @types/mustache-express`

#Unit Test Nest JS

- `Saat kita membuat Controller menggunakan perintah nest, secara otomatis akan dibuatkan template unit testnya`
- `NestJS menggunakan Jest sebagai framework untuk Unit Testnya, sehingga mudah untuk dilakukan karena sebelumnya kita pernah belajar Jest di kelas NodeJS Unit Test`

#Kekurangan Unit Test

- `Saat menggunakan Unit Test, beberapa hal kadang akan menyulitkan untuk dilakukan, misal jika di Controller kita menggunakan parameter express.Request atau express.Response`
- `Maka kita harus menggunakan Mock object, seperti yang sudah kita bahas di materi NodeJS Unit Test`
- `Contoh, kita bisa menggunakan https://www.npmjs.com/package/node-mocks-http`
- `pnpm add --save-dev node-mocks-http`