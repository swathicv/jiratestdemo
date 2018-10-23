(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    border: 1px solid black;\r\n }\r\n\r\n td,th{\r\n    border-right: 1px solid black;\r\n    width: 200px;\r\n    padding:5px 0;\r\n    text-align: center;\r\n }\r\n\r\n th{\r\n   font:bold\r\n }\r\n\r\n tr{\r\n     border-bottom: 1px solid black;\r\n }\r\n\r\n .issueTextArea {\r\n    color: black;\r\n    background-color: lightgray;\r\n    line-height: normal;\r\n    height: 50px;\r\n    width: 400px;\r\n    margin: 0;\r\n }\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"height:50px\" >\n  MSTeam Board\n</div>\n<table>\n    <tr>\n        <th>\n          Type\n        </th>\n        <th>\n          Key\n        </th>\n        <th>\n          Summary\n        </th>\n        <th>\n            Assignee\n        </th>\n        <th>\n          Reporter\n        </th>\n        <th>\n          Priority\n        </th>\n        <th>\n          Status\n        </th>\n        <th>\n          Created\n        </th>\n        <th>Updated</th>\n    </tr>\n    <tr *ngFor=\"let issue of jiraIssues\" (click)=\"setTaskDetails(issue)\"  data-toggle=\"modal\" data-target=\"#taskDetails\" style=\"cursor: pointer;\" >\n     <td>\n       <ng-container *ngIf=\"issue.fields.issuetype.name =='Task'\">\n          <img src=\"https://msteamsjira.atlassian.net/secure/viewavatar?size=xsmall&amp;avatarId=10318&amp;avatarType=issuetype\"\n          height=\"16\" width=\"16\" border=\"0\" align=\"absmiddle\" alt=\"Task\" title=\"Task - A task that needs to be done.\">\n       </ng-container>\n       <ng-container *ngIf=\"issue.fields.issuetype.name=='Bug'\">\n          <img src=\"https://msteamsjira.atlassian.net/secure/viewavatar?size=xsmall&amp;avatarId=10303&amp;avatarType=issuetype\" \n          height=\"16\" width=\"16\" border=\"0\" align=\"absmiddle\" alt=\"Bug\" title=\"Bug - A problem which impairs or prevents the functions of the product.\">\n       </ng-container>\n    </td>\n     <td>\n      {{issue.key}}\n     </td>\n     <td>\n      {{issue.fields.summary}} \n     </td>\n     <td>\n       {{issue?.fields?.assignee?.displayName}}\n     </td>\n     <td>\n      {{issue.fields.reporter.displayName}}\n     </td>\n     <td>\n      <ng-container *ngIf=\"issue.fields.priority.name=='Medium'\">\n          <img src=\"https://msteamsjira.atlassian.net/images/icons/priorities/medium.svg\" height=\"16\" width=\"16\"\n          border=\"0\" align=\"absmiddle\" alt=\"Medium\" title=\"Medium - Has the potential to affect progress.\">\n      </ng-container>\n      <ng-container *ngIf=\"issue.fields.priority.name=='High'\">\n          <img src=\"https://msteamsjira.atlassian.net/images/icons/priorities/high.svg\" height=\"16\" width=\"16\" \n          border=\"0\" align=\"absmiddle\" alt=\"High\" title=\"High - Serious problem that could block progress.\">\n      </ng-container>\n      <ng-container *ngIf=\"issue.fields.priority.name=='Highest'\">\n          <img src=\"https://msteamsjira.atlassian.net/images/icons/priorities/highest.svg\" height=\"16\" width=\"16\"\n           border=\"0\" align=\"absmiddle\" alt=\"Highest\" title=\"Highest - This problem will block progress.\">\n      </ng-container>\n      <ng-container *ngIf=\"issue.fields.priority.name=='Low'\">\n          <img src=\"https://msteamsjira.atlassian.net/images/icons/priorities/low.svg\" height=\"16\" width=\"16\" \n          border=\"0\" align=\"absmiddle\" alt=\"Low\" title=\"Low - Minor problem or easily worked around.\">\n      </ng-container>\n      <ng-container *ngIf=\"issue.fields.priority.name=='Lowest'\">\n          <img src=\"https://msteamsjira.atlassian.net/images/icons/priorities/lowest.svg\" height=\"16\" width=\"16\" \n          border=\"0\" align=\"absmiddle\" alt=\"Lowest\" title=\"Lowest - Trivial problem with little or no impact on progress.\">\n      </ng-container>\n     </td>\n     <td>\n       <button style=\"padding:2px 20px;background-color: white;border:1px solid cadetblue;color:cadetblue;font: bold;\"\n      > {{issue.fields.status.name}}</button>\n     </td>\n     <td>\n      {{issue.fields.created | date:'short'}}\n     <td>\n      {{issue.fields.updated | date:'short'}}\n     </td>\n    </tr>\n</table>\n<div class=\"modal fade\" role =\"dialog\" id=\"taskDetails\">\n  <div class=\"modal-dialog\" >\n    <div class=\"modal-content\">\n     <div class=\"modal-header\">\n       <h6> \n          <ng-container *ngIf=\"issueType =='Task'\">\n              <img src=\"https://msteamsjira.atlassian.net/secure/viewavatar?size=xsmall&amp;avatarId=10318&amp;avatarType=issuetype\"\n              height=\"16\" width=\"16\" border=\"0\" align=\"absmiddle\" alt=\"Task\" title=\"Task - A task that needs to be done.\">\n           </ng-container>\n           <ng-container *ngIf=\"issueType=='Bug'\">\n              <img src=\"https://msteamsjira.atlassian.net/secure/viewavatar?size=xsmall&amp;avatarId=10303&amp;avatarType=issuetype\" \n              height=\"16\" width=\"16\" border=\"0\" align=\"absmiddle\" alt=\"Bug\" title=\"Bug - A problem which impairs or prevents the functions of the product.\">\n           </ng-container>\n           \n           {{taskId}}\n          </h6>\n       <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"updateIssue()\">&times;</button>\n     </div>\n     <div class=\"modal-body\">\n        <div style=\"font-weight: bold\">\n          Summary\n        </div>\n        <textarea class=\"issueTextArea\" [(ngModel)]=\"taskSummary\"></textarea>\n        <div style=\"font-weight: bold\">\n          Description\n        </div>\n        <textarea class=\"issueTextArea\" [(ngModel)]=\"taskDescription\"></textarea>\n      \n     </div>\n     <div style=\"height:50px;\">\n\n     </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_jira_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/jira.rest.service */ "./src/app/services/jira.rest.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(jirsRest) {
        this.jirsRest = jirsRest;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getDashboardData();
    };
    AppComponent.prototype.getDashboardData = function () {
        var _this = this;
        this.jirsRest.getJiraDashboard().subscribe(function (data) {
            _this.jiraIssues = data["issues"];
            console.log(data["issues"]);
        }, function (error) { return console.log(error); });
    };
    AppComponent.prototype.setTaskDetails = function (task) {
        this.currentTask = task;
        this.taskId = task.key;
        this.taskSummary = task.fields.summary;
        this.taskDescription = task.fields.description;
        this.issueType = task.fields.issuetype.name;
    };
    AppComponent.prototype.updateIssue = function () {
        var fields = {
            "fields": {
                "summary": this.taskSummary,
                "description": this.taskDescription
            }
        };
        this.jirsRest.updateJiraIssue(fields, this.currentTask.id).subscribe(function (resposne) {
            console.log(resposne);
        });
        this.getDashboardData();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_jira_rest_service__WEBPACK_IMPORTED_MODULE_1__["JiraRestService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/jira.rest.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/jira.rest.service.ts ***!
  \***********************************************/
/*! exports provided: JiraRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JiraRestService", function() { return JiraRestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JiraRestService = /** @class */ (function () {
    function JiraRestService(httpClient) {
        this.httpClient = httpClient;
    }
    JiraRestService.prototype.getJiraDashboard = function () {
        //let url ="https://msteamsjira.atlassian.net/rest/api/2/search?jql=assignee=currentuser()";
        var url = "https://msteamsjira.atlassian.net/rest/api/2/search?jql=project=MSTEAM";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'Authorization': 'Basic YXBzbWFnZWxsYW46VGVzbGEhMTIz' });
        return this.httpClient.get(url, { headers: headers });
    };
    JiraRestService.prototype.updateJiraIssue = function (fields, issueId) {
        var url = "https://msteamsjira.atlassian.net/rest/api/2/issue/" + issueId;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'Authorization': 'Basic YXBzbWFnZWxsYW46VGVzbGEhMTIz' });
        return this.httpClient.put(url, fields, { headers: headers });
    };
    JiraRestService.prototype.handleError = function (errorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side error: ', errorResponse.error.message);
        }
        else {
            console.error('Server Side error: ', errorResponse);
        }
    };
    JiraRestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], JiraRestService);
    return JiraRestService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Swathi\sprint-4\first-app-updated\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map