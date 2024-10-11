import { diskStorage } from "multer";
import { join, extname } from "path";
import { BadRequestException } from "@nestjs/common";
import * as dotenv from 'dotenv';

dotenv.config();

if (!process.env.UPLOAD_URL) {
    throw new Error('UPLOAD_URL is not defined in .env file');
}

export const multerOptions = {
    storage: diskStorage({
        destination: join(__dirname, process.env.UPLOAD_URL),
        filename: (req, file, cb) => {
            const randomName = [...Array(32)]
                .map(() => Math.random().toString(36)[2])
                .join('');
            cb(null, `${randomName}${extname(file.originalname)}`);
        },
    }),
    fileFilter: (_, file, callback) => {
        const allowedExtensions = ['.webp'];
        const fileExt = extname(file.originalname).toLowerCase(); 

        if (!allowedExtensions.includes(fileExt)) {
            return callback(new BadRequestException(`Allowed file types: ${allowedExtensions.join(', ')}`), false);
        }

        callback(null, true); 
    },
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
};
