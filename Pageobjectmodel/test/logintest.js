import {ClientFunction} from 'testcafe'
import Homepage from '../pages/Homepage'
import Loginpage from '../pages/Loginpage'

const url = 'https://the-internet.herokuapp.com/login'
const getUrl=ClientFunction(() => window.location.href);

fixture('login Page')
.page(url)
test('Loading login page', async t => {

    await t
    .expect(getUrl()).contains(url)
    .expect(Loginpage.lognbtn.exists).ok();

});

test('Form -Successful Login ',async t =>{

Loginpage.setUserName('tomsmith');
Loginpage.setpassword('SuperSecretPassword!');
Loginpage.clickonloginbtn();
await t.expect(Homepage.responseCard.innerText).contains('You logged into a secure area');

});
test('From - Ivalid Username', async t=>{
Loginpage.setUserName('tom');
Loginpage.setpassword('SuperSecretPassword!');
Loginpage.clickonloginbtn();
await t.expect(Homepage.responseCard.innerText).contains('Your username is invalid');
});

test('From - Invalid password',async t =>{

    Loginpage.setUserName('tomsmith');
    Loginpage.setpassword('SupperSecretPassword');
    Loginpage.clickonloginbtn();
    await t.expect(Homepage.responseCard.innerText).contains('Your password is invalid');

})