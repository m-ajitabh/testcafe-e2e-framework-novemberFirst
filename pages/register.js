import {Selector} from 'testcafe';

import Xpath from '../resources/xpath-selector';

const xpath = new Xpath();

export default class RegisterPage {
    constructor() {
        this.lang1 = Selector('a').withText('Registrer nu');
        this.lang2 = Selector('#mat-select-value-3');
        this.selectEng = Selector('#mat-option-3 span').withText('English');
        this.companyReg = Selector('#mat-input-3');
        this.firstName = Selector('#mat-input-4');
        this.lastName = Selector('#mat-input-5');
        this.workEmail = Selector('#mat-input-6');
        this.emailConfirmation = Selector('#mat-input-7');
        this.phone = Selector('#mat-input-8');
        this.checkBox = Selector('#mat-checkbox-2 .mat-checkbox-inner-container');
        this.registerSubmit = Selector('button').withText('Create account');
        
    }
}

