import { Controller } from '@nestjs/common';

// pada controller kita bisa atur default routingnya tanpa harus setup routing seperti aplikasi Express JS
// pada case berikut user memiliki default path atau default route localhost:<port>/user
// namun kita juga dapat mengosongkan atau menambahkan agar default seperti yang kita inginkan
// kita tinggal ubah Detractor @Controller('user') menjadi @Controller('api/user') ini contoh
@Controller('user')
export class UserController {}
