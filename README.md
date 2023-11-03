# Crosswords Quick Game Test Automation

The scope of this project is to do a e2e automated test to crossword quick game using Playwright framework. 

## Installation
To run the tests, you will need to have Node.js installed:

### Install Node.js on Mac OS
Make sure you have homebrew on your Mac OS (a package manager for Mac OS) and run:
```
brew install node

```
### Install Node.js on Linux
```
sudo apt install nodejs

```
### Install Node.js on Windows

Download Node.js Installer from: https://nodejs.org/en/download/

## Setup

To run the project some dependencies are needed, to install them you need to run: 

```
npm install package.json
```

Install Playwright supported browsers: 

```
npx playwright install
```

## Run the tests
To run the tests you just need to run one of the following commands inside crossword-quick-game folder:

### Run the tests without opening the browser
```
npx playwright test tests/quick_game.spec.ts --project=chromium
```

### Run the tests opening the browser
```
npx playwright test tests/quick_game.spec.ts --project=chromium
```

## Test Suites

The project is covering 1 e2e scenario :

- Crossword Quick Game
    ✓ Go to Crossword Quick Game -> https://www.gamelab.com/games/daily-quick-crossword 
    ✓ Click on Play Game
    ✓ Wait for Advertisemnt to finish
    ✓ Choose game corresponding to the current date 
    ✓ Reveal the game to quickly finish the game, and verify score 
    ✓ Take a screenshot to the corresponding score
    ✓ Quit game and Restart another game
   
## Reports
In this project you will have 2 ways to check the test results: 

1. A Report is displayed in the console where you run the tests. 
   The output will show the Test name. It will show how many tests runned, the number of sucessfull and failure tests, as well the total time. In case of failure will show where is the failure.

2. Also a complete HTML report will be generated after each run. This report will contain screenshots, videos and a stack trace. To open the last report run:
    ```
    npx playwright test tests/quick_game.spec.ts --project=chromium
    ```

3. There is a screenshot storage folder of the puzzle completion screen. 
