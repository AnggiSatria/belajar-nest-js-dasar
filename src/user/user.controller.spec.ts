import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
// import module mocks
import httpMock from "node-mocks-http"

describe('UserController', () => {
  // Setup awal Nest membuat variable controller
  let controller: UserController;

  // Membuat testing module
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      // Controller yang dituju
      controllers: [UserController],
      // Unit Test dapat mengimport apapun dengan feature import
      // imports: [],
      // Unit Test juga bisa memasukan Providers apapun
      // providers: []
    }).compile();

    // Inisialisasi controller dari Controller yang dituju
    controller = module.get<UserController>(UserController);
  });

  it('should be defined', async() => {
    // Ini merupakan inisialisasi pertama
    // expect(controller).toBeDefined();
    // Kita dapat memanggil apa yang sedang ingin kita test disini jalankan perintah Controller dengan function yang dibuat agar kita dapat mencoba testing aplikasi kita contoh :
    // const response = await controller.sayHello('Anggi', 'Satria')
    // expect adalah perintah untuk mengeluarkan output sebelum di run pnpm run test
    // expect(response).toBe('Hello Anggi Satria')
    // Setelah kita mencoba untuk mengisi kita tinggal running di terminal pnpm run test
    // Berikut kita akan menjalankan unit test yang masih menggunakan @Req dan @Res yang menggunakan express.Request & express.Response
    const response = httpMock.createResponse()
    controller.viewHello("Anggi", response)
    // Untuk response dan requestnya biasanya menggunakan method dari functionnya dengan underscore atau _ diaawal
    expect(response._getRenderView()).toBe("index.html")
    // Karena functionnya mengirim object jadi menggunakan toEqual
    // Isi Object sesuaikan dengan parameter object yang dikirim
    expect(response._getRenderData()).toEqual({
      name: "Anggi",
      title: "Template Engine"
    })
  });
});
