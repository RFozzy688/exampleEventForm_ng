"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const repository_model_1 = require("./repository.model");
const product_model_1 = require("./product.model");
const form_model_1 = require("./form.model");
let ProductComponent = class ProductComponent {
    constructor() {
        this.model = new repository_model_1.Model();
        this.form = new form_model_1.ProductFormGroup();
        this.newProduct = new product_model_1.Product();
        //   getValidationMessages(state: any, thingName?: string) {
        //     let thing: string = state.path || thingName;
        //     let messages: string[] = [];
        //     if (state.errors) {
        //       for (let errorName in state.errors) {
        //         switch (errorName) {
        //           case "required":
        //             messages.push(`You must enter a ${thing}`);
        //             break;
        //           case "minlength":
        //             messages.push(`A ${thing} must be at least
        //                             ${state.errors["minlength"].requiredLength}
        //                             characters`);
        //             break;
        //           case "pattern":
        //             messages.push(`The ${thing} contains illegal characters`);
        //             break;
        //         }
        //       }
        //     }
        //     return messages;
        //   }
        this.formSubmitted = false;
    }
    getProduct(key) {
        return this.model.getProduct(key);
    }
    getProducts() {
        return this.model.getProducts();
    }
    getSelected(product) {
        return product.name == this.selectedProduct;
    }
    get jsonProduct() {
        return JSON.stringify(this.newProduct);
    }
    addProduct(p) {
        console.log("New Product: " + this.jsonProduct);
    }
    submitForm(form) {
        this.formSubmitted = true;
        if (form.valid) {
            this.addProduct(this.newProduct);
            this.newProduct = new product_model_1.Product();
            form.reset();
            this.formSubmitted = false;
        }
    }
};
ProductComponent = __decorate([
    core_1.Component({
        selector: "app",
        templateUrl: "app/template.html",
    }), 
    __metadata('design:paramtypes', [])
], ProductComponent);
exports.ProductComponent = ProductComponent;
