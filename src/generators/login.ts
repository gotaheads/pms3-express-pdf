

const login = async (page: any, username: string, password: string) => {
  console.log('login username: %s, password: %s', username, password)
  const USERNAME_SELECTOR = '#username';
  const PASSWORD_SELECTOR = '#password';
  const BUTTON_SELECTOR = '#loginButton';

  await page.click(USERNAME_SELECTOR);
  await page.keyboard.type(username);
  await page.click(PASSWORD_SELECTOR);
  await page.keyboard.type(password);
  await page.click(BUTTON_SELECTOR);
  await page.waitFor(7*1000);
  //await page.screenshot({path: 'login.png'});
  //await page.close();
  return page;
}

export { login }