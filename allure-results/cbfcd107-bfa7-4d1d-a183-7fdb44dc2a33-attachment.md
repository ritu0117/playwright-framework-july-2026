# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\different_users.spec.js >> datadriven >> login to application 1
- Location: tests\smoke\different_users.spec.js:16:9

# Error details

```
ReferenceError: errorMessage is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6] [cursor=pointer]:
        - img "logo" [ref=e7]
        - heading "Learn Automation Courses" [level=1] [ref=e8]
      - generic [ref=e9]:
        - img "menu" [ref=e10] [cursor=pointer]
        - generic [ref=e11]:
          - generic [ref=e12]:
            - text: Learn Automation Courses
            - img "delete" [ref=e13] [cursor=pointer]
          - generic [ref=e14]:
            - link "Home" [ref=e15] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=e17] [cursor=pointer]:
              - /url: /practise
  - generic [ref=e20]:
    - img "Login" [ref=e22]
    - generic [ref=e23]:
      - generic [ref=e25]:
        - heading "Sign In" [level=2] [ref=e26]
        - textbox "Enter Email" [ref=e27]: admin1212@email.com
        - textbox "Enter Password" [ref=e28]: admin@123
        - button "Sign in" [active] [ref=e29] [cursor=pointer]
        - link "New user? Signup" [ref=e30] [cursor=pointer]:
          - /url: /signup
      - generic [ref=e31]:
        - heading "Connect with us" [level=2] [ref=e32]
        - generic [ref=e33] [cursor=pointer]:
          - link [ref=e34]:
            - /url: https://youtube.com/MukeshOtwani
          - link [ref=e38]:
            - /url: https://twitter.com/MukeshOtwani
          - link [ref=e41]:
            - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
          - link [ref=e44]:
            - /url: https://www.facebook.com/groups/256655817858291
          - link [ref=e47]:
            - /url: https://learn-automation/reddit
  - generic [ref=e62]:
    - generic [ref=e63]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=e64]
      - heading "©2023 All rights reserved" [level=2] [ref=e65]
    - generic [ref=e66] [cursor=pointer]:
      - link [ref=e67]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=e71]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=e74]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=e77]:
        - /url: https://www.facebook.com/groups/256655817858291
```

# Test source

```ts
  1  | import {page} from '@playwright/test';
  2  | import { BasePage } from './BasePage';         // import baseclass here
  3  | 
  4  | //in page will keep locators and action(that comes from base)
  5  | 
  6  |             //will use inhertance also use here
  7  | export class Loginpage extends BasePage{
  8  | 
  9  |     //all the locatore will define into constractor/its called automaticly when we create the object of the class
  10 |     
  11 |     constructor(page)
  12 |     {
  13 |       //here also constractor and base class also having constractor, how will call parent class constroctor will use super
  14 | 
  15 |        super(page); //called base class constractor
  16 | 
  17 |       //will use 'this' keyword so we can start using this page in this class as well
  18 |       this.page= page;
  19 | 
  20 |       this.usernameField=page.getByPlaceholder("Enter Email")
  21 |       this.passwordField=page.getByPlaceholder("Enter Password")
  22 |       this.loginButton=page.getByText("Sign in",{exact:true})
  23 | 
  24 |       this.newUrlSignUpLink=page.getByText("New user? Signup",{exact:true})//new user sign in also belongs to login page
  25 |       
  26 |       this.errorMessage=page.locator(".errorMessage") // capturting error messge with diff user
  27 |     }
  28 | 
  29 |   //Now creating methods which performs action on above locators- one method for each elements
  30 |    
  31 |    async loginToApplication(username,password)  // one method one action
  32 |    {
  33 |       //await this.usernameField.fill(username)//old withou bases method used
  34 |       await this.type(this.usernameField,username)//use base page: how will consume our own method from basefile , as we are extended the base class  no need to crete object directlt can be use the base class method(type for fill we given name in base) here old:await this.usernameField.fill(username) 
  35 |       
  36 |       
  37 |       //await this.passwordField.fill(password)
  38 |       await this.type(this.passwordField,password) //( since  locator/selector belong to this class only will use this here ( ex-passwordField )
  39 | 
  40 |       //await this.loginButton.click()
  41 |       await this.click(this.loginButton);
  42 | 
  43 | 
  44 |    }
  45 | 
  46 |    async clickonNewuserSignuplink() // creating another method for new Urlsignin
  47 |    {
  48 |      //await this.newUrlSignUpLink.click()
  49 |      await this.click(this.newUrlSignUpLink)
  50 | 
  51 |    }
  52 | 
  53 |    async getErrorMessage() // this method to captuting error message
  54 |    {
  55 |      //return await this.errorMessage.textContent();
> 56 |        return await this.getText(errorMessage);
     |                                  ^ ReferenceError: errorMessage is not defined
  57 |    }
  58 | 
  59 | 
  60 | }
```