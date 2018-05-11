import { Injectable } from "@angular/core";
import { RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { environment } from "../../environments/environment";

@Injectable()
export class HttpService {
    constructor(private _http: Http) {
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return this._http.request(url, options);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this._http.get(this.updateUrl(url), this.getRequestOptionArgs(options));
    }

    post(url: string, body, options?: RequestOptionsArgs): Observable<Response> {
        console.log(this.updateUrl(url));
        return this._http.post(this.updateUrl(url), body, this.getRequestOptionArgs(options));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this._http.put(this.updateUrl(url), body, this.getRequestOptionArgs(options));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this._http.delete(this.updateUrl(url), this.getRequestOptionArgs(options));
    }

    private updateUrl(req: string) {
        return req = environment.API_Publica_URL + req;
    }

    private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('Content-Type', 'application/json');
        options.headers.append('x-auth', localStorage.getItem('x-auth'));

        return options;
    }
}