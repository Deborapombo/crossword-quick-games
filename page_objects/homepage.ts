import { Locator, Page } from "@playwright/test";

export class Homepage{
    readonly page: Page;
    readonly title: String;
    readonly agreeButton: Locator;
    readonly playButton: Locator;
    readonly waitForGameToBegin: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = 'Best Daily Quick Crossword - Free Online Game | GameLab';
        this.agreeButton = page.getByRole('button', { name: 'AGREE', exact: true });
        this.playButton = page.getByRole('button', { name: 'Play', exact: true });
    }

    async navigateToHomepage(){
        await this.page.goto('https://www.gamelab.com/games/daily-quick-crossword');
    }

    async clickOnPlayButton(){
        await this.playButton.click();
    }

    async clickOnAgreeButton(){
        await this.agreeButton.click();
    }
}