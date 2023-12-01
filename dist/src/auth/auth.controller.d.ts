import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    singUp(id: string): string;
    signin(): string;
}
