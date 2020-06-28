describe('calculator demo',function(){

    it('test calculator',function(){

        browser.get("http://juliemr.github.io/protractor-demo/");

        element(by.model('first')).sendKeys('2');
        element(by.model('second')).sendKeys('3');
        element(by.css('[ng-click="doAddition()"]')).click();
        
        var ele=element(by.css('h2.ng-binding')).getText();
        ele.then(text => {
            console.log("=======>"+text)
        })

        browser.sleep(5000);
        
    })
})