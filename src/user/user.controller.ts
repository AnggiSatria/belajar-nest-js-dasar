import { Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import type { Request } from 'express';

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

    // berikut contoh penggunaan Query menggunakan Detractor @Query dengan multiquery

    @Get('hello')
    sayHello(
        @Query('first_name') firstName: string,
        @Query('last_name') lastName: string
    ): string {
        
        return `Hello ${firstName} ${lastName}`;
    }
}
