import { Selector } from 'testcafe';
import RegisterPage from '../pages/register.js';

import CompanyNoPage from '../pages/companyNo.js';
import * as constants from "../resources/constants";


const companyNoPage = new CompanyNoPage();
const registerPage = new RegisterPage();

var  getCustomerNo = "";

// fixture `Get Customer Number`
//     //.page `http://datacvr.virk.dk/data/`;

//     test.before( async t => {
//     await t
//         .click(companyNoPage.selectEng)
//         .typeText(companyNoPage.searchCompanyInput, 'pqrs')
//         .click('#edit-submit');
//         console.log("--- Company details submitted successfully -----");
//         getCustomerNo = await companyNoPage.csvNo.innerText;

//         await console.log(getCustomerNo);
//        //return getCustomerNo;

// });


// 

// // fixture `Fixture for registeration `
//     //.page `https://app-demo.novemberfirst.com/#/public`
//     //.page `https://app-demo.novemberfirst.com/#/public/signup`;

// test('Test Register', async t => {
//     await t
//     .page `https://app-demo.novemberfirst.com/#/public`
//         .click(registerPage.lang1)
//         .click(registerPage.lang2)
//         .click(registerPage.selectEng)
//         .typeText(registerPage.companyReg,getCustomerNo)
//         .typeText(registerPage.firstName, 'pqr')
//         .typeText(registerPage.lastName, 'pqr')
//         .typeText(registerPage.workEmail, 'pqr@pqr.com')
//         .typeText(registerPage.emailConfirmation, 'pqr@pqr.com')
//         .typeText(registerPage.phone, '1234567890')
//         .click(registerPage.checkBox)
//         .click(registerPage.registerSubmit);
// });

fixture `Registration Fixture`
.page(constants.getCustomerNoURL());
test
    .before( async t => {
        await t
            //.navigateTo('http://datacvr.virk.dk/data/')
            .click(companyNoPage.selectEng)
            .typeText(companyNoPage.searchCompanyInput,'pqrs')
            .click(companyNoPage.submitSearch);
            console.log("--- Company details submitted successfully -----");
            getCustomerNo = await companyNoPage.csvNo.innerText;

            await console.log(getCustomerNo);
    })('Test Register', async t => {
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