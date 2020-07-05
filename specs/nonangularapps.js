describe('dropdown',function(){

    it('drop down test',function(){

        browser.waitForAngularEnabled(false);
        browser.get('http://demo.automationtesting.in/Datepicker.html');
        
        element(by.id("datepicker1")).click();

        browser.sleep(5000);
        
    })
})