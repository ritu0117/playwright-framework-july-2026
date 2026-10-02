# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\different_users.spec.js >> datadriven >> login to application 2
- Location: tests\smoke\different_users.spec.js:16:9

# Error details

```
Error: page.goto: net::ERR_ABORTED at https://freelance-learn-automation.vercel.app/login
Call log:
  - navigating to "https://freelance-learn-automation.vercel.app/login", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { Loginpage } from '../../pages/Loginpage.js'; //../.. its two level up , .js
  3  | import { DashboardPage } from '../../pages/Dashboardpage.js';
  4  | import multiuser from '../../testdata/userall.json' //multiuser object
  5  | 
  6  | //here will use the loop (for of -> when work with array, forin-> when work with object)
  7  | //here we are working of data parameterzation, data driven test concept
  8  | //also add descripe and tag
  9  | 
  10 | test.describe("datadriven", { tags: ["smoke", "login"] }, () => {
  11 | 
  12 | 
  13 |   for (const user of multiuser)  // User Object Array
  14 |   {
  15 | 
  16 |     test(`login to application ${user.id}`, async ({ page }) => {
> 17 |       await page.goto('/login');
     |                  ^ Error: page.goto: net::ERR_ABORTED at https://freelance-learn-automation.vercel.app/login
  18 | 
  19 | 
  20 |       const loginpage = new Loginpage(page);
  21 | 
  22 | 
  23 |       console.log(`test data used in this test ${user.username} and ${user.password}`);
  24 |       await loginpage.loginToApplication(user.username, user.password)
  25 | 
  26 |       //here will use the assersion and validating the error message
  27 | 
  28 |       expect(await loginpage.getErrorMessage()).toBe(user.message) //(loginpage.getErrorMessage->actual,toBe(user.message)->expected)
  29 | 
  30 | 
  31 | 
  32 |     });
  33 | 
  34 |   }
  35 | });
  36 | 
  37 | 
  38 | 
  39 | 
```