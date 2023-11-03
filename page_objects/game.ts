import { Locator, Page } from "@playwright/test";

export class Game{
    readonly page: Page;
    readonly dailyGameButton: Locator;
    readonly waitForGameToBegin: Locator;
    dailyGameDate: Locator;
    readonly revealButton: Locator;
    readonly revealPuzzleButton: Locator;
    readonly puzzleScore: Locator;
    readonly submitScoreButton: Locator;
    readonly playAgainButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dailyGameButton = page.frameLocator('iframe[title="canvas box"]').locator('li').filter({ hasText: 'Daily Bonus+50 PTSPLAY' }).locator('div').nth(1);
        this.waitForGameToBegin = page.getByText('Your game will begin in ');
        this.revealButton = page.frameLocator('iframe[title="canvas box"]').getByRole('button', { name: 'Reveal' });
        this.revealPuzzleButton = page.frameLocator('iframe[title="canvas box"]').getByRole('listitem').filter({ hasText: 'Reveal puzzle' });
        this.puzzleScore = page.frameLocator('iframe[title="canvas box"]').getByText(/^Puzzle Score50$/);
        this.submitScoreButton = page.frameLocator('iframe[title="canvas box"]').getByRole('button', { name: 'Submit Total Score' });
        this.playAgainButton = page.getByRole('button', { name: 'Play Again' });
    }

    async clickOnDailyGame(){
        await this.dailyGameButton.click();
    }

    async dailyGameDatIsCorrect(currentDay, currentMonth){
        this.dailyGameDate = this.page.frameLocator('iframe[title="canvas box"]').getByText('Daily Quick Crossword: '+ currentDay +' ' + currentMonth + ' 2023By Michael Curl');
        return this.dailyGameDate.isVisible();
    }

    async clickOnRevealButton(){
        await this.revealButton.click();
    }

    async clickOnRevealPuzzleButton(){
        await this.revealPuzzleButton.click();
    }

    async clickOnSubmitScoreButton(){
        await this.submitScoreButton.click();
    }

    async clickOnPlayAgainButton(){
        await this.playAgainButton.click();
    }
}
