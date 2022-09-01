import {Selector, t} from 'testcafe'

class Loginpage{
constructor(){

    this.usernameinput = Selector('input#username');
    this.passowrdinput = Selector('#password');
    this.lognbtn=Selector('button');
    this.responseCard = Selector('div#flash');

}
async setUserName(UserName){
    await t
    .typeText(this.usernameinput, UserName)
    }
async setpassword(password){
    await t.typeText(this.passowrdinput, password)
}
async clickonloginbtn(){

    await t
    .click(this.lognbtn);
}

}

export default new Loginpage