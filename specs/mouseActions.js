describe('get text',function(){

    it('getText function',function(){

        browser.get('https://ng-bootstrap.github.io/#/components/tooltip/examples');
        
        var button = element(by.css('button[ngbtooltip="Tooltip on top"]'))

        browser.actions().mouseMove(button).perform();

        browser.sleep(5000);
        
    })
})

