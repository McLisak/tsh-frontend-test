import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {PaymentResponse} from './payment-response';
import 'rxjs/add/operator/toPromise';

const API_URL = "http://test-api.kuria.tshdev.io/";

@Injectable()
export class PaymentsService {

    constructor(private http: Http) {

    }

    getPayments(): Promise<PaymentResponse> {
        return this.http.get(API_URL)
            .toPromise()
            .then(
                response => response.json() as PaymentResponse
            )
            .catch(this.apiErrorHandle);
    }

    private apiErrorHandle(error: any) {
        console.error(error);
    }
}
