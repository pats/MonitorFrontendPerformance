module.exports = {
  run(context) {
    return context.runWithDriver((driver) => {
      
      return driver.get('https://login.pracuj.pl')
        .then(() => {

          driver.sleep(15000);

          const webdriver = context.webdriver;
          const until = webdriver.until;
          const By = webdriver.By;
      
          const userName = 'warsawjs.sitespeed@gmail.com';
          const password = context.options.gp.password;

          driver.findElement(By.css('[data-test="input-email"]')).sendKeys(userName);
          driver.findElement(By.css('[data-test="input-password"]')).sendKeys(password);
          const loginButton = driver.findElement(By.css('[data-test="button-login"]'));
          loginButton.click();
          
        });
    })
  }
};
