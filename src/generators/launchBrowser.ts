import * as puppeteer from 'puppeteer';

const launchBrowser = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  return browser;
}

export {launchBrowser}