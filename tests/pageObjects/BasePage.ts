import { Locator, Page } from "@playwright/test";
export class BasePage{

    private readonly page;
    constructor(page){
        this.page = page;
    }

    async fillInput(locator,text){
        await this.page.fill(locator, text);
    }
   
    async goto(url){
        await this.page.goto(url);
    }

    async clickElement(locator) {
        await this.page.click(locator);
      }
    
    async waitForNavigation() {
        await this.page.waitForNavigation();
    }

    async findElement(locator: string): Promise<Locator> {
        const element = await this.page.locator(locator);
        return element;
    }

    

}