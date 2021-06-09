import { Selector } from 'testcafe';
import RegisterPage from '../pages/register.js';

import CompanyNoPage from '../pages/companyNo.js';
import * as constants from "../resources/constants";


const companyNoPage = new CompanyNoPage();
const registerPage = new RegisterPage();

var  getCustomerNo = "";

fixture `Registration Fixture`
.page(constants.getCustomerNoURL());
test
    .before( async t => {
        await t.maximizeWindow();
        console.log("----------- Before registration, capture the company no ----------");
        await t
            .click(companyNoPage.selectEng)
            .typeText(companyNoPage.searchCompanyInput,'pqrs')
            .click(companyNoPage.submitSearch);
            console.log("--- Company details submitted successfully -----");
            getCustomerNo = await companyNoPage.csvNo.innerText;

            await console.log(getCustomerNo);
    })('Test Register', async t => {
        await t.maximizeWindow();
        console.log("----------- Registration process started ----------");    
    await t
    .navigateTo(constants.getLoginPageURL())
        .click(registerPage.lang1)
        .click(registerPage.lang2)
        .click(registerPage.selectEng)
        .typeText(registerPage.companyReg,getCustomerNo)
        .typeText(registerPage.firstName, 'pqr')
        .typeText(registerPage.lastName, 'pqr')
        .typeText(registerPage.workEmail, 'pqr@pqr.com')
        .typeText(registerPage.emailConfirmation, 'pqr@pqr.com')
        .typeText(registerPage.phone, '1234567890')
        .click(registerPage.checkBox)
        .click(registerPage.registerSubmit);
});