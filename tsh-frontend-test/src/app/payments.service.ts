import {Injectable} from '@angular/core';
import {Http, RequestOptions, URLSearchParams} from '@angular/http';
import {PaymentResponse} from './payment-response';
import 'rxjs/add/operator/toPromise';
import {stringify} from "@angular/core/src/util";

const API_URL = "http://test-api.kuria.tshdev.io/";

@Injectable()
export class PaymentsService {

    constructor(private http: Http) {

    }

    private errorHandle(error: any): Promise<any> {
        console.error('API_ERROR', error);
        return Promise.reject(error.message || error);
    }

    private prepareSearchParams(params: {}): RequestOptions {
        let searchParams: URLSearchParams = new URLSearchParams();
        for (let param in params) {
            if (params[param]) {
                searchParams.set(param, params[param]);
            } else {
                searchParams.set(param, "");
            }
        }
        let requestOptions = new RequestOptions();
        requestOptions.params = searchParams;
        return requestOptions;
    }

    getPayments(): Promise<PaymentResponse> {
        return this.http.get(API_URL)
            .toPromise()
            .then(
                response => response.json() as PaymentResponse
            )
            .catch(this.errorHandle);
    }

    searchPayments(params: {}): Promise<PaymentResponse> {
        let requestOptions = this.prepareSearchParams(params);
        return this.http.get(API_URL, requestOptions)
            .toPromise()
            .then(
                response => response.json() as PaymentResponse
            )
            .catch(this.errorHandle);
    }


}
