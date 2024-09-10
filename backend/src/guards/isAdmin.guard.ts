import { BadRequestException, CanActivate, ExecutionContext, HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Admin } from 'src/modules/admin/entities/admin.entity';

@Injectable()
export class IsAdminGuard implements CanActivate {

    constructor(private jwtService: JwtService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();

        // Проверка наличия заголовка Authorization
        const authHeader = request.headers?.authorization;
        if (!authHeader) {
            throw new UnauthorizedException('Authorization header not provided');
        }

        const token = authHeader.split(' ')[1];

        if (!token) {
            throw new UnauthorizedException('JWT token is missing');
        }

        let payload: any;

        // Попытка верификации токена
        try {
            payload = this.jwtService.verify(token);
        } catch (e) {
            throw new BadRequestException('Invalid or expired JWT token');
        }

        // Поиск админа в базе данных по ID из токена
        const admin = await Admin.findOne({ where: { id: payload.id } });

        if (!admin) {
            throw new UnauthorizedException('Admin not found');
        }

        // Проверка роли
        if (payload.role === 'admin') {
            return true;
        }

        return false;
    }
}