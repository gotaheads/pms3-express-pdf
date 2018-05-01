import {Browser} from "puppeteer";

const gotoApp = async (browser: Browser, baseUrl: string) => {
  console.log('gotoApp baseUrl: %s', baseUrl);

  const page = await browser.newPage();
  await page.goto(baseUrl);
  //await page.pdf({path: 'base.pdf', format: 'A4'});
  return page;
}

export { gotoApp };