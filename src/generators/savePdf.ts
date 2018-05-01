import {Page} from "puppeteer";

const savePdf = async (page: Page, path: string) => {
  console.log('savePdf path: %s', path);
  await page.pdf({path: path, format: 'A4'});
  //await page.screenshot({path: 'test.png'});
  return page;
}

export { savePdf }