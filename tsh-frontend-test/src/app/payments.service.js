"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var API_URL = "http://test-api.kuria.tshdev.io/";
var PaymentsService = (function () {
    function PaymentsService(http) {
        this.http = http;
    }
    PaymentsService.prototype.getPayments = function () {
        return this.http.get(API_URL)
            .map(function (response) { return response.json().payments; }, function (response) { return response.json().pagination; })
            .catch(this.apiErrorHandle);
    };
    PaymentsService.prototype.searchPayments = function (params) {
        return this.http.get(API_URL)
            .toPromise()
            .then(function (response) { return response.json().payments; }, function (response) { return response.json().pagination; })
            .catch(this.apiErrorHandle);
    };
    PaymentsService.prototype.apiErrorHandle = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return PaymentsService;
}());
PaymentsService = __decorate([
    core_1.Injectable()
], PaymentsService);
exports.PaymentsService = PaymentsService;
