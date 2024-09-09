export type PostSignup = {
    sentCode: boolean
}

export type JWTPayload = {
    role: string;
    id: number;
}

export type PostSignin = {
    accessToken: string,
    data: any
}