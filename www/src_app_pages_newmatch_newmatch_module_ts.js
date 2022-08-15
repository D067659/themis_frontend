"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_newmatch_newmatch_module_ts"],{

/***/ 7858:
/*!***********************************************************!*\
  !*** ./src/app/pages/newmatch/newmatch-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewmatchPageRoutingModule": () => (/* binding */ NewmatchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _newmatch_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newmatch.page */ 1642);




const routes = [
    {
        path: '',
        component: _newmatch_page__WEBPACK_IMPORTED_MODULE_0__.NewmatchPage
    }
];
let NewmatchPageRoutingModule = class NewmatchPageRoutingModule {
};
NewmatchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewmatchPageRoutingModule);



/***/ }),

/***/ 7147:
/*!***************************************************!*\
  !*** ./src/app/pages/newmatch/newmatch.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewmatchPageModule": () => (/* binding */ NewmatchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _newmatch_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newmatch-routing.module */ 7858);
/* harmony import */ var _newmatch_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newmatch.page */ 1642);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pipes */ 1560);








let NewmatchPageModule = class NewmatchPageModule {
};
NewmatchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _newmatch_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewmatchPageRoutingModule,
            ngx_pipes__WEBPACK_IMPORTED_MODULE_7__.NgPipesModule
        ],
        declarations: [_newmatch_page__WEBPACK_IMPORTED_MODULE_1__.NewmatchPage]
    })
], NewmatchPageModule);



/***/ }),

/***/ 1560:
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-pipes/__ivy_ngcc__/fesm2015/ngx-pipes.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AorAnPipe": () => (/* binding */ AorAnPipe),
/* harmony export */   "BOOLEAN_PIPES": () => (/* binding */ BOOLEAN_PIPES),
/* harmony export */   "BytesPipe": () => (/* binding */ BytesPipe),
/* harmony export */   "CamelizePipe": () => (/* binding */ CamelizePipe),
/* harmony export */   "CeilPipe": () => (/* binding */ CeilPipe),
/* harmony export */   "ChunkPipe": () => (/* binding */ ChunkPipe),
/* harmony export */   "DATE_PIPES": () => (/* binding */ DATE_PIPES),
/* harmony export */   "DegreesPipe": () => (/* binding */ DegreesPipe),
/* harmony export */   "DiffObjPipe": () => (/* binding */ DiffObjPipe),
/* harmony export */   "DiffPipe": () => (/* binding */ DiffPipe),
/* harmony export */   "EveryPipe": () => (/* binding */ EveryPipe),
/* harmony export */   "FilterByImpurePipe": () => (/* binding */ FilterByImpurePipe),
/* harmony export */   "FilterByPipe": () => (/* binding */ FilterByPipe),
/* harmony export */   "FlattenPipe": () => (/* binding */ FlattenPipe),
/* harmony export */   "FloorPipe": () => (/* binding */ FloorPipe),
/* harmony export */   "FromPairsPipe": () => (/* binding */ FromPairsPipe),
/* harmony export */   "GroupByImpurePipe": () => (/* binding */ GroupByImpurePipe),
/* harmony export */   "GroupByPipe": () => (/* binding */ GroupByPipe),
/* harmony export */   "InitialPipe": () => (/* binding */ InitialPipe),
/* harmony export */   "IntersectionPipe": () => (/* binding */ IntersectionPipe),
/* harmony export */   "InvertByPipe": () => (/* binding */ InvertByPipe),
/* harmony export */   "InvertPipe": () => (/* binding */ InvertPipe),
/* harmony export */   "IsArrayPipe": () => (/* binding */ IsArrayPipe),
/* harmony export */   "IsDefinedPipe": () => (/* binding */ IsDefinedPipe),
/* harmony export */   "IsEqualToPipe": () => (/* binding */ IsEqualToPipe),
/* harmony export */   "IsFunctionPipe": () => (/* binding */ IsFunctionPipe),
/* harmony export */   "IsGreaterEqualThanPipe": () => (/* binding */ IsGreaterEqualThanPipe),
/* harmony export */   "IsGreaterThanPipe": () => (/* binding */ IsGreaterThanPipe),
/* harmony export */   "IsIdenticalToPipe": () => (/* binding */ IsIdenticalToPipe),
/* harmony export */   "IsLessEqualThanPipe": () => (/* binding */ IsLessEqualThanPipe),
/* harmony export */   "IsLessThanPipe": () => (/* binding */ IsLessThanPipe),
/* harmony export */   "IsNotEqualToPipe": () => (/* binding */ IsNotEqualToPipe),
/* harmony export */   "IsNotIdenticalToPipe": () => (/* binding */ IsNotIdenticalToPipe),
/* harmony export */   "IsNullPipe": () => (/* binding */ IsNullPipe),
/* harmony export */   "IsNumberPipe": () => (/* binding */ IsNumberPipe),
/* harmony export */   "IsObjectPipe": () => (/* binding */ IsObjectPipe),
/* harmony export */   "IsStringPipe": () => (/* binding */ IsStringPipe),
/* harmony export */   "IsUndefinedPipe": () => (/* binding */ IsUndefinedPipe),
/* harmony export */   "KeysPipe": () => (/* binding */ KeysPipe),
/* harmony export */   "LatinisePipe": () => (/* binding */ LatinisePipe),
/* harmony export */   "LeftPadPipe": () => (/* binding */ LeftPadPipe),
/* harmony export */   "LeftTrimPipe": () => (/* binding */ LeftTrimPipe),
/* harmony export */   "LinesPipe": () => (/* binding */ LinesPipe),
/* harmony export */   "MATH_PIPES": () => (/* binding */ MATH_PIPES),
/* harmony export */   "MakePluralStringPipe": () => (/* binding */ MakePluralStringPipe),
/* harmony export */   "MatchPipe": () => (/* binding */ MatchPipe),
/* harmony export */   "MaxPipe": () => (/* binding */ MaxPipe),
/* harmony export */   "MinPipe": () => (/* binding */ MinPipe),
/* harmony export */   "NgArrayPipesModule": () => (/* binding */ NgArrayPipesModule),
/* harmony export */   "NgBooleanPipesModule": () => (/* binding */ NgBooleanPipesModule),
/* harmony export */   "NgDatePipesModule": () => (/* binding */ NgDatePipesModule),
/* harmony export */   "NgMathPipesModule": () => (/* binding */ NgMathPipesModule),
/* harmony export */   "NgObjectPipesModule": () => (/* binding */ NgObjectPipesModule),
/* harmony export */   "NgPipesModule": () => (/* binding */ NgPipesModule),
/* harmony export */   "NgStringPipesModule": () => (/* binding */ NgStringPipesModule),
/* harmony export */   "OmitPipe": () => (/* binding */ OmitPipe),
/* harmony export */   "OrderByImpurePipe": () => (/* binding */ OrderByImpurePipe),
/* harmony export */   "OrderByPipe": () => (/* binding */ OrderByPipe),
/* harmony export */   "PairsPipe": () => (/* binding */ PairsPipe),
/* harmony export */   "PercentagePipe": () => (/* binding */ PercentagePipe),
/* harmony export */   "PickPipe": () => (/* binding */ PickPipe),
/* harmony export */   "PluckPipe": () => (/* binding */ PluckPipe),
/* harmony export */   "PowerPipe": () => (/* binding */ PowerPipe),
/* harmony export */   "RadiansPipe": () => (/* binding */ RadiansPipe),
/* harmony export */   "RangePipe": () => (/* binding */ RangePipe),
/* harmony export */   "RepeatPipe": () => (/* binding */ RepeatPipe),
/* harmony export */   "ReversePipe": () => (/* binding */ ReversePipe),
/* harmony export */   "RightPadPipe": () => (/* binding */ RightPadPipe),
/* harmony export */   "RightTrimPipe": () => (/* binding */ RightTrimPipe),
/* harmony export */   "RoundPipe": () => (/* binding */ RoundPipe),
/* harmony export */   "STRING_PIPES": () => (/* binding */ STRING_PIPES),
/* harmony export */   "SamplePipe": () => (/* binding */ SamplePipe),
/* harmony export */   "ScanPipe": () => (/* binding */ ScanPipe),
/* harmony export */   "ShortenPipe": () => (/* binding */ ShortenPipe),
/* harmony export */   "ShufflePipe": () => (/* binding */ ShufflePipe),
/* harmony export */   "SlugifyPipe": () => (/* binding */ SlugifyPipe),
/* harmony export */   "SomePipe": () => (/* binding */ SomePipe),
/* harmony export */   "SqrtPipe": () => (/* binding */ SqrtPipe),
/* harmony export */   "StripTagsPipe": () => (/* binding */ StripTagsPipe),
/* harmony export */   "SumPipe": () => (/* binding */ SumPipe),
/* harmony export */   "TailPipe": () => (/* binding */ TailPipe),
/* harmony export */   "TestPipe": () => (/* binding */ TestPipe),
/* harmony export */   "TimeAgoPipe": () => (/* binding */ TimeAgoPipe),
/* harmony export */   "TrimPipe": () => (/* binding */ TrimPipe),
/* harmony export */   "TrurthifyPipe": () => (/* binding */ TrurthifyPipe),
/* harmony export */   "UcFirstPipe": () => (/* binding */ UcFirstPipe),
/* harmony export */   "UcWordsPipe": () => (/* binding */ UcWordsPipe),
/* harmony export */   "UnderscorePipe": () => (/* binding */ UnderscorePipe),
/* harmony export */   "UnionPipe": () => (/* binding */ UnionPipe),
/* harmony export */   "UniquePipe": () => (/* binding */ UniquePipe),
/* harmony export */   "ValuesPipe": () => (/* binding */ ValuesPipe),
/* harmony export */   "WithoutPipe": () => (/* binding */ WithoutPipe),
/* harmony export */   "WrapPipe": () => (/* binding */ WrapPipe),
/* harmony export */   "ɵa": () => (/* binding */ isString)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



class DiffPipe {
    transform(input, ...args) {
        if (!Array.isArray(input)) {
            return input;
        }
        // tslint:disable-next-line no-bitwise
        return args.reduce((d, c) => d.filter((e) => !~c.indexOf(e)), input);
    }
}
DiffPipe.ɵfac = function DiffPipe_Factory(t) { return new (t || DiffPipe)(); };
DiffPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "diff", type: DiffPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiffPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'diff' }]
    }], null, null); })();

class InitialPipe {
    transform(input, num = 0) {
        return Array.isArray(input) ? input.slice(0, input.length - num) : input;
    }
}
InitialPipe.ɵfac = function InitialPipe_Factory(t) { return new (t || InitialPipe)(); };
InitialPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "initial", type: InitialPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InitialPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'initial' }]
    }], null, null); })();

class FlattenPipe {
    transform(input, shallow = false) {
        if (!Array.isArray(input)) {
            return input;
        }
        return shallow ? [].concat.apply([], input) : this.flatten(input);
    }
    flatten(array) {
        return array.reduce((arr, elm) => {
            if (Array.isArray(elm)) {
                return arr.concat(this.flatten(elm));
            }
            return arr.concat(elm);
        }, []);
    }
}
FlattenPipe.ɵfac = function FlattenPipe_Factory(t) { return new (t || FlattenPipe)(); };
FlattenPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "flatten", type: FlattenPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlattenPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'flatten' }]
    }], null, null); })();

class IntersectionPipe {
    transform(input, ...args) {
        if (!Array.isArray(input)) {
            return input;
        }
        // tslint:disable-next-line no-bitwise
        return args.reduce((n, c) => n.filter((e) => !!~c.indexOf(e)), input);
    }
}
IntersectionPipe.ɵfac = function IntersectionPipe_Factory(t) { return new (t || IntersectionPipe)(); };
IntersectionPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "intersection", type: IntersectionPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntersectionPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'intersection' }]
    }], null, null); })();

