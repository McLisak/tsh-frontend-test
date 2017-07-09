import {Payment} from './payment';
import {Pagination} from './pagination';
export class PaymentResponse {
    pagination: Pagination;
    payments: Payment[];
}
