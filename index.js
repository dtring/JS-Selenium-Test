const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://bidjs.com');
    await driver.sleep(2000);
    await driver.findElement(By.linkText('demo')).click();
    await driver.sleep(2000);
    await driver.wait(until.titleIs('Upcoming Auctions | Demonstration Auctions'), 1000);
    await (await driver.findElement(By.linkText('login'))).click();
    await driver.wait(until.titleIs('Log In | Demonstration Auctions'), 1000);
    await driver.findElement(By.id('identifier')).sendKeys('admin_demo');
    await driver.findElement(By.id('password')).sendKeys('5unSh1ne');
    await (await driver.findElement(By.id('submit'))).click();
    await driver.sleep(2000);

  } finally {
    await driver.quit();
  }
})();