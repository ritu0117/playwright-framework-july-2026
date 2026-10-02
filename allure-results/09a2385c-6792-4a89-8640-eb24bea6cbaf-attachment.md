# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\login.spec.js >> Login test >> login to application
- Location: tests\smoke\login.spec.js:19:7

# Error details

```
TypeError: loginpage.loginToApplication is not a function
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
        - textbox "Enter Email" [ref=e27]
        - textbox "Enter Password" [ref=e28]
        - button "Sign in" [ref=e29] [cursor=pointer]
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
  1  | //import {test,expect} from '@playwright/test';
  2  | 
  3  | import {expect} from '@playwright/test';  // in fixture will modify the test funcationalty so remove above import test(will not use the test which is coming from playwrigt we will be using our own fixture)
  4  | 
  5  | import {test} from '../../Fixture/fixture.js';
  6  | 
  7  | //import { Loginpage} from '../../pages/Loginpage.js'; //../.. its two level up , .js
  8  | 
  9  | //import { DashboardPage } from '../../pages/Dashboardpage.js';
  10 | 
  11 | import userO from '../../testdata/user.json' //user0 object
  12 | 
  13 | //here will use describe for group the test and add tag also
  14 | 
  15 | test.describe("Login test",{tags:['smoke','login']},()=>
  16 |   
  17 |   {
  18 | 
  19 |   test('login to application',async({page},loginpage,dashboardpage)=>   // here will give the fixture names which is going to use
  20 | 
  21 |     {
  22 |       await page.goto('/login');
  23 | 
  24 |       //creating object of Loginpage class-will keep in fixture file(we can abstract this or hide this)
  25 |       //const loginpage =new Loginpage(page); //() in constractor pass page // later on will keep this code inside the fixture
  26 | 
  27 | 
  28 |       //console.log(`test data used in this test ${userO.username} and ${userO.password}`);
> 29 |       await loginpage.loginToApplication(userO.username,userO.password) // abstraction use essisial feature hiding the backround details // also  use data from json testdata folder user file
     |                       ^ TypeError: loginpage.loginToApplication is not a function
  30 |       
  31 |      //const dashboardPage=new DashboardPage(page);// will keep this line into fixture file
  32 | 
  33 |      await dashboardPage.clickonmenuIcon();
  34 |      await dashboardPage.signoutToApplication();
  35 | 
  36 | 
  37 |     });
  38 | 
  39 |   })
  40 | 
  41 | 
  42 | 
  43 | 
  44 | 
  45 | 
  46 | 
  47 | 
  48 | 
  49 | 
  50 | 
  51 | 
```