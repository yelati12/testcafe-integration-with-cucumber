
import {Selector} from 'testcafe';


fixture `getting started`
 .page `http://devexpress.github.io/testcafe/example`;

test('my first test', async t => {
    await t

    .typeText('#developer-name' , 'John Smith')
    
    //.click('#submit-button')
 //const artivleHeader = await Selector ('.result-content').find('h1')
//let headerText = await artivleHeader.innerText
//.expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');

});

test('Select the checkbox', async t=> {
await t

.click('#remote-testing')
console.log(" The given check box is selected");

const n=5;
for(let i=1;i<=n;i++){
    console.log('ilove java');
}
});


