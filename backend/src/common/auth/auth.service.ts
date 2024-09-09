import {BadRequestException, Injectable} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {JWTPayload} from "../../types";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    
    constructor(private jwtService: JwtService) {
    }
    
    async hashPassword(password: string): Promise<string> {
        const saltOrRounds = 10;
        return await bcrypt.hash(password, saltOrRounds);
    }
    
    async generateAccessToken(payload: JWTPayload): Promise<string> {
        if (!payload.id) {
            throw new BadRequestException('Id is not defined for payload');
        }
        
        if (!payload.role) {
            throw new BadRequestException('Role is not defined for payload');
        }
        
        return await this.jwtService.signAsync(payload);
    }
    
    async comparePassword(password: string, hashedPass: string): Promise<boolean> {
        return await bcrypt.compare(password, hashedPass);
    }
    
    async verifyAccessToken(token: string) {
        return await this.jwtService.verifyAsync(token);
    }
}