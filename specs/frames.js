describe('frames demo',function(){

    it('function to test frames',function(){

        browser.waitForAngularEnabled(false);
        browser.get('http://demo.automationtesting.in/Frames.html');
      
        browser.sleep(3000);

        browser.switchTo().frame(element(by.xpath("//iframe[@id='singleframe']")).getWebElement());
        //browser.switchTo().frame("SingleFrame");
        
        element(by.xpath("/html/body/section/div/div/div/input")).sendKeys("Test");

        browser.switchTo().defaultContent();

        browser.sleep(5000);
        
    })
})

