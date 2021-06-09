import {Selector} from 'testcafe';
import Xpath from '../resources/xpath-selector';

const xpath = new Xpath();
export default class LoginPage {
    constructor() {
        this.lang2 = Selector('#mat-select-value-1');
        this.selectEng = Selector('#mat-option-1 span').withText('English');
        this.customerNumber = Selector('#mat-input-0');
        this.email = Selector('#mat-input-1');
        this.password = Selector('#mat-input-2');
        this.loginButton = xpath('//button[@class="btn btn-primary btn-center"]');//Selector('//button[@class="btn btn-primary btn-center"]');
        
        //console.log(this.loginButton);
        this.successMessage = Selector('.subheader').withText('Secure Area');

        //this.logoutButton = Selector('button').withText('Logout');
        this.errorMessage = xpath('//*[@role="alert"]//*[@class="ng-star-inserted"]');//Selector('//*[@role="alert"]//*[@class="ng-star-inserted"]');

        this.resetPassword = xpath('//a[@href="/#/public/forgot-password"]');//Selector('//a[@href="/#/public/forgot-password"]');

        this.forgetPassword = xpath('//a[@href="#/public/forgot-password"]');//Selector('//a[@href="#/public/forgot-password"]');
    }
}