function isUndefined(value) {
    return typeof value === 'undefined';
}
function isNull(value) {
    return value === null;
}
function isFunction(value) {
    return typeof value === 'function';
}
function isNumber(value) {
    return typeof value === 'number';
}
function isString(value) {
    return typeof value === 'string';
}
function isBoolean(value) {
    return typeof value === 'boolean';
}
function isObject(value) {
    return value !== null && typeof value === 'object';
}
function isNumberFinite(value) {
    return isNumber(value) && isFinite(value);
}
function isVowel(letter) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.indexOf(letter) !== -1;
}
function ucFirst(text) {
    const [part, ...split] = text.split(/\s/g);
    const ucd = part
        .toLowerCase()
        .split(/(?=['|-])/g)
        .map((word) => word.indexOf('-') + word.indexOf("'") > -2
        ? word.slice(0, 2).toUpperCase() + word.slice(2)
        : word.slice(0, 1).toUpperCase() + word.slice(1))
        .join('');
    return [ucd, ...split].join(' ');
}
function applyPrecision(num, precision) {
    if (precision <= 0) {
        return Math.round(num);
    }
    const tho = Math.pow(10, precision);
    return Math.round(num * tho) / tho;
}
function extractDeepPropertyByMapKey(obj, map) {
    const keys = map.split('.');
    const head = keys.shift();
    return keys.reduce((prop, key) => {
        return !isUndefined(prop) && !isNull(prop) && !isUndefined(prop[key]) ? prop[key] : undefined;
    }, obj[head || '']);
}
function extractDeepPropertyByParentMapKey(obj, map) {
    const keys = map.split('.');
    const tail = keys.pop();
    const props = extractDeepPropertyByMapKey(obj, keys.join('.'));
    return { props, tail };
}
function getKeysTwoObjects(obj, other) {
    return [...Object.keys(obj), ...Object.keys(other)].filter((key, index, array) => array.indexOf(key) === index);
}
function isDeepEqual(obj, other) {
    if (!isObject(obj) || !isObject(other)) {
        return obj === other;
    }
    return getKeysTwoObjects(obj, other).every((key) => {
        if (!isObject(obj[key]) && !isObject(other[key])) {
            return obj[key] === other[key];
        }
        if (!isObject(obj[key]) || !isObject(other[key])) {
            return false;
        }
        return isDeepEqual(obj[key], other[key]);
    });
}

class ReversePipe {
    transform(input) {
        if (isString(input)) {
            return input
                .split('')
                .reverse()
                .join('');
        }
        return Array.isArray(input) ? input.slice().reverse() : input;
    }
}
ReversePipe.ɵfac = function ReversePipe_Factory(t) { return new (t || ReversePipe)(); };
ReversePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "reverse", type: ReversePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReversePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'reverse' }]
    }], null, null); })();

class TailPipe {
    transform(input, num = 0) {
        return Array.isArray(input) ? input.slice(num) : input;
    }
}
TailPipe.ɵfac = function TailPipe_Factory(t) { return new (t || TailPipe)(); };
TailPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "tail", type: TailPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TailPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'tail' }]
    }], null, null); })();

class TrurthifyPipe {
    transform(input) {
        return Array.isArray(input) ? input.filter(e => !!e) : input;
    }
}
TrurthifyPipe.ɵfac = function TrurthifyPipe_Factory(t) { return new (t || TrurthifyPipe)(); };
TrurthifyPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truthify", type: TrurthifyPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrurthifyPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'truthify' }]
    }], null, null); })();

class UnionPipe {
    transform(input, args = []) {
        if (!Array.isArray(input) || !Array.isArray(args)) {
            return input;
        }
        return args.reduce((newArr, currArr) => {
            return newArr.concat(currArr.reduce((noDupArr, curr) => {
                // tslint:disable-next-line:no-bitwise
                return !~noDupArr.indexOf(curr) && !~newArr.indexOf(curr) ? noDupArr.concat([curr]) : noDupArr;
            }, []));
        }, input);
    }
}
UnionPipe.ɵfac = function UnionPipe_Factory(t) { return new (t || UnionPipe)(); };
UnionPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "union", type: UnionPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnionPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'union' }]
    }], null, null); })();

class UniquePipe {
    transform(input, propertyName) {
        const uniques = [];
        return Array.isArray(input)
            ? isUndefined(propertyName)
                ? input.filter((e, i) => input.indexOf(e) === i)
                : input.filter((e, i) => {
                    let value = extractDeepPropertyByMapKey(e, propertyName);
                    value = isObject(value) ? JSON.stringify(value) : value;
                    if (isUndefined(value) || uniques[value]) {
                        return false;
                    }
                    uniques[value] = true;
                    return true;
                })
            : input;
    }
}
UniquePipe.ɵfac = function UniquePipe_Factory(t) { return new (t || UniquePipe)(); };
UniquePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "unique", type: UniquePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UniquePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'unique' }]
    }], null, null); })();

class WithoutPipe {
    transform(input, args = []) {
        return Array.isArray(input)
            ? // tslint:disable-next-line:no-bitwise
                input.filter(e => !~args.indexOf(e))
            : input;
    }
}
WithoutPipe.ɵfac = function WithoutPipe_Factory(t) { return new (t || WithoutPipe)(); };
WithoutPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "without", type: WithoutPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WithoutPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'without' }]
    }], null, null); })();

class PluckPipe {
    transform(input, map) {
        if (Array.isArray(input)) {
            return input.map(e => extractDeepPropertyByMapKey(e, map));
        }
        return isObject(input) ? extractDeepPropertyByMapKey(input, map) : input;
    }
}
PluckPipe.ɵfac = function PluckPipe_Factory(t) { return new (t || PluckPipe)(); };
PluckPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "pluck", type: PluckPipe, pure: false });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PluckPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'pluck', pure: false }]
    }], null, null); })();

class ShufflePipe {
    // Using a version of the Fisher-Yates shuffle algorithm
    // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    transform(input) {
        if (!Array.isArray(input)) {
            return input;
        }
        const shuffled = [...input];
        const n = input.length - 1;
        for (let i = 0; i < n; ++i) {
            const j = Math.floor(Math.random() * (n - i + 1)) + i;
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
}
ShufflePipe.ɵfac = function ShufflePipe_Factory(t) { return new (t || ShufflePipe)(); };
ShufflePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "shuffle", type: ShufflePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShufflePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'shuffle' }]
    }], null, null); })();

class EveryPipe {
    transform(input, predicate) {
        return Array.isArray(input) ? input.every(predicate) : false;
    }
}
EveryPipe.ɵfac = function EveryPipe_Factory(t) { return new (t || EveryPipe)(); };
EveryPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "every", type: EveryPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EveryPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'every' }]
    }], null, null); })();

class SomePipe {
    transform(input, predicate) {
        return Array.isArray(input) ? input.some(predicate) : input;
    }
}
SomePipe.ɵfac = function SomePipe_Factory(t) { return new (t || SomePipe)(); };
SomePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "some", type: SomePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SomePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'some' }]
    }], null, null); })();

class SamplePipe {
    transform(input, len = 1) {
        if (!Array.isArray(input)) {
            return input;
        }
        let sample = [];
        const tmp = [...input];
        const l = len < tmp.length ? len : tmp.length;
        for (let i = 0; i < l; ++i) {
            sample = sample.concat(tmp.splice(Math.floor(Math.random() * tmp.length), 1));
        }
        return sample;
    }
}
SamplePipe.ɵfac = function SamplePipe_Factory(t) { return new (t || SamplePipe)(); };
SamplePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sample", type: SamplePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SamplePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'sample' }]
    }], null, null); })();

class GroupByPipe {
    transform(input, discriminator = [], delimiter = '|') {
        if (!Array.isArray(input)) {
            return input;
        }
        return this.groupBy(input, discriminator, delimiter);
    }
    groupBy(list, discriminator, delimiter) {
        return list.reduce((acc, payload) => {
            const key = this.extractKeyByDiscriminator(discriminator, payload, delimiter);
            acc[key] = Array.isArray(acc[key]) ? acc[key].concat([payload]) : [payload];
            return acc;
        }, {});
    }
    extractKeyByDiscriminator(discriminator, payload, delimiter) {
        if (isFunction(discriminator)) {
            return discriminator(payload);
        }
        if (Array.isArray(discriminator)) {
            return discriminator.map(k => extractDeepPropertyByMapKey(payload, k)).join(delimiter);
        }
        return extractDeepPropertyByMapKey(payload, discriminator);
    }
}
GroupByPipe.ɵfac = function GroupByPipe_Factory(t) { return new (t || GroupByPipe)(); };
GroupByPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "groupBy", type: GroupByPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupByPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'groupBy' }]
    }], null, null); })();

// tslint:disable no-bitwise
class FilterByPipe {
    transform(input, props, search = '', strict = false) {
        if (!Array.isArray(input) ||
            (!Array.isArray(search) && !isString(search) && !isNumberFinite(search) && !isBoolean(search))) {
            return input;
        }
        const terms = String(search)
            .toLowerCase()
            .split(',');
        return input.filter(obj => {
            return props.some(prop => {
                return terms.some(term => {
                    const value = extractDeepPropertyByMapKey(obj, prop);
                    /* tslint:disable */
                    const { props, tail } = extractDeepPropertyByParentMapKey(obj, prop);
                    if (isUndefined(value) && !isUndefined(props) && Array.isArray(props)) {
                        return props.some(parent => {
                            const str = String(parent[tail]).toLowerCase();
                            return strict ? str === term : !!~str.indexOf(term);
                        });
                    }
                    if (isUndefined(value)) {
                        return false;
                    }
                    const strValue = String(value).toLowerCase();
                    return strict ? term === strValue : !!~strValue.indexOf(term);
                });
            });
        });
    }
}
FilterByPipe.ɵfac = function FilterByPipe_Factory(t) { return new (t || FilterByPipe)(); };
FilterByPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterBy", type: FilterByPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterByPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'filterBy' }]
    }], null, null); })();

class OrderByPipe {
    transform(input, config) {
        if (!Array.isArray(input)) {
            return input;
        }
        const out = [...input];
        // sort by multiple properties
        if (Array.isArray(config)) {
            return out.sort((a, b) => {
                const l = config.length;
                for (let i = 0; i < l; ++i) {
                    const [prop, asc] = OrderByPipe.extractFromConfig(config[i]);
                    const pos = OrderByPipe.orderCompare(prop, asc, a, b);
                    if (pos !== 0) {
                        return pos;
                    }
                }
                return 0;
            });
        }
        // sort by a single property value
        if (isString(config)) {
            const [prop, asc, sign] = OrderByPipe.extractFromConfig(config);
            if (config.length === 1) {
                // tslint:disable-next-line:switch-default
                switch (sign) {
                    case '+':
                        return out.sort(OrderByPipe.simpleSort.bind(this));
                    case '-':
                        return out.sort(OrderByPipe.simpleSort.bind(this)).reverse();
                }
            }
            return out.sort(OrderByPipe.orderCompare.bind(this, prop, asc));
        }
        // default sort by value
        return out.sort(OrderByPipe.simpleSort.bind(this));
    }
    static simpleSort(a, b) {
        return isString(a) && isString(b) ? a.toLowerCase().localeCompare(b.toLowerCase()) : a - b;
    }
    static orderCompare(prop, asc, a, b) {
        const first = extractDeepPropertyByMapKey(a, prop);
        const second = extractDeepPropertyByMapKey(b, prop);
        if (first === second) {
            return 0;
        }
        if (isUndefined(first) || first === '') {
            return 1;
        }
        if (isUndefined(second) || second === '') {
            return -1;
        }
        if (isString(first) && isString(second)) {
            const pos = first.toLowerCase().localeCompare(second.toLowerCase());
            return asc ? pos : -pos;
        }
        return asc ? first - second : second - first;
    }
    static extractFromConfig(config) {
        const sign = config.substr(0, 1);
        const prop = config.replace(/^[-+]/, '');
        const asc = sign !== '-';
        return [prop, asc, sign];
    }
}
OrderByPipe.ɵfac = function OrderByPipe_Factory(t) { return new (t || OrderByPipe)(); };
OrderByPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "orderBy", type: OrderByPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderByPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'orderBy' }]
    }], null, null); })();

