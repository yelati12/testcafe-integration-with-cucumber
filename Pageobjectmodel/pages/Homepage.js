import { Selector,t } from 'testcafe'

class Homepage{
constructor(){

    this.logoutbtn=Selector('a.button');
    this.responseCard = Selector('div#flash');

}

async clickonlogoutbtn(){

    await t
    .click(this.logoutbtn);
}

}

export default new Homepage