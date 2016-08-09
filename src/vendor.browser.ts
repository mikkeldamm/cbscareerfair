// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';

// AngularClass
//import '@angularclass/webpack-toolkit';
//import '@angularclass/request-idle-callback';

// RxJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

if ('production' === ENV) {

} else {
    require('angular2-hmr');
}