// tslint:disable use-pipe-transform-interface
class GroupByImpurePipe extends GroupByPipe {
}
GroupByImpurePipe.ɵfac = /*@__PURE__*/ function () { let ɵGroupByImpurePipe_BaseFactory; return function GroupByImpurePipe_Factory(t) { return (ɵGroupByImpurePipe_BaseFactory || (ɵGroupByImpurePipe_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GroupByImpurePipe)))(t || GroupByImpurePipe); }; }();
GroupByImpurePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "groupByImpure", type: GroupByImpurePipe, pure: false });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupByImpurePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'groupByImpure', pure: false }]
    }], null, null); })();

// tslint:disable use-pipe-transform-interface
class FilterByImpurePipe extends FilterByPipe {
}
FilterByImpurePipe.ɵfac = /*@__PURE__*/ function () { let ɵFilterByImpurePipe_BaseFactory; return function FilterByImpurePipe_Factory(t) { return (ɵFilterByImpurePipe_BaseFactory || (ɵFilterByImpurePipe_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FilterByImpurePipe)))(t || FilterByImpurePipe); }; }();
FilterByImpurePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterByImpure", type: FilterByImpurePipe, pure: false });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterByImpurePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'filterByImpure', pure: false }]
    }], null, null); })();

// tslint:disable use-pipe-transform-interface
class OrderByImpurePipe extends OrderByPipe {
}
OrderByImpurePipe.ɵfac = /*@__PURE__*/ function () { let ɵOrderByImpurePipe_BaseFactory; return function OrderByImpurePipe_Factory(t) { return (ɵOrderByImpurePipe_BaseFactory || (ɵOrderByImpurePipe_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](OrderByImpurePipe)))(t || OrderByImpurePipe); }; }();
OrderByImpurePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "orderByImpure", type: OrderByImpurePipe, pure: false });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderByImpurePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'orderByImpure', pure: false }]
    }], null, null); })();

class RangePipe {
    transform(start = 1, count = 0, step = 1) {
        return Array(count)
            .fill('')
            .map((v, i) => step * i + start);
    }
}
RangePipe.ɵfac = function RangePipe_Factory(t) { return new (t || RangePipe)(); };
RangePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "range", type: RangePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RangePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'range' }]
    }], null, null); })();

class ChunkPipe {
    transform(input, size = 1) {
        if (isString(input)) {
            return this.chunk(input
                .split(''), size);
        }
        return Array.isArray(input) ? this.chunk(input, size) : input;
    }
    chunk(input, size) {
        return Array(Math.ceil(input.length / size))
            .fill([])
            .map((_, index) => index * size)
            .map(begin => input.slice(begin, begin + size));
    }
}
ChunkPipe.ɵfac = function ChunkPipe_Factory(t) { return new (t || ChunkPipe)(); };
ChunkPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "chunk", type: ChunkPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChunkPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'chunk' }]
    }], null, null); })();

class FromPairsPipe {
    transform(input) {
        if (!Array.isArray(input)) {
            return input;
        }
        return input.reduce((obj, arr) => {
            if (!Array.isArray(arr)) {
                return obj;
            }
            const [prop, val] = arr;
            obj[prop] = val;
            return obj;
        }, {});
    }
}
FromPairsPipe.ɵfac = function FromPairsPipe_Factory(t) { return new (t || FromPairsPipe)(); };
FromPairsPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "fromPairs", type: FromPairsPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FromPairsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'fromPairs' }]
    }], null, null); })();

const ARRAY_PIPES = [
    DiffPipe,
    FlattenPipe,
    InitialPipe,
    IntersectionPipe,
    ReversePipe,
    TailPipe,
    TrurthifyPipe,
    UnionPipe,
    UniquePipe,
    WithoutPipe,
    PluckPipe,
    ShufflePipe,
    EveryPipe,
    SomePipe,
    SamplePipe,
    GroupByPipe,
    GroupByImpurePipe,
    FilterByPipe,
    FilterByImpurePipe,
    OrderByPipe,
    OrderByImpurePipe,
    RangePipe,
    ChunkPipe,
    FromPairsPipe
];
class NgArrayPipesModule {
}
NgArrayPipesModule.ɵfac = function NgArrayPipesModule_Factory(t) { return new (t || NgArrayPipesModule)(); };
NgArrayPipesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgArrayPipesModule });
NgArrayPipesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgArrayPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: ARRAY_PIPES,
                imports: [],
                exports: ARRAY_PIPES
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgArrayPipesModule, { declarations: [DiffPipe, FlattenPipe, InitialPipe, IntersectionPipe, ReversePipe, TailPipe, TrurthifyPipe, UnionPipe, UniquePipe, WithoutPipe, PluckPipe, ShufflePipe, EveryPipe, SomePipe, SamplePipe, GroupByPipe, GroupByImpurePipe, FilterByPipe, FilterByImpurePipe, OrderByPipe, OrderByImpurePipe, RangePipe, ChunkPipe, FromPairsPipe], exports: [DiffPipe, FlattenPipe, InitialPipe, IntersectionPipe, ReversePipe, TailPipe, TrurthifyPipe, UnionPipe, UniquePipe, WithoutPipe, PluckPipe, ShufflePipe, EveryPipe, SomePipe, SamplePipe, GroupByPipe, GroupByImpurePipe, FilterByPipe, FilterByImpurePipe, OrderByPipe, OrderByImpurePipe, RangePipe, ChunkPipe, FromPairsPipe] }); })();

class KeysPipe {
    transform(obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj);
    }
}
KeysPipe.ɵfac = function KeysPipe_Factory(t) { return new (t || KeysPipe)(); };
KeysPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "keys", type: KeysPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeysPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'keys' }]
    }], null, null); })();

class ValuesPipe {
    transform(obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj).map(k => obj[k]);
    }
}
ValuesPipe.ɵfac = function ValuesPipe_Factory(t) { return new (t || ValuesPipe)(); };
ValuesPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "values", type: ValuesPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValuesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'values' }]
    }], null, null); })();

class PairsPipe {
    transform(obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.entries(obj);
    }
}
PairsPipe.ɵfac = function PairsPipe_Factory(t) { return new (t || PairsPipe)(); };
PairsPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "pairs", type: PairsPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PairsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'pairs' }]
    }], null, null); })();

class PickPipe {
    transform(obj, ...args) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return args.reduce((o, k) => {
            return Object.assign(o, { [k]: obj[k] });
        }, {});
    }
}
PickPipe.ɵfac = function PickPipe_Factory(t) { return new (t || PickPipe)(); };
PickPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "pick", type: PickPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PickPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'pick' }]
    }], null, null); })();

class OmitPipe {
    transform(obj, ...args) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return (Object.keys(obj)
            // tslint:disable-next-line:no-bitwise
            .filter(k => !~args.indexOf(k))
            .reduce((o, k) => {
            return Object.assign(o, { [k]: obj[k] });
        }, {}));
    }
}
OmitPipe.ɵfac = function OmitPipe_Factory(t) { return new (t || OmitPipe)(); };
OmitPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "omit", type: OmitPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OmitPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'omit' }]
    }], null, null); })();

class InvertPipe {
    transform(obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj).reduce((o, k) => {
            return Object.assign(o, { [obj[k]]: k });
        }, {});
    }
}
InvertPipe.ɵfac = function InvertPipe_Factory(t) { return new (t || InvertPipe)(); };
InvertPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "invert", type: InvertPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvertPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'invert' }]
    }], null, null); })();

class InvertByPipe {
    transform(obj, cb) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj).reduce((o, k) => {
            const key = cb ? cb(obj[k]) : obj[k];
            return Array.isArray(o[key]) ? (o[key].push(k), o) : Object.assign(o, { [key]: [k] });
        }, {});
    }
}
InvertByPipe.ɵfac = function InvertByPipe_Factory(t) { return new (t || InvertByPipe)(); };
InvertByPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "invertBy", type: InvertByPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvertByPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'invertBy' }]
    }], null, null); })();

class DiffObjPipe {
    transform(obj, original = {}) {
        if (Array.isArray(obj) || Array.isArray(original) || !isObject(obj) || !isObject(original)) {
            return {};
        }
        return getKeysTwoObjects(obj, original).reduce((diff, key) => {
            if (!isDeepEqual(original[key], obj[key])) {
                diff[key] = obj[key];
            }
            return diff;
        }, {});
    }
}
DiffObjPipe.ɵfac = function DiffObjPipe_Factory(t) { return new (t || DiffObjPipe)(); };
DiffObjPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "diffObj", type: DiffObjPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiffObjPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'diffObj' }]
    }], null, null); })();

const OBJECT_PIPES = [KeysPipe, ValuesPipe, PairsPipe, PickPipe, InvertPipe, InvertByPipe, OmitPipe, DiffObjPipe];
class NgObjectPipesModule {
}
NgObjectPipesModule.ɵfac = function NgObjectPipesModule_Factory(t) { return new (t || NgObjectPipesModule)(); };
NgObjectPipesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgObjectPipesModule });
NgObjectPipesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgObjectPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: OBJECT_PIPES,
                imports: [],
                exports: OBJECT_PIPES
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgObjectPipesModule, { declarations: [KeysPipe, ValuesPipe, PairsPipe, PickPipe, InvertPipe, InvertByPipe, OmitPipe, DiffObjPipe], exports: [KeysPipe, ValuesPipe, PairsPipe, PickPipe, InvertPipe, InvertByPipe, OmitPipe, DiffObjPipe] }); })();

/**
 * Takes a string and returns the string prepended by 'a' or 'an'.
 * Uses both naive and holdout-list approaches.
 * @constructor
 * @param {string} stringEntity - Entity to prepend 'a' or 'an' to.
 */
class AorAnPipe {
    constructor() {
        this.irregularMap = {
            herb: 'an',
            honor: 'an',
            honorable: 'an',
            hour: 'an',
            mba: 'an',
            msc: 'an',
            'm.sc.': 'an',
            unicorn: 'a',
        };
    }
    transform(stringEntity) {
        if (!stringEntity || stringEntity === '') {
            return '';
        }
        else {
            const firstWord = stringEntity.trim().split(' ')[0];
            if (this.irregularMap[firstWord.toLocaleLowerCase()]) {
                return `${this.irregularMap[firstWord.toLocaleLowerCase()]} ${stringEntity}`;
            }
            else {
                return isVowel(stringEntity[0]) ? `an ${stringEntity}` : `a ${stringEntity}`;
            }
        }
    }
}
AorAnPipe.ɵfac = function AorAnPipe_Factory(t) { return new (t || AorAnPipe)(); };
AorAnPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "aOrAn", type: AorAnPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AorAnPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{
                name: 'aOrAn'
            }]
    }], function () { return []; }, null); })();

class UcWordsPipe {
    transform(text) {
        if (isString(text)) {
            return text
                .split(' ')
                .map((sub) => ucFirst(sub))
                .join(' ');
        }
        return text;
    }
}
UcWordsPipe.ɵfac = function UcWordsPipe_Factory(t) { return new (t || UcWordsPipe)(); };
UcWordsPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ucwords", type: UcWordsPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UcWordsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'ucwords' }]
    }], null, null); })();

