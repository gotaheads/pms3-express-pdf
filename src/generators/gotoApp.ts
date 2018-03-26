
const gotoApp = async (browser, baseUrl) => {
  console.log('gotoApp baseUrl: %s', baseUrl);

  const page = await browser.newPage();
  await page.goto(baseUrl);
  //await page.pdf({path: 'base.pdf', format: 'A4'});
  return page;
}

export { gotoApp };