import { TestCaseHookDefinition } from '@cucumber/cucumber';
import {ClientFunction} from'testcafe'
import Homepage from '../pages/Homepage'
import Loginpage from '../pages/Loginpage'

const loginurl='https://the-internet.herokuapp.com/login';
const homeurl= 'https://the-internet.herokuapp.com/secure';

const geturl =ClientFunction(() => window.location.href);

fixture('Home page')
.page(loginurl)
.beforeEach(async t=>{

Loginpage.setUserName('tomsmith');
Loginpage.setpassword('SuperSecretPassword!');
Loginpage.clickonloginbtn();

await t.wait(5000);
});
test('Loading Home page', async t=>{

    await t
    .expect(geturl()).contains(homeurl)
    //.expect(geturl()).contains(homeurl)
    .expect(Homepage.logoutbtn.exists).ok();
  
});

test('Successfully Logout', async t=>{

Homepage.clickonlogoutbtn();
await t
.wait(5000)
.expect(Loginpage.responseCard.innerText).contains('You logged out of the secure area')


});
