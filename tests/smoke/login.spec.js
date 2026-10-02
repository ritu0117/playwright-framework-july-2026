//import {test,expect} from '@playwright/test';

import {expect} from '@playwright/test';  // in fixture will modify the test funcationalty so remove above import test(will not use the test which is coming from playwrigt we will be using our own fixture)

import {test} from '../../Fixture/fixture.js';

//import { Loginpage} from '../../pages/Loginpage.js'; //../.. its two level up , .js

//import { DashboardPage } from '../../pages/Dashboardpage.js';

import userO from '../../testdata/user.json' //user0 object

//here will use describe for group the test and add tag also

test.describe("Login test",{tags:['smoke','login']},()=>
  
  {

  test('login to application', async ({ page, loginpage, dashboardpage }) =>  // here will give the fixture names which is going to use

    {
      await page.goto('/login');

      //creating object of Loginpage class-will keep in fixture file(we can abstract this or hide this)
      //const loginpage =new Loginpage(page); //() in constractor pass page // later on will keep this code inside the fixture


      //console.log(`test data used in this test ${userO.username} and ${userO.password}`);
      await loginpage.loginToApplication(userO.username,userO.password) // abstraction use essisial feature, hiding the backround details // also  use data from json testdata folder user file
      
     //const dashboardPage=new DashboardPage(page);// will keep this line into fixture file

     

     await dashboardpage.clickonmenuIcon();
     await dashboardpage.signoutToApplication();  


    });

  })











