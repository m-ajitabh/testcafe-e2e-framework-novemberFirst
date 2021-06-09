require('dotenv').config();

//Environment URLS
const envURL = 'https://app-demo.novemberfirst.com';

const custURL = 'http://datacvr.virk.dk/data/';

export function getEnvironmentURL() {
    return envURL;
}

export function getLoginPageURL() {
    return `${envURL}/#/public`;
}

export function getCustomerNoURL() {
    return `${custURL}`;
}
export function getValidUserName() {
    return "m.ajitabh@gmail.com";
}

export function getValidPassword() {
    return "November1";
}

export function getInvalidPassword() {
    return "12345678";
}

export function getCustomerNumber() {
    return "208101782";
}