import {test} from '@playwright/test'
import { log } from 'console';

//base page class to be extended by all page objects
export class BasePage
{
   constructor(page)
   {
    this.page=page;

   }
   
   //waits,alter,fill,type,dropdown,handle multiple tabs, capture text and more method can be added here

   async type(selector,text)
   {
    await selector.fill(text)
    console.log(`**** type performed with value ${text}****`);
    
   }


   async click(selector)
   {
    await selector.click()
     console.log(`**** click performed with value ${this.click}****`);
   }

   async navigateToapplication(url)
   {
    await this.page.goto(url);
    console.log(`**** navigateToapplication performed with value ${url}****`);
   }

    async uploadFile(selector,filepaths)
   {
    await selector.setInputFiles(filepaths);
    console.log(`**** uploadFile performed with value ${this.filepaths}****`);
   }


   async getText(selector)
   {
    return await selector.textContent()
     
   }
}