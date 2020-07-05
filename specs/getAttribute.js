describe('get text',function(){

    it('getText function',function(){

        browser.get('http://juliemr.github.io/protractor-demo/');
        
        var button = element(by.buttonText('Go!')).getAttribute('id')

        button.then(idValue => {
            console.log("======> id value: "+idValue);
        })

        browser.sleep(5000);
        
    })
})

