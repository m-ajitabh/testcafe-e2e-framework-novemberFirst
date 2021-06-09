import { Selector } from 'testcafe';

import Xpath from '../resources/xpath-selector';

const xpath = new Xpath();

export default class CompanyNoPage {
    constructor() {
        this.selectEng = Selector('header a').withText('English');
        this.searchCompanyInput = Selector('#edit-search-block-form--2');
        this.submitSearch = Selector('#edit-submit');
        this.csvNo = xpath('//*[contains(text(),"CVR")]/parent::p/following-sibling::p');//Selector('//div[@class="cvr"]//*[contains(text(),"CVR")]/parent::p/following-sibling::p');
        
    }
}