class LeftTrimPipe {
    transform(text, chars = '\\s') {
        return isString(text) ? text.replace(new RegExp(`^[${chars}]+`), '') : text;
    }
}
LeftTrimPipe.ɵfac = function LeftTrimPipe_Factory(t) { return new (t || LeftTrimPipe)(); };
LeftTrimPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ltrim", type: LeftTrimPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftTrimPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'ltrim' }]
    }], null, null); })();

class RepeatPipe {
    transform(str, n = 1, separator = '') {
        if (n <= 0) {
            throw new RangeError();
        }
        return n === 1 ? str : this.repeat(str, n - 1, separator);
    }
    repeat(str, n, separator) {
        return isString(str) ? (n === 0 ? str : str + separator + this.repeat(str, n - 1, separator)) : str;
    }
}
RepeatPipe.ɵfac = function RepeatPipe_Factory(t) { return new (t || RepeatPipe)(); };
RepeatPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "repeat", type: RepeatPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepeatPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'repeat' }]
    }], null, null); })();

class RightTrimPipe {
    transform(text, chars = '\\s') {
        return isString(text) ? text.replace(new RegExp(`[${chars}]+$`), '') : text;
    }
}
RightTrimPipe.ɵfac = function RightTrimPipe_Factory(t) { return new (t || RightTrimPipe)(); };
RightTrimPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "rtrim", type: RightTrimPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightTrimPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'rtrim' }]
    }], null, null); })();

class ScanPipe {
    transform(text, args = []) {
        return isString(text)
            ? text.replace(/\{(\d+)}/g, (match, index) => (!isUndefined(args[index]) ? args[index] : match))
            : text;
    }
}
ScanPipe.ɵfac = function ScanPipe_Factory(t) { return new (t || ScanPipe)(); };
ScanPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "scan", type: ScanPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScanPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'scan' }]
    }], null, null); })();

class ShortenPipe {
    transform(text, length = 0, suffix = '', wordBreak = true) {
        if (!isString(text)) {
            return text;
        }
        if (text.length > length) {
            if (wordBreak) {
                return text.slice(0, length) + suffix;
            }
            // tslint:disable-next-line:no-bitwise
            if (!!~text.indexOf(' ', length)) {
                return text.slice(0, text.indexOf(' ', length)) + suffix;
            }
        }
        return text;
    }
}
ShortenPipe.ɵfac = function ShortenPipe_Factory(t) { return new (t || ShortenPipe)(); };
ShortenPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "shorten", type: ShortenPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShortenPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'shorten' }]
    }], null, null); })();

class StripTagsPipe {
    transform(text, ...allowedTags) {
        return allowedTags.length > 0
            ? text.replace(new RegExp(`<(?!\/?(${allowedTags.join('|')})\s*\/?)[^>]+>`, 'g'), '')
            : text.replace(/<(?:.|\s)*?>/g, '');
    }
}
StripTagsPipe.ɵfac = function StripTagsPipe_Factory(t) { return new (t || StripTagsPipe)(); };
StripTagsPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "stripTags", type: StripTagsPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripTagsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'stripTags' }]
    }], null, null); })();

class TrimPipe {
    transform(text, chars = '\\s') {
        return isString(text) ? text.replace(new RegExp(`^[${chars}]+|[${chars}]+$`, 'g'), '') : text;
    }
}
TrimPipe.ɵfac = function TrimPipe_Factory(t) { return new (t || TrimPipe)(); };
TrimPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "trim", type: TrimPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrimPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'trim' }]
    }], null, null); })();

class UcFirstPipe {
    transform(text) {
        return isString(text) ? ucFirst(text) : text;
    }
}
UcFirstPipe.ɵfac = function UcFirstPipe_Factory(t) { return new (t || UcFirstPipe)(); };
UcFirstPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ucfirst", type: UcFirstPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UcFirstPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'ucfirst' }]
    }], null, null); })();

class SlugifyPipe {
    transform(str) {
        return isString(str)
            ? str
                .toLowerCase()
                .trim()
                .replace(/[^\w\-]+/g, ' ')
                .replace(/\s+/g, '-')
            : str;
    }
}
SlugifyPipe.ɵfac = function SlugifyPipe_Factory(t) { return new (t || SlugifyPipe)(); };
SlugifyPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "slugify", type: SlugifyPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlugifyPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'slugify' }]
    }], null, null); })();

class CamelizePipe {
    transform(text, chars = '\\s') {
        if (!isString(text)) {
            return text;
        }
        return text
            .toLowerCase()
            .split(/[-_\s]/g)
            .filter((v) => !!v)
            .map((word, key) => {
            return !key ? word : word.slice(0, 1).toUpperCase() + word.slice(1);
        })
            .join('');
    }
}
CamelizePipe.ɵfac = function CamelizePipe_Factory(t) { return new (t || CamelizePipe)(); };
CamelizePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "camelize", type: CamelizePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CamelizePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'camelize' }]
    }], null, null); })();

