import * as constants from "../resources/constants";
import LoginPage from '../pages/login.js';
import { Selector } from "testcafe";

const loginPage = new LoginPage();

fixture('Login')
    .page(constants.getLoginPageURL())
    .meta('regression', 'true');


test('Valid Login', async t => {
    console.log("----------- Log in with valid credentials ----------");
    await t.maximizeWindow();
    await t
        .click(loginPage.lang2)
        .click(loginPage.selectEng)
        .typeText(loginPage.customerNumber, constants.getCustomerNumber())
        .typeText(loginPage.email, constants.getValidUserName())
        .typeText(loginPage.password, constants.getValidPassword())
        .click(loginPage.loginButton);


});



test('Invalid Login', async t => {
    console.log("----------- Log in with invalid credentials ----------");
    await t.maximizeWindow();
    await t
        .navigateTo(constants.getLoginPageURL())
        .click(loginPage.lang2)
        .click(loginPage.selectEng)
        .typeText(loginPage.customerNumber, constants.getCustomerNumber())
        .typeText(loginPage.email, constants.getValidUserName())
        .typeText(loginPage.password, constants.getInvalidPassword())
        .click(loginPage.loginButton);

        var errorMsg = await loginPage.errorMessage.innerText;//Selector('#mat-error-9 .ng-star-inserted').innerText;
        
        console.log(errorMsg);
});
