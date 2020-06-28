describe('Protractor Demo App', function(){

    it('should have a title', function()
    {
        browser.get("http://juliemr.github.io/protractor-demo/");
        
        browser.getTitle().then(title => {
            console.log("========>"+title)
        })

        browser.sleep(5000);

        //expect(browser.getTitle()).toEqual("test");
    })

});