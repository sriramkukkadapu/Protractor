describe('window handles',function(){

    it('test window handles',function(){

        browser.waitForAngularEnabled(false);
        browser.get('http://demo.automationtesting.in/Windows.html');

        const fs = require('fs'); //get file stream
        browser.takeScreenshot().then(function(page){
            var stream = fs.createWriteStream('./screenshots/page.png');
            stream.write(new Buffer(page,'base64'));
            stream.end();
        })

        browser.sleep(5000);
        
    })
})

