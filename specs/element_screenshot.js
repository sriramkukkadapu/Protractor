describe('window handles',function(){

    it('test window handles',function(){

        browser.waitForAngularEnabled(false);
        browser.get('http://demo.automationtesting.in/Register.html');
        
        var ele = element(by.id('imagetrgt'));


        const fs = require('fs'); //get file stream
        ele.takeScreenshot().then(function(element){
            var stream = fs.createWriteStream('./screenshots/element.png');
            stream.write(new Buffer(element,'base64'));
            stream.end();
        })

        browser.sleep(5000);
        
    })
})

