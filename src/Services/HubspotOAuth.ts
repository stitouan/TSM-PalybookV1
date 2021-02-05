import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
@Injectable()
export class ConnectionAuth{
  CLIENT_ID = environment.clientId;
  CLIENT_SECRET = environment.clientSecret;
  REDIRECT_URL = environment.redirectUrl;
}
