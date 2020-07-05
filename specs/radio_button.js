describe('radio button demo',function(){

    it('test radio button',function(){

        browser.get("https://material.angularjs.org/latest/demo/radioButton");

        var radioButton = element(by.xpath("//md-radio-button[@value='Mango']"));
        radioButton.click();
        
        //this is for a normal input type radio button
        radioButton.isSelected().then(selected => {
            console.log("=======> Is Radio button selected: ",selected);
        })
        
        //expect(radioButton.isSelected()).toBe(true);
        
        //this is for ng-model radio button for angular js apps
        expect(radioButton.getAttribute('aria-checked')).toEqual('true');

        browser.sleep(5000);
        
    })
})