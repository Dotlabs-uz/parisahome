import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Admin } from 'src/modules/admin/entities/admin.entity';
import { Reflector } from '@nestjs/core';

@Injectable()
export class IsAdminGuard implements CanActivate {
    constructor(private jwtService: JwtService, private reflector: Reflector) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers?.authorization;

        if (!authHeader) {
            throw new UnauthorizedException('Authorization header not provided');
        }

        const token = this.extractToken(authHeader);
        const payload = await this.verifyToken(token);

        const admin = await this.findAdminById(payload.id);
        if (!admin) {
            throw new UnauthorizedException('Admin not found');
        }

        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) {
            return false;
        }

        return roles.includes(payload.role);
    }

    private extractToken(authHeader: string): string {
        const parts = authHeader.split(' ');
        if (parts.length !== 2 || parts[0] !== 'Bearer') {
            throw new UnauthorizedException('Invalid authorization format');
        }
        return parts[1];
    }

    private async verifyToken(token: string): Promise<any> {
        try {
            return await this.jwtService.verifyAsync(token);
        } catch (e) {
            throw new BadRequestException('Invalid or expired JWT token');
        }
    }

    private async findAdminById(id: number): Promise<Admin | null> {
        return await Admin.findOne({ where: { id } });
    }
}
