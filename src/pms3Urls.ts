
const env = process.env;
const baseUrl = env.PMS3_URL;
const loginUrl = `${baseUrl}/#/login`;
const dashbaordUrl = `${baseUrl}/#/dashboard`;
const valuationReportByLandlordUrl = (year: number, landlordNumber: number): string =>
  `${baseUrl}/#/valuation-report-by-landlord/${year}/${landlordNumber}`;

export { dashbaordUrl, valuationReportByLandlordUrl, loginUrl }