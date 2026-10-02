import { test, expect } from '@playwright/test';
import { Loginpage } from '../../pages/Loginpage.js'; //../.. its two level up , .js
import { DashboardPage } from '../../pages/Dashboardpage.js';
import multiuser from '../../testdata/userall.json' //multiuser object

//here will use the loop (for of -> when work with array, forin-> when work with object)
//here we are working of data parameterzation, data driven test concept
//also add descripe and tag

test.describe("datadriven", { tags: ["smoke", "login"] }, () => {


  for (const user of multiuser)  // User Object Array
  {

    test(`login to application ${user.id}`, async ({ page }) => {
      await page.goto('/login');


      const loginpage = new Loginpage(page);


      console.log(`test data used in this test ${user.username} and ${user.password}`);
      await loginpage.loginToApplication(user.username, user.password)

      //here will use the assersion and validating the error message

      expect(await loginpage.getErrorMessage()).toBe(user.message) //(loginpage.getErrorMessage->actual,toBe(user.message)->expected)



    });

  }
});



