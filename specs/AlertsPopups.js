describe('get text',function(){

    it('getText function',function(){

        browser.waitForAngularEnabled(false);
        browser.get('http://demo.automationtesting.in/Alerts.html');
        
        element(by.linkText('Alert with OK & Cancel')).click();

        element(by.buttonText('click the button to display a confirm box')).click();
        browser.sleep(3000);
        browser.switchTo().alert().accept(); //accept the alert
        
        element(by.buttonText('click the button to display a confirm box')).click();
        browser.sleep(3000);
        browser.switchTo().alert().dismiss(); //cancel the alert

        browser.sleep(5000);
        
    })
})

