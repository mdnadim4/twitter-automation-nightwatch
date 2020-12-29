module.exports = {
    url: function () {
        return "https://twitter.com";
    },

    elements: {
        email: "input[name='session[username_or_email]']:nth-child(1)",
        password: "input[name='session[password]']:nth-child(1)",
        loginButton: "a[href='/login']",
        username: "input[name='session[username_or_email]']:nth-child(1)",
        errorMessage: "#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div.css-901oao.r-daml9f.r-1qd0xha.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-qvutc0 > span",
        submitLoginButton: "#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div.css-1dbjc4n.r-13qz1uu > form > div > div:nth-child(8) > div > div > span",
    },

    commands: [
        {
            /*
                Test Case-1: Verify the home page
            */
            checkHomePage: function () {
                return this.assert
                    .title("Twitter. It’s what’s happening / Twitter", "Title matched successfully")
                    .assert.elementPresent("@loginButton")
                    .pause(2000);
            },

            /*
                Test Case-2: Verify all input fields visibility
            */
            verifyLoginElements: function () {
                return this.click("@loginButton")
                    .assert.urlEquals("https://twitter.com/login")
                    .assert.visible("@email")
                    .assert.visible("@password")
                    .pause(2000);
            },

            /*
                Test Case-3: Verify login with valid Email & password
            */
            validLoginWithEmail: function () {
                return this.click("@loginButton")
                    .setValue("@email", "qatestnadim@gmail.com")
                    .pause(2000)
                    .setValue("@password", "Qatest1234")
                    .pause(2000)
                    .click("@submitLoginButton")
                    .assert.urlContains("https://twitter.com/home")
                    .pause(2000);
            },

            /*
                Test Case-4: Verify login with valid username & password
            */
            validLoginWithUsername: function () {
                return this.click("@loginButton")
                    .setValue("@username", "qatestnadim")
                    .pause(2000)
                    .setValue("@password", "Qatest1234")
                    .pause(2000)
                    .click("@submitLoginButton")
                    .assert.urlContains("https://twitter.com/home")
                    .pause(2000);
            },

            /*
                Test Case-5: Verify login with invalid email
            */
            loginWithInvalidEmail: function () {
                return this.click("@loginButton")
                    .setValue("@email", "test@gmail.com")
                    .pause(2000)
                    .setValue("@password", "Qatest1234")
                    .pause(2000)
                    .click("@submitLoginButton")
                    .assert.visible("@errorMessage")
                    .pause(2000);
            },

            /*
                Test Case-6: Verify login with invalid password
            */
            loginWithInvalidPassword: function () {
                return this.click("@loginButton")
                    .setValue("@email", "qatestnadim@gmail.com")
                    .pause(2000)
                    .setValue("@password", "test1234")
                    .pause(2000)
                    .click("@submitLoginButton")
                    .assert.visible("@errorMessage")
                    .pause(2000);
            },

            /*
                Test Case-7: Verify the error message
            */
            verifyErrorMessage: function () {
                return this.click("@loginButton")
                    .setValue("@email", "qateststiven@gmail.com")
                    .pause(2000)
                    .setValue("@password", "test1234")
                    .pause(2000)
                    .click("@submitLoginButton")
                    .assert.visible("@errorMessage")
                    .assert.containsText("@errorMessage", "The email and password you entered did not match our records.")
                    .pause(2000);
            },

            /*
                Test Case-8: Verify login with empty data
            */
            verifyLoginWithEmptyData: function () {
                return this.click("@loginButton")
                    .setValue("@email", "")
                    .pause(2000)
                    .setValue("@password", "")
                    .pause(2000)
                    .assert.elementPresent("@submitLoginButton")
                    .click("@submitLoginButton")
                    .assert.attributeEquals("@submitLoginButton", "disabled", null)
                    .pause(2000);
            },
        },
    ],
};
