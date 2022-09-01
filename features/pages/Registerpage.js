const {Selector} = require ('testcafe');

function selector(selector){
    return Selector (selector).with({boundTestRun:testController}) 
    }
    exports.Registerpage={
GenderButton: function(){
    return selector('#gender-male');
},
FirstName : function(){
    return selector('#FirstName');
},

LastName : function(){
    return selector('#LastName');
},

Day: function(){
    return Selector('select[name="DateOfBirthDay"');
},
Month : function(){
return Selector('select[name="DateOfBirthMonth"');
},
Year : function(){
    return Selector('select[name="DateOfBirthYear"');
},
Email : function(){
    return Selector('#Email');
},
Password : function(){
    return Selector('#Password');
},
ConfirmPassword : function(){

    return Selector('#ConfirmPassword');
},
Registerbutton: function(){
    return Selector('#register-button');
},
successfull: function(){
    return Selector('disv.result').withText('Your registration completed');
  },

ListOptions: function(){
 return Selector('option');
}




    }