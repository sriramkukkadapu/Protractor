describe('get text',function(){

    it('getText function',function(){

        browser.get('http://juliemr.github.io/protractor-demo/');
        
        browser.getCurrentUrl().then(url => {
            console.log("=======> "+url)
        });

        browser.sleep(5000);
        
    })
})

