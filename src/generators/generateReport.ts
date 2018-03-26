
const generateReport = async (browser, url: string) => {
  console.log('generateReport url: ', url);
  const page = await browser.newPage();
  await page.goto(url, {waitUntil: 'networkidle0'});
  const url2 = await page.evaluate('location.href');
  await page.waitFor(8*1000);
  return page;
}

export { generateReport }