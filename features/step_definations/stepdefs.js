const assert = require ('assert');
const {Given, When, Then} = require ('@cucumber/cucumber')
const registerpage =require ('../pages/Registerpage');

const URL ="https://demo.nopcommerce.com/register";

Given('I open the registration page', async function () {    
    await testController.navigateTo(URL);
  });


  When('I select the gender', async function () {
await testController.click(registerpage.Registerpage.GenderButton());

  });

  When('I enter First Name {string}',async function (firstname) {
await testController
.typeText(registerpage.Registerpage.FirstName(),firstname);

  });


  When('I enter Last Name {string}', async function (lastname) {
    await testController
    .typeText(registerpage.Registerpage.LastName(),lastname);

  });
  When('I select Date of Birthday {string}', async function (day) {
    
    await testController.click(registerpage.Registerpage.Day());
    await testController.click(registerpage.Registerpage.ListOptions().withText(day));
  });
  When('I select Month of Birthday {string}', async function (month) {
   await testController.click(registerpage.Registerpage.Month());
   await testController.click(registerpage.Registerpage.ListOptions().withText(month));
});
  When('I select Year Of Birth {string}',async function (year) {
   await testController.click(registerpage.Registerpage.Year());
   await testController.click(registerpage.Registerpage.ListOptions().withText(year));
  });

  When('I enter Email {string}', async function (email) {
    await testController.typeText(registerpage.Registerpage.Email(),email)
  });

  When('I enter Password {string}', async function (password) {

    await testController.typeText(registerpage.Registerpage.Password(),password);
   
  });

  When('I enter Confirm Passowrd {string}', async function (password) {
    await testController.typeText(registerpage.Registerpage.ConfirmPassword(),password);
  });

  When('I click register button', async function () {
    await testController.click(registerpage.Registerpage.Registerbutton());
  });

  Then('successfull messgae is displayed',async function () {
    await testController.expect(registerpage.Registerpage.successfull().exists).ok;

  });




