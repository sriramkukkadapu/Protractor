describe('get text',function(){

    it('getText function',function(){

        browser.get('http://juliemr.github.io/protractor-demo/');
        
        var textEle=element(by.css("h3")).getText();
        textEle.then(text => {
            console.log("=======>"+text);
        })

        browser.sleep(5000);
        
    })
})

