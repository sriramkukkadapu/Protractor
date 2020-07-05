var faker = require('faker');

describe('Faker demo', function(){
    
    it('fake data test', function(){

        //browser.waitForAngularEnabled(false);
        browser.get('http://codef0rmer.github.io/angular-dragdrop/#!/#%2F');

        var ele1=element(by.model('list1'));
        var ele2=element(by.model('list2'));

        browser.actions().dragAndDrop(ele1,ele2).perform();

        browser.sleep(5000);

    })
    
})