require('dotenv').config();
import {Role} from 'testcafe';
import * as constants from "../resources/constants";
import LoginPage from "../pages/login";


const loginPage = new LoginPage();

export const validCredentials = Role(constants.getLoginPageURL(), async t => {
    await t.maximizeWindow();
    await t.typeText(loginPage.customerNumber, constants.getCustomerNumber());
    await t.typeText(loginPage.email, constants.getValidUserName());
    await t.typeText(loginPage.password, constants.getValidPassword());
    await t.click(loginPage.loginButton);
}, { preserveUrl: true });

export const invalidCredentials = Role(constants.getLoginPageURL(), async t => {
   
    await t.typeText(loginPage.customerNumber, constants.getCustomerNumber());
    await t.typeText(loginPage.email, constants.getValidUserName());
    await t.typeText(loginPage.password, constants.getInvalidPassword());
    await t.click(loginPage.loginButton);

}, { preserveUrl: true });

