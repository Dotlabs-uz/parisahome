import { Controller, Get, Param, Res } from '@nestjs/common';

@Controller()
export class AppController {
    @Get('/uploads/:file')
    async getUploads(@Param() param: any, @Res() res: any) {
        res.sendFile(param.file, { root: process.env.GET_IMAGE_PATH });
    }
}

