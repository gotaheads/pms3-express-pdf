import {launchBrowser} from "./launchBrowser";
import {gotoApp} from "./gotoApp";
import {login} from "./login";
import {generateReport} from "./generateReport";
import {savePdf} from "./savePdf";
import {loginUrl, valuationReportByLandlordUrl} from "../pms3Urls";


const generator = async (year: number, landlordNumber: number) => {
  console.log('generator year: %s, landlordNumber: %s', year, landlordNumber);

  const env = process.env;
  const baseUrl = !!env.PMS3_URL?env.PMS3_URL:'http://d361253.u161.fasthit.net/coldfusion/pms3';

  const url = valuationReportByLandlordUrl(year, landlordNumber);

  const path = '/tmp/report.pdf';

  const browser = await launchBrowser();

  const page = await gotoApp(browser, loginUrl);

  await login(page, env.USERNAME, env.PASSWORD);

  const page2 = await generateReport(browser, url);

  await savePdf(page2, path);

  await browser.close();

  return path;
};

export { generator };