import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/constants/globalConstants';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authSer: AuthService,
    private router: Router
  ) {
    console.log('auth guard');
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // const currentUser = this.authSer.currentUserValue;
      console.log('auth guards se : ', this.authSer.currentUserValue);
      if (this.authSer.currentUserValue) {
        return true;
      } else {
        this.router.navigate([GlobalConstants.REDIRECT_URLS.LOGIN], {});
        return false;
      }
      
  }
  
}
