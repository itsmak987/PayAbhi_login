module.exports = {
    "@tag1":['login-test'],
    'TC1': function (browser){
        browser
        .url('https://dev.connectdotnet.com/Account/Login')
        .maximizeWindow()
        .verify.title('PayAbhi')
        .setValue('#UserName','devadm')
        .setValue('#Password','123456')
        .click('#btn-login')
        .pause('3000')
        
    },
    "@tag2":['login-test'],
    'TC2': function (browser){
        browser
        .url('https://dev.connectdotnet.com/Account/Login')
        .maximizeWindow()
        .verify.title('PayAbhi')
        .setValue('#UserName','devdev')
        .setValue('#Password','123457')
        .click('#btn-login')
        .pause('3000')
       .waitForElementVisible('#Myerror', 3000)
       .assert.containsText('#Myerror', 'Invalid data provided or user does not exist.')
       
        
    },

    'TC3': function (browser){
        browser
        .url('https://dev.connectdotnet.com/Account/Login')
        .maximizeWindow()
        .verify.title('PayAbhi')
        .setValue('#UserName','devdev')
        .setValue('#Password','123456')
        .click('#btn-login')
        .pause('3000')
       .waitForElementVisible('#Myerror', 3000)
       .assert.containsText('#Myerror', 'Invalid data provided or user does not exist.')
    //    .waitForElementVisible('//*[@id="recaptcha-anchor-label"]/text()', 5000)
    //    .assert.containsText('//*[@id="recaptcha-anchor-label"]/text()', "I'm not a robot")
        
       
    },
    'TC4': function (browser){
        browser
        .url('https://dev.connectdotnet.com/Account/Login')
        .maximizeWindow()
        .verify.title('PayAbhi')
        .setValue('#UserName','devadm')
        .setValue('#Password','1239845')
        .click('#btn-login')
        .pause('3000')
       .waitForElementVisible('#Myerror', 3000)
       .assert.containsText('#Myerror', 'Invalid data provided or user does not exist.')
    },

    'TC5': function (browser){
        browser
        .url('https://dev.connectdotnet.com/Account/Login')
        .maximizeWindow()
        .verify.title('PayAbhi')
        .setValue('#UserName','')
        .setValue('#Password','')
        .click('#btn-login')
        .pause('3000')
        
    browser.waitForElementVisible('input[name="UserName"]:invalid', 5000);

    // Verify that the validation message contains the expected text
    browser.expect.element('#UserName:invalid').to.have.attribute('validationmessage').which.contains('This field is mandatory');
    },

    'TC6': function (browser){
        browser
        .url('https://dev.connectdotnet.com/Account/Login')
        .maximizeWindow()
        .verify.title('PayAbhi')
        .setValue('#UserName','')
        .setValue('#Password','123456')
        .click('#btn-login')
        .pause('3000')
        
        browser.waitForElementVisible('input[name="UserName"]:invalid', 5000);

        // Verify that the validation message contains the expected text
        browser.expect.element('#UserName:invalid').to.have.attribute('validationmessage').which.contains('This field is mandatory');
    },

    'TC7': function (browser){
        browser
        .url('https://dev.connectdotnet.com/Account/Login')
        .maximizeWindow()
        .verify.title('PayAbhi')
        .setValue('#UserName','devadm')
        .setValue('#Password','')
        .click('#btn-login')
        .pause('3000')
        
        browser.waitForElementVisible('input[name="Password"]:invalid', 5000);

        // Verify that the validation message contains the expected text
        browser.expect.element('#Password:invalid').to.have.attribute('validationmessage').which.contains('This field is mandatory');
    },
    'TC8': function (browser){
        browser
        .url('https://dev.connectdotnet.com/Account/Login')
        .maximizeWindow()
        
        .execute(function() {
            const usernameInput = document.querySelector('input[name="UserName"]');
            return usernameInput === document.activeElement;
          }, [], function(result) {
            if (result.value === true) {
              console.log('Cursor is in the username field.');
            } else {
              console.log('Cursor is not in the username field.');
            }
          });
       
    },

    'TC10': function (browser){
        browser
        .url('https://dev.connectdotnet.com/Account/Login')
        .maximizeWindow()
        .verify.title('PayAbhi')
        .setValue('#UserName','devadm')
        .setValue('#Password','123456')
        browser.waitForElementPresent('input[type="password"]', 10000, false);

        // Check if the password input field has the 'password' type attribute
        browser.getAttribute('input[type="password"]', 'type', function(result) {
          if (result.value === 'password') {
            console.log('Password field is masked.');
          } else {
            console.log('Password field is not masked.');
          }
        });
        
    }


};