import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from './account-service.service';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

    constructor(private userService: AccountService) { }
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const isLoggedIn = this.userService.isLoggedIn();
        if (isLoggedIn) {
            const token = this.userService.getToken();
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${token}` }
            });
        }
        return next.handle(request);
    }
}