class LatinisePipe {
    constructor() {
        // Source: http://semplicewebsites.com/removing-accents-javascript
        // tslint:disable-next-line whitespace max-line-length object-literal-key-quotes
        this.latinMap = {
            'Á': 'A',
            'Ă': 'A',
            'Ắ': 'A',
            'Ặ': 'A',
            'Ằ': 'A',
            'Ẳ': 'A',
            'Ẵ': 'A',
            'Ǎ': 'A',
            'Â': 'A',
            'Ấ': 'A',
            'Ậ': 'A',
            'Ầ': 'A',
            'Ẩ': 'A',
            'Ẫ': 'A',
            'Ä': 'A',
            'Ǟ': 'A',
            'Ȧ': 'A',
            'Ǡ': 'A',
            'Ạ': 'A',
            'Ȁ': 'A',
            'À': 'A',
            'Ả': 'A',
            'Ȃ': 'A',
            'Ā': 'A',
            'Ą': 'A',
            'Å': 'A',
            'Ǻ': 'A',
            'Ḁ': 'A',
            'Ⱥ': 'A',
            'Ã': 'A',
            'Ꜳ': 'AA',
            'Æ': 'AE',
            'Ǽ': 'AE',
            'Ǣ': 'AE',
            'Ꜵ': 'AO',
            'Ꜷ': 'AU',
            'Ꜹ': 'AV',
            'Ꜻ': 'AV',
            'Ꜽ': 'AY',
            'Ḃ': 'B',
            'Ḅ': 'B',
            'Ɓ': 'B',
            'Ḇ': 'B',
            'Ƀ': 'B',
            'Ƃ': 'B',
            'Ć': 'C',
            'Č': 'C',
            'Ç': 'C',
            'Ḉ': 'C',
            'Ĉ': 'C',
            'Ċ': 'C',
            'Ƈ': 'C',
            'Ȼ': 'C',
            'Ď': 'D',
            'Ḑ': 'D',
            'Ḓ': 'D',
            'Ḋ': 'D',
            'Ḍ': 'D',
            'Ɗ': 'D',
            'Ḏ': 'D',
            'ǲ': 'D',
            'ǅ': 'D',
            'Đ': 'D',
            'Ƌ': 'D',
            'Ǳ': 'DZ',
            'Ǆ': 'DZ',
            'É': 'E',
            'Ĕ': 'E',
            'Ě': 'E',
            'Ȩ': 'E',
            'Ḝ': 'E',
            'Ê': 'E',
            'Ế': 'E',
            'Ệ': 'E',
            'Ề': 'E',
            'Ể': 'E',
            'Ễ': 'E',
            'Ḙ': 'E',
            'Ë': 'E',
            'Ė': 'E',
            'Ẹ': 'E',
            'Ȅ': 'E',
            'È': 'E',
            'Ẻ': 'E',
            'Ȇ': 'E',
            'Ē': 'E',
            'Ḗ': 'E',
            'Ḕ': 'E',
            'Ę': 'E',
            'Ɇ': 'E',
            'Ẽ': 'E',
            'Ḛ': 'E',
            'Ꝫ': 'ET',
            'Ḟ': 'F',
            'Ƒ': 'F',
            'Ǵ': 'G',
            'Ğ': 'G',
            'Ǧ': 'G',
            'Ģ': 'G',
            'Ĝ': 'G',
            'Ġ': 'G',
            'Ɠ': 'G',
            'Ḡ': 'G',
            'Ǥ': 'G',
            'Ḫ': 'H',
            'Ȟ': 'H',
            'Ḩ': 'H',
            'Ĥ': 'H',
            'Ⱨ': 'H',
            'Ḧ': 'H',
            'Ḣ': 'H',
            'Ḥ': 'H',
            'Ħ': 'H',
            'Í': 'I',
            'Ĭ': 'I',
            'Ǐ': 'I',
            'Î': 'I',
            'Ï': 'I',
            'Ḯ': 'I',
            'İ': 'I',
            'Ị': 'I',
            'Ȉ': 'I',
            'Ì': 'I',
            'Ỉ': 'I',
            'Ȋ': 'I',
            'Ī': 'I',
            'Į': 'I',
            'Ɨ': 'I',
            'Ĩ': 'I',
            'Ḭ': 'I',
            'Ꝺ': 'D',
            'Ꝼ': 'F',
            'Ᵹ': 'G',
            'Ꞃ': 'R',
            'Ꞅ': 'S',
            'Ꞇ': 'T',
            'Ꝭ': 'IS',
            'Ĵ': 'J',
            'Ɉ': 'J',
            'Ḱ': 'K',
            'Ǩ': 'K',
            'Ķ': 'K',
            'Ⱪ': 'K',
            'Ꝃ': 'K',
            'Ḳ': 'K',
            'Ƙ': 'K',
            'Ḵ': 'K',
            'Ꝁ': 'K',
            'Ꝅ': 'K',
            'Ĺ': 'L',
            'Ƚ': 'L',
            'Ľ': 'L',
            'Ļ': 'L',
            'Ḽ': 'L',
            'Ḷ': 'L',
            'Ḹ': 'L',
            'Ⱡ': 'L',
            'Ꝉ': 'L',
            'Ḻ': 'L',
            'Ŀ': 'L',
            'Ɫ': 'L',
            'ǈ': 'L',
            'Ł': 'L',
            'Ǉ': 'LJ',
            'Ḿ': 'M',
            'Ṁ': 'M',
            'Ṃ': 'M',
            'Ɱ': 'M',
            'Ń': 'N',
            'Ň': 'N',
            'Ņ': 'N',
            'Ṋ': 'N',
            'Ṅ': 'N',
            'Ṇ': 'N',
            'Ǹ': 'N',
            'Ɲ': 'N',
            'Ṉ': 'N',
            'Ƞ': 'N',
            'ǋ': 'N',
            'Ñ': 'N',
            'Ǌ': 'NJ',
            'Ó': 'O',
            'Ŏ': 'O',
            'Ǒ': 'O',
            'Ô': 'O',
            'Ố': 'O',
            'Ộ': 'O',
            'Ồ': 'O',
            'Ổ': 'O',
            'Ỗ': 'O',
            'Ö': 'O',
            'Ȫ': 'O',
            'Ȯ': 'O',
            'Ȱ': 'O',
            'Ọ': 'O',
            'Ő': 'O',
            'Ȍ': 'O',
            'Ò': 'O',
            'Ỏ': 'O',
            'Ơ': 'O',
            'Ớ': 'O',
            'Ợ': 'O',
            'Ờ': 'O',
            'Ở': 'O',
            'Ỡ': 'O',
            'Ȏ': 'O',
            'Ꝋ': 'O',
            'Ꝍ': 'O',
            'Ō': 'O',
            'Ṓ': 'O',
            'Ṑ': 'O',
            'Ɵ': 'O',
            'Ǫ': 'O',
            'Ǭ': 'O',
            'Ø': 'O',
            'Ǿ': 'O',
            'Õ': 'O',
            'Ṍ': 'O',
            'Ṏ': 'O',
            'Ȭ': 'O',
            'Ƣ': 'OI',
            'Ꝏ': 'OO',
            'Ɛ': 'E',
            'Ɔ': 'O',
            'Ȣ': 'OU',
            'Ṕ': 'P',
            'Ṗ': 'P',
            'Ꝓ': 'P',
            'Ƥ': 'P',
            'Ꝕ': 'P',
            'Ᵽ': 'P',
            'Ꝑ': 'P',
            'Ꝙ': 'Q',
            'Ꝗ': 'Q',
            'Ŕ': 'R',
            'Ř': 'R',
            'Ŗ': 'R',
            'Ṙ': 'R',
            'Ṛ': 'R',
            'Ṝ': 'R',
            'Ȑ': 'R',
            'Ȓ': 'R',
            'Ṟ': 'R',
            'Ɍ': 'R',
            'Ɽ': 'R',
            'Ꜿ': 'C',
            'Ǝ': 'E',
            'Ś': 'S',
            'Ṥ': 'S',
            'Š': 'S',
            'Ṧ': 'S',
            'Ş': 'S',
            'Ŝ': 'S',
            'Ș': 'S',
            'Ṡ': 'S',
            'Ṣ': 'S',
            'Ṩ': 'S',
            'ẞ': 'SS',
            'Ť': 'T',
            'Ţ': 'T',
            'Ṱ': 'T',
            'Ț': 'T',
            'Ⱦ': 'T',
            'Ṫ': 'T',
            'Ṭ': 'T',
            'Ƭ': 'T',
            'Ṯ': 'T',
            'Ʈ': 'T',
            'Ŧ': 'T',
            'Ɐ': 'A',
            'Ꞁ': 'L',
            'Ɯ': 'M',
            'Ʌ': 'V',
            'Ꜩ': 'TZ',
            'Ú': 'U',
            'Ŭ': 'U',
            'Ǔ': 'U',
            'Û': 'U',
            'Ṷ': 'U',
            'Ü': 'U',
            'Ǘ': 'U',
            'Ǚ': 'U',
            'Ǜ': 'U',
            'Ǖ': 'U',
            'Ṳ': 'U',
            'Ụ': 'U',
            'Ű': 'U',
            'Ȕ': 'U',
            'Ù': 'U',
            'Ủ': 'U',
            'Ư': 'U',
            'Ứ': 'U',
            'Ự': 'U',
            'Ừ': 'U',
            'Ử': 'U',
            'Ữ': 'U',
            'Ȗ': 'U',
            'Ū': 'U',
            'Ṻ': 'U',
            'Ų': 'U',
            'Ů': 'U',
            'Ũ': 'U',
            'Ṹ': 'U',
            'Ṵ': 'U',
            'Ꝟ': 'V',
            'Ṿ': 'V',
            'Ʋ': 'V',
            'Ṽ': 'V',
            'Ꝡ': 'VY',
            'Ẃ': 'W',
            'Ŵ': 'W',
            'Ẅ': 'W',
            'Ẇ': 'W',
            'Ẉ': 'W',
            'Ẁ': 'W',
            'Ⱳ': 'W',
            'Ẍ': 'X',
            'Ẋ': 'X',
            'Ý': 'Y',
            'Ŷ': 'Y',
            'Ÿ': 'Y',
            'Ẏ': 'Y',
            'Ỵ': 'Y',
            'Ỳ': 'Y',
            'Ƴ': 'Y',
            'Ỷ': 'Y',
            'Ỿ': 'Y',
            'Ȳ': 'Y',
            'Ɏ': 'Y',
            'Ỹ': 'Y',
            'Ź': 'Z',
            'Ž': 'Z',
            'Ẑ': 'Z',
            'Ⱬ': 'Z',
            'Ż': 'Z',
            'Ẓ': 'Z',
            'Ȥ': 'Z',
            'Ẕ': 'Z',
            'Ƶ': 'Z',
            'Ĳ': 'IJ',
            'Œ': 'OE',
            'ᴀ': 'A',
            'ᴁ': 'AE',
            'ʙ': 'B',
            'ᴃ': 'B',
            'ᴄ': 'C',
            'ᴅ': 'D',
            'ᴇ': 'E',
            'ꜰ': 'F',
            'ɢ': 'G',
            'ʛ': 'G',
            'ʜ': 'H',
            'ɪ': 'I',
            'ʁ': 'R',
            'ᴊ': 'J',
            'ᴋ': 'K',
            'ʟ': 'L',
            'ᴌ': 'L',
            'ᴍ': 'M',
            'ɴ': 'N',
            'ᴏ': 'O',
            'ɶ': 'OE',
            'ᴐ': 'O',
            'ᴕ': 'OU',
            'ᴘ': 'P',
            'ʀ': 'R',
            'ᴎ': 'N',
            'ᴙ': 'R',
            'ꜱ': 'S',
            'ᴛ': 'T',
            'ⱻ': 'E',
            'ᴚ': 'R',
            'ᴜ': 'U',
            'ᴠ': 'V',
            'ᴡ': 'W',
            'ʏ': 'Y',
            'ᴢ': 'Z',
            'á': 'a',
            'ă': 'a',
            'ắ': 'a',
            'ặ': 'a',
            'ằ': 'a',
            'ẳ': 'a',
            'ẵ': 'a',
            'ǎ': 'a',
            'â': 'a',
            'ấ': 'a',
            'ậ': 'a',
            'ầ': 'a',
            'ẩ': 'a',
            'ẫ': 'a',
            'ä': 'a',
            'ǟ': 'a',
            'ȧ': 'a',
            'ǡ': 'a',
            'ạ': 'a',
            'ȁ': 'a',
            'à': 'a',
            'ả': 'a',
            'ȃ': 'a',
            'ā': 'a',
            'ą': 'a',
            'ᶏ': 'a',
            'ẚ': 'a',
            'å': 'a',
            'ǻ': 'a',
            'ḁ': 'a',
            'ⱥ': 'a',
            'ã': 'a',
            'ꜳ': 'aa',
            'æ': 'ae',
            'ǽ': 'ae',
            'ǣ': 'ae',
            'ꜵ': 'ao',
            'ꜷ': 'au',
            'ꜹ': 'av',
            'ꜻ': 'av',
            'ꜽ': 'ay',
            'ḃ': 'b',
            'ḅ': 'b',
            'ɓ': 'b',
            'ḇ': 'b',
            'ᵬ': 'b',
            'ᶀ': 'b',
            'ƀ': 'b',
            'ƃ': 'b',
            'ɵ': 'o',
            'ć': 'c',
            'č': 'c',
            'ç': 'c',
            'ḉ': 'c',
            'ĉ': 'c',
            'ɕ': 'c',
            'ċ': 'c',
            'ƈ': 'c',
            'ȼ': 'c',
            'ď': 'd',
            'ḑ': 'd',
            'ḓ': 'd',
            'ȡ': 'd',
            'ḋ': 'd',
            'ḍ': 'd',
            'ɗ': 'd',
            'ᶑ': 'd',
            'ḏ': 'd',
            'ᵭ': 'd',
            'ᶁ': 'd',
            'đ': 'd',
            'ɖ': 'd',
            'ƌ': 'd',
            'ı': 'i',
            'ȷ': 'j',
            'ɟ': 'j',
            'ʄ': 'j',
            'ǳ': 'dz',
            'ǆ': 'dz',
            'é': 'e',
            'ĕ': 'e',
            'ě': 'e',
            'ȩ': 'e',
            'ḝ': 'e',
            'ê': 'e',
            'ế': 'e',
            'ệ': 'e',
            'ề': 'e',
            'ể': 'e',
            'ễ': 'e',
            'ḙ': 'e',
            'ë': 'e',
            'ė': 'e',
            'ẹ': 'e',
            'ȅ': 'e',
            'è': 'e',
            'ẻ': 'e',
            'ȇ': 'e',
            'ē': 'e',
            'ḗ': 'e',
            'ḕ': 'e',
            'ⱸ': 'e',
            'ę': 'e',
            'ᶒ': 'e',
            'ɇ': 'e',
            'ẽ': 'e',
            'ḛ': 'e',
            'ꝫ': 'et',
            'ḟ': 'f',
            'ƒ': 'f',
            'ᵮ': 'f',
            'ᶂ': 'f',
            'ǵ': 'g',
            'ğ': 'g',
            'ǧ': 'g',
            'ģ': 'g',
            'ĝ': 'g',
            'ġ': 'g',
            'ɠ': 'g',
            'ḡ': 'g',
            'ᶃ': 'g',
            'ǥ': 'g',
            'ḫ': 'h',
            'ȟ': 'h',
            'ḩ': 'h',
            'ĥ': 'h',
            'ⱨ': 'h',
            'ḧ': 'h',
            'ḣ': 'h',
            'ḥ': 'h',
            'ɦ': 'h',
            'ẖ': 'h',
            'ħ': 'h',
            'ƕ': 'hv',
            'í': 'i',
            'ĭ': 'i',
            'ǐ': 'i',
            'î': 'i',
            'ï': 'i',
            'ḯ': 'i',
            'ị': 'i',
            'ȉ': 'i',
            'ì': 'i',
            'ỉ': 'i',
            'ȋ': 'i',
            'ī': 'i',
            'į': 'i',
            'ᶖ': 'i',
            'ɨ': 'i',
            'ĩ': 'i',
            'ḭ': 'i',
            'ꝺ': 'd',
            'ꝼ': 'f',
            'ᵹ': 'g',
            'ꞃ': 'r',
            'ꞅ': 's',
            'ꞇ': 't',
            'ꝭ': 'is',
            'ǰ': 'j',
            'ĵ': 'j',
            'ʝ': 'j',
            'ɉ': 'j',
            'ḱ': 'k',
            'ǩ': 'k',
            'ķ': 'k',
            'ⱪ': 'k',
            'ꝃ': 'k',
            'ḳ': 'k',
            'ƙ': 'k',
            'ḵ': 'k',
            'ᶄ': 'k',
            'ꝁ': 'k',
            'ꝅ': 'k',
            'ĺ': 'l',
            'ƚ': 'l',
            'ɬ': 'l',
            'ľ': 'l',
            'ļ': 'l',
            'ḽ': 'l',
            'ȴ': 'l',
            'ḷ': 'l',
            'ḹ': 'l',
            'ⱡ': 'l',
            'ꝉ': 'l',
            'ḻ': 'l',
            'ŀ': 'l',
            'ɫ': 'l',
            'ᶅ': 'l',
            'ɭ': 'l',
            'ł': 'l',
            'ǉ': 'lj',
            'ſ': 's',
            'ẜ': 's',
            'ẛ': 's',
            'ẝ': 's',
            'ḿ': 'm',
            'ṁ': 'm',
            'ṃ': 'm',
            'ɱ': 'm',
            'ᵯ': 'm',
            'ᶆ': 'm',
            'ń': 'n',
            'ň': 'n',
            'ņ': 'n',
            'ṋ': 'n',
            'ȵ': 'n',
            'ṅ': 'n',
            'ṇ': 'n',
            'ǹ': 'n',
            'ɲ': 'n',
            'ṉ': 'n',
            'ƞ': 'n',
            'ᵰ': 'n',
            'ᶇ': 'n',
            'ɳ': 'n',
            'ñ': 'n',
            'ǌ': 'nj',
            'ó': 'o',
            'ŏ': 'o',
            'ǒ': 'o',
            'ô': 'o',
            'ố': 'o',
            'ộ': 'o',
            'ồ': 'o',
            'ổ': 'o',
            'ỗ': 'o',
            'ö': 'o',
            'ȫ': 'o',
            'ȯ': 'o',
            'ȱ': 'o',
            'ọ': 'o',
            'ő': 'o',
            'ȍ': 'o',
            'ò': 'o',
            'ỏ': 'o',
            'ơ': 'o',
            'ớ': 'o',
            'ợ': 'o',
            'ờ': 'o',
            'ở': 'o',
            'ỡ': 'o',
            'ȏ': 'o',
            'ꝋ': 'o',
            'ꝍ': 'o',
            'ⱺ': 'o',
            'ō': 'o',
            'ṓ': 'o',
            'ṑ': 'o',
            'ǫ': 'o',
            'ǭ': 'o',
            'ø': 'o',
            'ǿ': 'o',
            'õ': 'o',
            'ṍ': 'o',
            'ṏ': 'o',
            'ȭ': 'o',
            'ƣ': 'oi',
            'ꝏ': 'oo',
            'ɛ': 'e',
            'ᶓ': 'e',
            'ɔ': 'o',
            'ᶗ': 'o',
            'ȣ': 'ou',
            'ṕ': 'p',
            'ṗ': 'p',
            'ꝓ': 'p',
            'ƥ': 'p',
            'ᵱ': 'p',
            'ᶈ': 'p',
            'ꝕ': 'p',
            'ᵽ': 'p',
            'ꝑ': 'p',
            'ꝙ': 'q',
            'ʠ': 'q',
            'ɋ': 'q',
            'ꝗ': 'q',
            'ŕ': 'r',
            'ř': 'r',
            'ŗ': 'r',
            'ṙ': 'r',
            'ṛ': 'r',
            'ṝ': 'r',
            'ȑ': 'r',
            'ɾ': 'r',
            'ᵳ': 'r',
            'ȓ': 'r',
            'ṟ': 'r',
            'ɼ': 'r',
            'ᵲ': 'r',
            'ᶉ': 'r',
            'ɍ': 'r',
            'ɽ': 'r',
            'ↄ': 'c',
            'ꜿ': 'c',
            'ɘ': 'e',
            'ɿ': 'r',
            'ś': 's',
            'ṥ': 's',
            'š': 's',
            'ṧ': 's',
            'ş': 's',
            'ŝ': 's',
            'ș': 's',
            'ṡ': 's',
            'ṣ': 's',
            'ṩ': 's',
            'ʂ': 's',
            'ᵴ': 's',
            'ᶊ': 's',
            'ȿ': 's',
            'ɡ': 'g',
            'ß': 'ss',
            'ᴑ': 'o',
            'ᴓ': 'o',
            'ᴝ': 'u',
            'ť': 't',
            'ţ': 't',
            'ṱ': 't',
            'ț': 't',
            'ȶ': 't',
            'ẗ': 't',
            'ⱦ': 't',
            'ṫ': 't',
            'ṭ': 't',
            'ƭ': 't',
            'ṯ': 't',
            'ᵵ': 't',
            'ƫ': 't',
            'ʈ': 't',
            'ŧ': 't',
            'ᵺ': 'th',
            'ɐ': 'a',
            'ᴂ': 'ae',
            'ǝ': 'e',
            'ᵷ': 'g',
            'ɥ': 'h',
            'ʮ': 'h',
            'ʯ': 'h',
            'ᴉ': 'i',
            'ʞ': 'k',
            'ꞁ': 'l',
            'ɯ': 'm',
            'ɰ': 'm',
            'ᴔ': 'oe',
            'ɹ': 'r',
            'ɻ': 'r',
            'ɺ': 'r',
            'ⱹ': 'r',
            'ʇ': 't',
            'ʌ': 'v',
            'ʍ': 'w',
            'ʎ': 'y',
            'ꜩ': 'tz',
            'ú': 'u',
            'ŭ': 'u',
            'ǔ': 'u',
            'û': 'u',
            'ṷ': 'u',
            'ü': 'u',
            'ǘ': 'u',
            'ǚ': 'u',
            'ǜ': 'u',
            'ǖ': 'u',
            'ṳ': 'u',
            'ụ': 'u',
            'ű': 'u',
            'ȕ': 'u',
            'ù': 'u',
            'ủ': 'u',
            'ư': 'u',
            'ứ': 'u',
            'ự': 'u',
            'ừ': 'u',
            'ử': 'u',
            'ữ': 'u',
            'ȗ': 'u',
            'ū': 'u',
            'ṻ': 'u',
            'ų': 'u',
            'ᶙ': 'u',
            'ů': 'u',
            'ũ': 'u',
            'ṹ': 'u',
            'ṵ': 'u',
            'ᵫ': 'ue',
            'ꝸ': 'um',
            'ⱴ': 'v',
            'ꝟ': 'v',
            'ṿ': 'v',
            'ʋ': 'v',
            'ᶌ': 'v',
            'ⱱ': 'v',
            'ṽ': 'v',
            'ꝡ': 'vy',
            'ẃ': 'w',
            'ŵ': 'w',
            'ẅ': 'w',
            'ẇ': 'w',
            'ẉ': 'w',
            'ẁ': 'w',
            'ⱳ': 'w',
            'ẘ': 'w',
            'ẍ': 'x',
            'ẋ': 'x',
            'ᶍ': 'x',
            'ý': 'y',
            'ŷ': 'y',
            'ÿ': 'y',
            'ẏ': 'y',
            'ỵ': 'y',
            'ỳ': 'y',
            'ƴ': 'y',
            'ỷ': 'y',
            'ỿ': 'y',
            'ȳ': 'y',
            'ẙ': 'y',
            'ɏ': 'y',
            'ỹ': 'y',
            'ź': 'z',
            'ž': 'z',
            'ẑ': 'z',
            'ʑ': 'z',
            'ⱬ': 'z',
            'ż': 'z',
            'ẓ': 'z',
            'ȥ': 'z',
            'ẕ': 'z',
            'ᵶ': 'z',
            'ᶎ': 'z',
            'ʐ': 'z',
            'ƶ': 'z',
            'ɀ': 'z',
            'ﬀ': 'ff',
            'ﬃ': 'ffi',
            'ﬄ': 'ffl',
            'ﬁ': 'fi',
            'ﬂ': 'fl',
            'ĳ': 'ij',
            'œ': 'oe',
            'ﬆ': 'st',
            'ₐ': 'a',
            'ₑ': 'e',
            'ᵢ': 'i',
            'ⱼ': 'j',
            'ₒ': 'o',
            'ᵣ': 'r',
            'ᵤ': 'u',
            'ᵥ': 'v',
            'ₓ': 'x',
        };
    }
    transform(text, chars = '\\s') {
        return isString(text)
            ? text.replace(/[^A-Za-z0-9]/g, (key) => {
                return this.latinMap[key] || key;
            })
            : text;
    }
}
LatinisePipe.ɵfac = function LatinisePipe_Factory(t) { return new (t || LatinisePipe)(); };
LatinisePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "latinise", type: LatinisePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LatinisePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'latinise' }]
    }], function () { return []; }, null); })();

