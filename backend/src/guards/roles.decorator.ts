import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) => {
    const defaultRole = roles.length === 0 ? ['admin'] : roles;
    return SetMetadata('roles', defaultRole);
};