describe('window handles',function(){

    it('test window handles',function(){

        browser.waitForAngularEnabled(false);
        browser.get('http://demo.automationtesting.in/Windows.html');

        var tabbedBtn = element(by.xpath("//div[@id='Tabbed']//button[@class='btn btn-info']"));
        tabbedBtn.click();

        var windowHandles = browser.getAllWindowHandles();

        windowHandles.then(function(handles) {
            var parentWindow = handles[0]; //current parent window
            var childWindow = handles[1]; //new

            browser.switchTo().window(childWindow);

            browser.getTitle().then(title => {
                console.log("Current window: "+ title);
            })
            
            browser.close(); //closes current window
            browser.switchTo().window(parentWindow);

        })

        browser.getTitle().then(title => {
            console.log("Current window: "+ title);
        })

        browser.sleep(5000);
        
    })
})

