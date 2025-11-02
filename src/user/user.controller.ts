import { Controller, Get, Header, HttpCode, Param, Post, Query, Redirect, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';
import type { HttpRedirectResponse} from '@nestjs/common';

// pada controller kita bisa atur default routingnya tanpa harus setup routing seperti aplikasi Express JS
// pada case berikut user memiliki default path atau default route localhost:<port>/user
// namun kita juga dapat mengosongkan atau menambahkan agar default seperti yang kita inginkan
// kita tinggal ubah Detractor @Controller('user') menjadi @Controller('api/user') ini contoh
@Controller('/api/user')
export class UserController {
    
    // Karena pada Detractor disini tidak saya tambahkan path lain maka dia hanya akan mengambil berdasarkan default path di @Controller
    // Naming pada method tidak harus post, get, put, delete, bisa apapun namun tidak boleh duplikasi
    @Post()
    post(): string{
        return 'POST'
    }

    // Sedangkan disini pada Detractor kita setup path atau menginisialisasikan path pada method @Get sehingga untuk mendapatkan response dari function get() kita harus memanggil localhost:<port>/api/user/sample
    @Get('sample')
    get(): string{
        return "GET"
    }

    @Get('hello')
    // berikut contoh penggunaan Query menggunakan Detractor @Query dengan multiquery
    sayHello(
        @Query('first_name') firstName: string,
        @Query('last_name') lastName: string
    ): string {
        
        return `Hello ${firstName} ${lastName}`;
    }

    @Get('sample-response')
     // Jika masih memiliki habbit belajar menggunakan Express JS kita bisa menggunakan Decorator @Res() untuk membuat express.Response berikut adalah contoh codenya
    sampleResponse(@Res() response: Response) {
        response.status(200).json({
            status: 200,
            result: `Halo`
        })
    }

    @Get('another/sample-response')
    // Selain @Res atau response pada express.Response Nest juga memiliki Decorator lain berikut saya contohkan penggunaan Decorator lain untuk mengembalikan response

    @Header('Content-Type', 'application/json')
    @HttpCode(200)
    sampleResponseV2(): Record<string, string | number>{
        return {
            status: 200,
            result: 'Response JSON'
        }
    }

    // Berikut adalah contoh penggunakan express.Redirect menggunakan Nest JS

    @Get('redirect')
    @Redirect()
    redirect(): HttpRedirectResponse {
        return {
            url: "/api/user/another/sample-response",
            statusCode: 301
        }
    }

    // Tambahan informasi Nest JS tidak membatasi Decorator namun biasakan urutan dinamis berada di paling bawah static first

    @Get("/:id")
    // Untuk menggunakan Request diperlukan Decorator @Req dan berikut implementasi menggunakan express.Request namun hal tersebut tidak disarankan
    getById(@Req() request: Request): string {
        return `GET ${request.params.id}`
    }

    @Get("another/:id")
    // berikut contoh seperti diatas namun menggunakan Decorator yang disarankan dari @Req() menggunakan @Param() agar langsung ke params
    getByIdParams(@Param("id") id: string ): string{
        return `Get ${id}`
    }


}
