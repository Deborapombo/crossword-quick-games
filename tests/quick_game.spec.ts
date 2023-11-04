import { test, expect } from '@playwright/test';
import { Homepage } from '../page_objects/homepage';
import { Game } from '../page_objects/game';
import { DateHelper } from '../helpers/date_helper';

test.beforeEach(async ({ page }) => {
    const homepage = new Homepage(page);
    homepage.navigateToHomepage();
})

test.describe('Crosswords - Quick game', ()=>{
    test('Complete a game and submit the score ', async ({ page }) => {     
        test.setTimeout( 2 * 60 * 1000);   
        const homepage = new Homepage(page);
        const game_page = new Game(page);
        const date = new DateHelper();
        await expect(page).toHaveTitle(homepage.title.toString());

        await homepage.clickOnAgreeButton();
        await homepage.clickOnPlayButton();

        await game_page.waitForGameToBegin.waitFor({state: "hidden"});

        await game_page.clickOnDailyGame();
        await expect(game_page.dailyGameDatIsCorrect).toBeTruthy();
        await game_page.clickOnRevealButton();
        await game_page.clickOnRevealPuzzleButton();  
        await expect(game_page.puzzleScore).toBeVisible();
        await page.screenshot({ path: 'screenshots/screenshot_'+await date.getCurrentDateTime()+'.png', fullPage: true });
        await game_page.clickOnSubmitScoreButton();

        await game_page.clickOnPlayAgainButton();
        expect(homepage.playButton).toBeVisible();
      });
      
});