class LinesPipe {
    transform(text, chars = '\\s') {
        return isString(text) ? text.replace(/\r\n/g, '\n').split('\n') : text;
    }
}
LinesPipe.ɵfac = function LinesPipe_Factory(t) { return new (t || LinesPipe)(); };
LinesPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "lines", type: LinesPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'lines' }]
    }], null, null); })();

class UnderscorePipe {
    transform(text, chars = '\\s') {
        return isString(text)
            ? text
                .trim()
                .replace(/\s+/g, '')
                .replace(/[A-Z]/g, (c, k) => {
                return k ? `_${c.toLowerCase()}` : c.toLowerCase();
            })
            : text;
    }
}
UnderscorePipe.ɵfac = function UnderscorePipe_Factory(t) { return new (t || UnderscorePipe)(); };
UnderscorePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "underscore", type: UnderscorePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnderscorePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'underscore' }]
    }], null, null); })();

class MatchPipe {
    transform(text, pattern, flags) {
        if (!isString(text)) {
            return text;
        }
        return text.match(new RegExp(pattern, flags));
    }
}
MatchPipe.ɵfac = function MatchPipe_Factory(t) { return new (t || MatchPipe)(); };
MatchPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "match", type: MatchPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'match' }]
    }], null, null); })();

class TestPipe {
    transform(text, pattern, flags) {
        if (!isString(text)) {
            return text;
        }
        return new RegExp(pattern, flags).test(text);
    }
}
TestPipe.ɵfac = function TestPipe_Factory(t) { return new (t || TestPipe)(); };
TestPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "test", type: TestPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'test' }]
    }], null, null); })();

class LeftPadPipe {
    transform(str, length, padCharacter = ' ') {
        if (!isString(str) || str.length >= length) {
            return str;
        }
        while (str.length < length) {
            str = padCharacter + str;
        }
        return str;
    }
}
LeftPadPipe.ɵfac = function LeftPadPipe_Factory(t) { return new (t || LeftPadPipe)(); };
LeftPadPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "lpad", type: LeftPadPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftPadPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'lpad' }]
    }], null, null); })();

class RightPadPipe {
    transform(str, length = 1, padCharacter = ' ') {
        if (!isString(str) || str.length >= length) {
            return str;
        }
        while (str.length < length) {
            str = str + padCharacter;
        }
        return str;
    }
}
RightPadPipe.ɵfac = function RightPadPipe_Factory(t) { return new (t || RightPadPipe)(); };
RightPadPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "rpad", type: RightPadPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightPadPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'rpad' }]
    }], null, null); })();

/**
 * Takes a singular entity string and pluralizes it.
 * Uses both naive and holdout-list approaches.
 * If several words appear in the string, only the last word is pluralized -- this
 * means that if "your story" was passed in, "your stories" would be passed out.
 *
 * @param {string} singularEntity - Entity to pluralize. Pass as a singular ('story' or 'house').
 *          NOTE: The last word is examined. So you can pass in e.g. 'my story'.
 * @param {number} [quantity=0] quantity - How many of the entity are there? If left blank, this will
 *          pluralize the string (e.g. 'story' -> 'stories', 'house' -> 'houses'). If given a value,
 *          this will pluralize appropriately (e.g. ('story', 1) -> 'story', ('story', 2) -> 'stories').
 */
