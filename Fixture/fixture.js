//import test class may be we can use allias to give diff name

import{test as base} from '@playwright/test';          // as-> allias(just diff name base)
import { Loginpage } from '../pages/Loginpage.js';       // what fixtute will do , will create the objcet of login page so will import loginpage here
import { DashboardPage } from '../pages/Dashboardpage.js';

// we have to extend the test/base funcationality         // page fixture ,use comes built in which say anything above u setup ,anything after use will be teardown
 
export const test = base.extend({              // inorder to use this fixture we have to export from here

    loginpage:async ({page},use) =>      // here loginpage it just a name whenevet i use this fixture we  use this name only
    {

        console.log('inside loginpage fixture')
        const loginpage =new Loginpage(page)

        // use the fixture value in the test
        await use(loginpage)           //(object)name which we create above use same one
        
    },

     dashboardpage:async ({page},use) =>      // here loginpage it just a name whenevet i use this fixture we  use this name only
    {

        console.log('inside Dashboard fixture')
        const dashboardPage=new DashboardPage(page);

        
        await use(dashboardPage)    //use same object
    },




});