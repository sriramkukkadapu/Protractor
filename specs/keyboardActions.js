describe('get text',function(){

    it('getText function',function(){

        browser.get('http://demo.automationtesting.in/Register.html');
        
        element(by.model('FirstName')).sendKeys('Sriram');
        element(by.model('FirstName')).sendKeys(protractor.Key.ENTER);

        browser.sleep(5000);
        
    })
})