class MakePluralStringPipe {
    constructor() {
        this.irregularMap = {
            addendum: 'addenda',
            alga: 'algae',
            alumna: 'alumnae',
            alumnus: 'alumni',
            analysis: 'analyses',
            antenna: 'antennae',
            appendix: 'appendices',
            aquarium: 'aquaria',
            arch: 'arches',
            axe: 'axes',
            axis: 'axes',
            bacillus: 'bacilli',
            bacterium: 'bacteria',
            basis: 'bases',
            batch: 'batches',
            beach: 'beaches',
            beau: 'beaux',
            bison: 'bison',
            brush: 'brushes',
            buffalo: 'buffaloes',
            bureau: 'bureaus',
            bus: 'busses',
            cactus: 'cacti',
            calf: 'calves',
            chateau: 'chateaux',
            cherry: 'cherries',
            child: 'children',
            church: 'churches',
            circus: 'circuses',
            cod: 'cod',
            corps: 'corps',
            corpus: 'corpora',
            crisis: 'crises',
            criterion: 'criteria',
            curriculum: 'curricula',
            datum: 'data',
            deer: 'deer',
            diagnosis: 'diagnoses',
            die: 'dice',
            domino: 'dominoes',
            dwarf: 'dwarves',
            echo: 'echoes',
            elf: 'elves',
            ellipsis: 'ellipses',
            embargo: 'embargoes',
            emphasis: 'emphases',
            erratum: 'errata',
            fax: 'faxes',
            fireman: 'firemen',
            fish: 'fish',
            flush: 'flushes',
            focus: 'foci',
            foot: 'feet',
            formula: 'formulas',
            fungus: 'fungi',
            genus: 'genera',
            goose: 'geese',
            grafito: 'grafiti',
            half: 'halves',
            hero: 'heroes',
            hoax: 'hoaxes',
            hoof: 'hooves',
            hypothesis: 'hypotheses',
            index: 'indices',
            kiss: 'kisses',
            knife: 'knives',
            leaf: 'leaves',
            life: 'lives',
            loaf: 'loaves',
            louse: 'lice',
            man: 'men',
            mango: 'mangoes',
            matrix: 'matrices',
            means: 'means',
            medium: 'media',
            memorandum: 'memoranda',
            millennium: 'milennia',
            moose: 'moose',
            mosquito: 'mosquitoes',
            motto: 'mottoes',
            mouse: 'mice',
            nebula: 'nebulae',
            neurosis: 'neuroses',
            nucleus: 'nuclei',
            oasis: 'oases',
            octopus: 'octopodes',
            ovum: 'ova',
            ox: 'oxen',
            paralysis: 'paralyses',
            parenthesis: 'parentheses',
            person: 'people',
            phenomenon: 'phenomena',
            plateau: 'plateaux',
            potato: 'potatoes',
            quiz: 'quizzes',
            radius: 'radii',
            reflex: 'reflexes',
            'runner-up': 'runners-up',
            scampo: 'scampi',
            scarf: 'scarves',
            scissors: 'scissors',
            scratch: 'scratches',
            self: 'selves',
            series: 'series',
            sheaf: 'sheaves',
            sheep: 'sheep',
            shelf: 'shelves',
            'son-in-law': 'sons-in-law',
            species: 'species',
            splash: 'splashes',
            stimulus: 'stimuli',
            stitch: 'stitches',
            stratum: 'strata',
            syllabus: 'syllabi',
            symposium: 'symposia',
            synopsis: 'synopses',
            synthesis: 'syntheses',
            tableau: 'tableaux',
            tax: 'taxes',
            that: 'those',
            thesis: 'theses',
            thief: 'thieves',
            this: 'these',
            tomato: 'tomatoes',
            tooth: 'teeth',
            tornado: 'tornadoes',
            torpedo: 'torpedoes',
            vertebra: 'vertebrae',
            veto: 'vetoes',
            vita: 'vitae',
            volcano: 'volcanoes',
            waltz: 'waltzes',
            wash: 'washes',
            watch: 'watches',
            wharf: 'wharves',
            wife: 'wives',
            wolf: 'wolves',
            woman: 'women',
            zero: 'zeroes',
        };
    }
    transform(singularEntity, quantity = 0) {
        if (!singularEntity || singularEntity === '') {
            return '';
        }
        if (quantity === 1) {
            return singularEntity;
        }
        else {
            const lastWord = singularEntity.trim().split(' ')[singularEntity.trim().split(' ').length - 1];
            if (this.irregularMap[lastWord.toLocaleLowerCase()]) {
                if (lastWord[0] === lastWord[0].toLocaleUpperCase()) {
                    return singularEntity.replace(lastWord, this.irregularMap[lastWord.toLocaleLowerCase()].replace(this.irregularMap[lastWord.toLocaleLowerCase()][0], this.irregularMap[lastWord.toLocaleLowerCase()][0].toLocaleUpperCase()));
                }
                return singularEntity.replace(lastWord, this.irregularMap[lastWord.toLocaleLowerCase()]);
            }
            else if (lastWord[lastWord.length - 1] === 'y') {
                // Naive approach:
                // consonant+y = word - 'y' +'ies'
                // vowel+y = word + 's'
                return isVowel(lastWord[lastWord.length - 2])
                    ? singularEntity + 's'
                    : singularEntity.replace(lastWord, lastWord.slice(0, -1) + 'ies');
            }
            else if (lastWord[lastWord.length - 1] === 's') {
                return singularEntity + 'es';
            }
            else {
                return singularEntity + 's';
            }
        }
    }
}
MakePluralStringPipe.ɵfac = function MakePluralStringPipe_Factory(t) { return new (t || MakePluralStringPipe)(); };
MakePluralStringPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "makePluralString", type: MakePluralStringPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MakePluralStringPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{
                name: 'makePluralString'
            }]
    }], function () { return []; }, null); })();

class WrapPipe {
    transform(str, prefix = '', suffix = '') {
        if (!isString(str)) {
            return str;
        }
        return (!!prefix && isString(prefix) ? prefix : '') + str + (!!suffix && isString(suffix) ? suffix : '');
    }
}
WrapPipe.ɵfac = function WrapPipe_Factory(t) { return new (t || WrapPipe)(); };
WrapPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "wrap", type: WrapPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WrapPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'wrap' }]
    }], null, null); })();

const STRING_PIPES = [
    AorAnPipe,
    LeftTrimPipe,
    RepeatPipe,
    RightTrimPipe,
    ScanPipe,
    ShortenPipe,
    StripTagsPipe,
    TrimPipe,
    UcFirstPipe,
    UcWordsPipe,
    SlugifyPipe,
    CamelizePipe,
    LatinisePipe,
    LinesPipe,
    UnderscorePipe,
    MatchPipe,
    TestPipe,
    LeftPadPipe,
    RightPadPipe,
    MakePluralStringPipe,
    WrapPipe,
];
class NgStringPipesModule {
}
NgStringPipesModule.ɵfac = function NgStringPipesModule_Factory(t) { return new (t || NgStringPipesModule)(); };
NgStringPipesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgStringPipesModule });
NgStringPipesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgStringPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: STRING_PIPES,
                imports: [],
                exports: STRING_PIPES
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgStringPipesModule, { declarations: [AorAnPipe, LeftTrimPipe, RepeatPipe, RightTrimPipe, ScanPipe, ShortenPipe, StripTagsPipe, TrimPipe, UcFirstPipe, UcWordsPipe, SlugifyPipe, CamelizePipe, LatinisePipe, LinesPipe, UnderscorePipe, MatchPipe, TestPipe, LeftPadPipe, RightPadPipe, MakePluralStringPipe, WrapPipe], exports: [AorAnPipe, LeftTrimPipe, RepeatPipe, RightTrimPipe, ScanPipe, ShortenPipe, StripTagsPipe, TrimPipe, UcFirstPipe, UcWordsPipe, SlugifyPipe, CamelizePipe, LatinisePipe, LinesPipe, UnderscorePipe, MatchPipe, TestPipe, LeftPadPipe, RightPadPipe, MakePluralStringPipe, WrapPipe] }); })();

class MaxPipe {
    transform(arr) {
        return Array.isArray(arr) ? Math.max(...arr) : arr;
    }
}
MaxPipe.ɵfac = function MaxPipe_Factory(t) { return new (t || MaxPipe)(); };
MaxPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "max", type: MaxPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaxPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'max' }]
    }], null, null); })();

class MinPipe {
    transform(arr) {
        return Array.isArray(arr) ? Math.min(...arr) : arr;
    }
}
MinPipe.ɵfac = function MinPipe_Factory(t) { return new (t || MinPipe)(); };
MinPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "min", type: MinPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MinPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'min' }]
    }], null, null); })();

class PercentagePipe {
    transform(num, total = 100, floor = false) {
        if (isNaN(num)) {
            return num;
        }
        const percent = (num * 100) / total;
        return floor ? Math.floor(percent) : percent;
    }
}
PercentagePipe.ɵfac = function PercentagePipe_Factory(t) { return new (t || PercentagePipe)(); };
PercentagePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "percentage", type: PercentagePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PercentagePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'percentage' }]
    }], null, null); })();

class SumPipe {
    transform(arr) {
        return Array.isArray(arr) ? arr.reduce((sum, curr) => sum + curr, 0) : arr;
    }
}
SumPipe.ɵfac = function SumPipe_Factory(t) { return new (t || SumPipe)(); };
SumPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sum", type: SumPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SumPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'sum' }]
    }], null, null); })();

class FloorPipe {
    transform(num, precision = 0) {
        if (precision <= 0) {
            return Math.floor(num);
        }
        const tho = Math.pow(10, precision);
        return Math.floor(num * tho) / tho;
    }
}
FloorPipe.ɵfac = function FloorPipe_Factory(t) { return new (t || FloorPipe)(); };
FloorPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "floor", type: FloorPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FloorPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'floor' }]
    }], null, null); })();

class RoundPipe {
    transform(num, precision = 0) {
        return applyPrecision(num, precision);
    }
}
RoundPipe.ɵfac = function RoundPipe_Factory(t) { return new (t || RoundPipe)(); };
RoundPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "round", type: RoundPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoundPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'round' }]
    }], null, null); })();

class SqrtPipe {
    transform(num) {
        return !isNaN(num) ? Math.sqrt(num) : num;
    }
}
SqrtPipe.ɵfac = function SqrtPipe_Factory(t) { return new (t || SqrtPipe)(); };
SqrtPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sqrt", type: SqrtPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SqrtPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'sqrt' }]
    }], null, null); })();

class PowerPipe {
    transform(num, power = 2) {
        return !isNaN(num) ? Math.pow(num, power) : num;
    }
}
PowerPipe.ɵfac = function PowerPipe_Factory(t) { return new (t || PowerPipe)(); };
PowerPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "pow", type: PowerPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PowerPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'pow' }]
    }], null, null); })();

class CeilPipe {
    transform(num, precision = 0) {
        if (precision <= 0) {
            return Math.ceil(num);
        }
        const tho = Math.pow(10, precision);
        return Math.ceil(num * tho) / tho;
    }
}
CeilPipe.ɵfac = function CeilPipe_Factory(t) { return new (t || CeilPipe)(); };
CeilPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ceil", type: CeilPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CeilPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'ceil' }]
    }], null, null); })();

class DegreesPipe {
    transform(radians) {
        if (!isNumberFinite(radians)) {
            return NaN;
        }
        return (radians * 180) / Math.PI;
    }
}
DegreesPipe.ɵfac = function DegreesPipe_Factory(t) { return new (t || DegreesPipe)(); };
DegreesPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "degrees", type: DegreesPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DegreesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'degrees' }]
    }], null, null); })();

class BytesPipe {
    constructor() {
        this.dictionary = [
            { max: 1024, type: 'B' },
            { max: 1048576, type: 'KB' },
            { max: 1073741824, type: 'MB' },
            { max: 1.0995116e12, type: 'GB' },
        ];
    }
    transform(value, precision) {
        if (!isNumberFinite(value)) {
            return NaN;
        }
        const format = this.dictionary.find(d => value < d.max) || this.dictionary[this.dictionary.length - 1];
        const calc = value / (format.max / 1024);
        const num = isUndefined(precision) ? calc : applyPrecision(calc, precision);
        return `${num} ${format.type}`;
    }
}
BytesPipe.ɵfac = function BytesPipe_Factory(t) { return new (t || BytesPipe)(); };
BytesPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "bytes", type: BytesPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BytesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'bytes' }]
    }], function () { return []; }, null); })();

class RadiansPipe {
    transform(degrees) {
        if (!isNumberFinite(degrees)) {
            return NaN;
        }
        return (degrees * Math.PI) / 180;
    }
}
RadiansPipe.ɵfac = function RadiansPipe_Factory(t) { return new (t || RadiansPipe)(); };
RadiansPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "radians", type: RadiansPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadiansPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'radians' }]
    }], null, null); })();

