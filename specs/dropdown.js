describe('dropdown',function(){

    it('drop down test',function(){

        browser.get("http://juliemr.github.io/protractor-demo/");

        element(by.model('first')).sendKeys('5');
        element(by.model('second')).sendKeys('3');


        //selecting dropdown of modulo
        element(by.model('operator')).element(by.css("option[value='MODULO']")).click();
        

        element(by.id('gobutton')).click();
        
        var ele=element(by.css('h2.ng-binding')).getText();
        ele.then(text => {
            console.log("=======>"+text)
        })

        browser.sleep(5000);
        
    })
})