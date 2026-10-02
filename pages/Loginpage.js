import {page} from '@playwright/test';
import { BasePage } from './BasePage.js';         // import baseclass here

//in page will keep locators and action(that comes from base)

            //will use inhertance also use here
export class Loginpage extends BasePage{

    //all the locatore will define into constractor/its called automaticly when we create the object of the class
    
    constructor(page)
    {
      //here also constractor and base class also having constractor, how will call parent class constroctor will use super

       super(page); //called base class constractor

      //will use 'this' keyword so we can start using this page in this class as well
      this.page= page;

      this.usernameField=page.getByPlaceholder("Enter Email")
      this.passwordField=page.getByPlaceholder("Enter Password")
      this.loginButton=page.getByText("Sign in",{exact:true})

      this.newUrlSignUpLink=page.getByText("New user? Signup",{exact:true})//new user sign in also belongs to login page
      
      this.errorMessage=page.locator(".errorMessage") // capturting error messge with diff user
    }

  //Now creating methods which performs action on above locators- one method for each elements
   
   async loginToApplication(username,password)  // one method one action
   {
      //await this.usernameField.fill(username)//old withou bases method used
      await this.type(this.usernameField,username)//use base page: how will consume our own method from basefile , as we are extended the base class  no need to crete object directlt can be use the base class method(type for fill we given name in base) here old:await this.usernameField.fill(username) 
      
      
      //await this.passwordField.fill(password)
      await this.type(this.passwordField,password) //( since  locator/selector belong to this class only will use this here ( ex-passwordField )

      //await this.loginButton.click()
      await this.click(this.loginButton);


   }

   async clickonNewuserSignuplink() // creating another method for new Urlsignin
   {
     //await this.newUrlSignUpLink.click()
     await this.click(this.newUrlSignUpLink)

   }

   async getErrorMessage() // this method to captuting error message
   {
     //return await this.errorMessage.textContent();
       return await this.getText(this.errorMessage);
   }


}