const MATH_PIPES = [
    MaxPipe,
    MinPipe,
    PercentagePipe,
    SumPipe,
    FloorPipe,
    RoundPipe,
    SqrtPipe,
    PowerPipe,
    CeilPipe,
    DegreesPipe,
    BytesPipe,
    RadiansPipe,
];
class NgMathPipesModule {
}
NgMathPipesModule.ɵfac = function NgMathPipesModule_Factory(t) { return new (t || NgMathPipesModule)(); };
NgMathPipesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgMathPipesModule });
NgMathPipesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgMathPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: MATH_PIPES,
                imports: [],
                exports: MATH_PIPES
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgMathPipesModule, { declarations: [MaxPipe, MinPipe, PercentagePipe, SumPipe, FloorPipe, RoundPipe, SqrtPipe, PowerPipe, CeilPipe, DegreesPipe, BytesPipe, RadiansPipe], exports: [MaxPipe, MinPipe, PercentagePipe, SumPipe, FloorPipe, RoundPipe, SqrtPipe, PowerPipe, CeilPipe, DegreesPipe, BytesPipe, RadiansPipe] }); })();

class IsDefinedPipe {
    transform(input) {
        return !isUndefined(input);
    }
}
IsDefinedPipe.ɵfac = function IsDefinedPipe_Factory(t) { return new (t || IsDefinedPipe)(); };
IsDefinedPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isDefined", type: IsDefinedPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsDefinedPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'isDefined' }]
    }], null, null); })();

class IsNullPipe {
    transform(input) {
        return input === null;
    }
}
IsNullPipe.ɵfac = function IsNullPipe_Factory(t) { return new (t || IsNullPipe)(); };
IsNullPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isNull", type: IsNullPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsNullPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'isNull' }]
    }], null, null); })();

class IsUndefinedPipe {
    transform(input) {
        return isUndefined(input);
    }
}
IsUndefinedPipe.ɵfac = function IsUndefinedPipe_Factory(t) { return new (t || IsUndefinedPipe)(); };
IsUndefinedPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isUndefined", type: IsUndefinedPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsUndefinedPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'isUndefined' }]
    }], null, null); })();

class IsStringPipe {
    transform(input) {
        return isString(input);
    }
}
IsStringPipe.ɵfac = function IsStringPipe_Factory(t) { return new (t || IsStringPipe)(); };
IsStringPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isString", type: IsStringPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsStringPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'isString' }]
    }], null, null); })();

class IsFunctionPipe {
    transform(input) {
        return isFunction(input);
    }
}
IsFunctionPipe.ɵfac = function IsFunctionPipe_Factory(t) { return new (t || IsFunctionPipe)(); };
IsFunctionPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isFunction", type: IsFunctionPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsFunctionPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'isFunction' }]
    }], null, null); })();

class IsNumberPipe {
    transform(input) {
        return isNumber(input);
    }
}
IsNumberPipe.ɵfac = function IsNumberPipe_Factory(t) { return new (t || IsNumberPipe)(); };
IsNumberPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isNumber", type: IsNumberPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsNumberPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'isNumber' }]
    }], null, null); })();

class IsArrayPipe {
    transform(input) {
        return Array.isArray(input);
    }
}
IsArrayPipe.ɵfac = function IsArrayPipe_Factory(t) { return new (t || IsArrayPipe)(); };
IsArrayPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isArray", type: IsArrayPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsArrayPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'isArray' }]
    }], null, null); })();

class IsObjectPipe {
    transform(input) {
        return isObject(input);
    }
}
IsObjectPipe.ɵfac = function IsObjectPipe_Factory(t) { return new (t || IsObjectPipe)(); };
IsObjectPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isObject", type: IsObjectPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsObjectPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'isObject' }]
    }], null, null); })();

class IsGreaterEqualThanPipe {
    transform(input, other) {
        return input >= other;
    }
}
IsGreaterEqualThanPipe.ɵfac = function IsGreaterEqualThanPipe_Factory(t) { return new (t || IsGreaterEqualThanPipe)(); };
IsGreaterEqualThanPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isGreaterEqualThan", type: IsGreaterEqualThanPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsGreaterEqualThanPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'isGreaterEqualThan' }]
    }], null, null); })();

class IsGreaterThanPipe {
    transform(input, other) {
        return input > other;
    }
}
IsGreaterThanPipe.ɵfac = function IsGreaterThanPipe_Factory(t) { return new (t || IsGreaterThanPipe)(); };
IsGreaterThanPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isGreaterThan", type: IsGreaterThanPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsGreaterThanPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'isGreaterThan' }]
    }], null, null); })();

class IsLessEqualThanPipe {
    transform(input, other) {
        return input <= other;
    }
}
IsLessEqualThanPipe.ɵfac = function IsLessEqualThanPipe_Factory(t) { return new (t || IsLessEqualThanPipe)(); };
IsLessEqualThanPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isLessEqualThan", type: IsLessEqualThanPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsLessEqualThanPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'isLessEqualThan' }]
    }], null, null); })();

class IsEqualToPipe {
    transform(input, other) {
        // tslint:disable-next-line:triple-equals
        return input == other;
    }
}
IsEqualToPipe.ɵfac = function IsEqualToPipe_Factory(t) { return new (t || IsEqualToPipe)(); };
IsEqualToPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isEqualTo", type: IsEqualToPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsEqualToPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'isEqualTo' }]
    }], null, null); })();

class IsNotEqualToPipe {
    transform(input, other) {
        // tslint:disable-next-line:triple-equals
        return input != other;
    }
}
IsNotEqualToPipe.ɵfac = function IsNotEqualToPipe_Factory(t) { return new (t || IsNotEqualToPipe)(); };
IsNotEqualToPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isNotEqualTo", type: IsNotEqualToPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsNotEqualToPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'isNotEqualTo' }]
    }], null, null); })();

class IsIdenticalToPipe {
    transform(input, other) {
        return input === other;
    }
}
IsIdenticalToPipe.ɵfac = function IsIdenticalToPipe_Factory(t) { return new (t || IsIdenticalToPipe)(); };
IsIdenticalToPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isIdenticalTo", type: IsIdenticalToPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsIdenticalToPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'isIdenticalTo' }]
    }], null, null); })();

class IsNotIdenticalToPipe {
    transform(input, other) {
        return input !== other;
    }
}
IsNotIdenticalToPipe.ɵfac = function IsNotIdenticalToPipe_Factory(t) { return new (t || IsNotIdenticalToPipe)(); };
IsNotIdenticalToPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isNotIdenticalTo", type: IsNotIdenticalToPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsNotIdenticalToPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'isNotIdenticalTo' }]
    }], null, null); })();

class IsLessThanPipe {
    transform(input, other) {
        return input < other;
    }
}
IsLessThanPipe.ɵfac = function IsLessThanPipe_Factory(t) { return new (t || IsLessThanPipe)(); };
IsLessThanPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isLessThan", type: IsLessThanPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsLessThanPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'isLessThan' }]
    }], null, null); })();

const BOOLEAN_PIPES = [
    IsDefinedPipe,
    IsNullPipe,
    IsUndefinedPipe,
    IsStringPipe,
    IsFunctionPipe,
    IsNumberPipe,
    IsArrayPipe,
    IsObjectPipe,
    IsGreaterEqualThanPipe,
    IsGreaterThanPipe,
    IsLessEqualThanPipe,
    IsLessEqualThanPipe,
    IsEqualToPipe,
    IsNotEqualToPipe,
    IsIdenticalToPipe,
    IsNotIdenticalToPipe,
    IsLessThanPipe,
];
class NgBooleanPipesModule {
}
NgBooleanPipesModule.ɵfac = function NgBooleanPipesModule_Factory(t) { return new (t || NgBooleanPipesModule)(); };
NgBooleanPipesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgBooleanPipesModule });
NgBooleanPipesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgBooleanPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: BOOLEAN_PIPES,
                imports: [],
                exports: BOOLEAN_PIPES
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgBooleanPipesModule, { declarations: [IsDefinedPipe, IsNullPipe, IsUndefinedPipe, IsStringPipe, IsFunctionPipe, IsNumberPipe, IsArrayPipe, IsObjectPipe, IsGreaterEqualThanPipe, IsGreaterThanPipe, IsLessEqualThanPipe, IsLessEqualThanPipe, IsEqualToPipe, IsNotEqualToPipe, IsIdenticalToPipe, IsNotIdenticalToPipe, IsLessThanPipe], exports: [IsDefinedPipe, IsNullPipe, IsUndefinedPipe, IsStringPipe, IsFunctionPipe, IsNumberPipe, IsArrayPipe, IsObjectPipe, IsGreaterEqualThanPipe, IsGreaterThanPipe, IsLessEqualThanPipe, IsLessEqualThanPipe, IsEqualToPipe, IsNotEqualToPipe, IsIdenticalToPipe, IsNotIdenticalToPipe, IsLessThanPipe] }); })();

class TimeAgoPipe {
    /**
     * @param inputDate: Date | Moment - not included as TypeScript interface,
     * in order to keep `ngx-pipes` "pure" from dependencies!
     */
    transform(inputDate) {
        if (!inputDate || (!inputDate.getTime && !inputDate.toDate)) {
            return 'Invalid date';
        }
        const past = inputDate.toDate ? inputDate.toDate() : inputDate.getTime();
        const now = +new Date();
        if (past > now) {
            return 'in the future';
        }
        for (let i = 0, l = TimeAgoPipe.MAPPER.length, ms = now - past, div = TimeAgoPipe.YEAR_MS; i < l; ++i) {
            const elm = TimeAgoPipe.MAPPER[i];
            const unit = Math.floor(ms / (div /= elm.div));
            if (unit >= 1) {
                return unit === 1 ? elm.single : `${unit} ${elm.many} ago`;
            }
        }
        return 'just now';
    }
}
TimeAgoPipe.ɵfac = function TimeAgoPipe_Factory(t) { return new (t || TimeAgoPipe)(); };
TimeAgoPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "timeAgo", type: TimeAgoPipe, pure: true });
TimeAgoPipe.YEAR_MS = 1000 * 60 * 60 * 24 * 7 * 4 * 12;
TimeAgoPipe.MAPPER = [
    { single: 'last year', many: 'years', div: 1 },
    { single: 'last month', many: 'months', div: 12 },
    { single: 'last week', many: 'weeks', div: 4 },
    { single: 'yesterday', many: 'days', div: 7 },
    { single: 'an hour ago', many: 'hours', div: 24 },
    { single: 'just now', many: 'minutes', div: 60 },
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeAgoPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{ name: 'timeAgo' }]
    }], null, null); })();

const DATE_PIPES = [TimeAgoPipe];
class NgDatePipesModule {
}
NgDatePipesModule.ɵfac = function NgDatePipesModule_Factory(t) { return new (t || NgDatePipesModule)(); };
NgDatePipesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgDatePipesModule });
NgDatePipesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDatePipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: DATE_PIPES,
                imports: [],
                exports: DATE_PIPES
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgDatePipesModule, { declarations: [TimeAgoPipe], exports: [TimeAgoPipe] }); })();

class NgPipesModule {
}
NgPipesModule.ɵfac = function NgPipesModule_Factory(t) { return new (t || NgPipesModule)(); };
NgPipesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgPipesModule });
NgPipesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [NgArrayPipesModule, NgStringPipesModule, NgMathPipesModule, NgBooleanPipesModule, NgObjectPipesModule, NgDatePipesModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                exports: [
                    NgArrayPipesModule,
                    NgStringPipesModule,
                    NgMathPipesModule,
                    NgBooleanPipesModule,
                    NgObjectPipesModule,
                    NgDatePipesModule,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgPipesModule, { exports: [NgArrayPipesModule, NgStringPipesModule, NgMathPipesModule, NgBooleanPipesModule, NgObjectPipesModule, NgDatePipesModule] }); })();

/**
 * Generated bundle index. Do not edit.
 */





/***/ })

}]);
//# sourceMappingURL=src_app_pages_newmatch_newmatch_module_ts.js.map