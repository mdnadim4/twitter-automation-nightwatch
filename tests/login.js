module.exports = {
    "@tags": ["login"],

    "Test Case 1: Go to Twitter Home page": (browser) => {
        let page = browser.page.loginObject();

        page.navigate()
            .checkHomePage()
            .saveScreenshot("./screenshots/" + "Twitter-Homepage.png")
            .end();
    },

    "Test Case 2: Go to login page & check element": (browser) => {
        let page = browser.page.loginObject();

        page.navigate()
            .verifyLoginElements()
            .saveScreenshot("./screenshots/" + "Login-page.png")
            .end();
    },

    "Test Case 3: Verify login with valid email": (browser) => {
        let page = browser.page.loginObject();

        page.navigate()
            .validLoginWithEmail()
            .saveScreenshot("./screenshots/" + "Profile1.png")
            .end();
    },

    "Test Case 4: Verify login with valid username": (browser) => {
        let page = browser.page.loginObject();

        page.navigate()
            .validLoginWithUsername()
            .saveScreenshot("./screenshots/" + "Profile2.png")
            .end();
    },

    "Test Case 5: Verify login with invalid email": (browser) => {
        let page = browser.page.loginObject();

        page.navigate()
            .loginWithInvalidEmail()
            .saveScreenshot("./screenshots/" + "Invalid-Email.png")
            .end();
    },

    "Test Case 6: Verify login with invalid password": (browser) => {
        let page = browser.page.loginObject();

        page.navigate()
            .loginWithInvalidPassword()
            .saveScreenshot("./screenshots/" + "Invalid-Password.png")
            .end();
    },

    "Test Case 7: Verify the Error Message": (browser) => {
        let page = browser.page.loginObject();

        page.navigate()
            .verifyErrorMessage()
            .saveScreenshot("./screenshots/" + "Error-Message.png")
            .end();
    },

    "Test Case 8: Verify login with empty data": (browser) => {
        
        let page = browser.page.loginObject();

        page.navigate()
            .verifyLoginWithEmptyData()
            .saveScreenshot("./screenshots/" + "Empty-Data.png")
            .end();
    },
};
