//import puppeteer = require("puppeteer");
import * as puppeteer from 'puppeteer';

const launchBrowser = async () => {
  const browser = await puppeteer.launch({
    headless: true
  });
  return browser;
}

export {launchBrowser}