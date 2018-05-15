import {launchBrowser} from "./launchBrowser";
import {gotoApp} from "./gotoApp";
import {login} from "./login";
import {generateReport} from "./generateReport";
import {savePdf} from "./savePdf";
import {loginUrl, valuationReportByLandlordUrl} from "../pms3Urls";


const generator = async (year: number, landlordNumber: number) => {
  console.log('generator year: %s, landlordNumber: %s', year, landlordNumber);

  const env = process.env;

  const url = valuationReportByLandlordUrl(year, landlordNumber);

  const path = `/tmp/valuation-report-${year}-${landlordNumber}.pdf`;

  const browser = await launchBrowser();

  const page = await gotoApp(browser, loginUrl);

  await login(page, env.USERNAME, env.PASSWORD);

  const page2 = await generateReport(browser, url);

  await savePdf(page2, path);

  await browser.close();

  return path;
};

export { generator };