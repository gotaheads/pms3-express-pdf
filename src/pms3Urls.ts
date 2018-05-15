
const env = process.env;
const baseUrl = env.PMS3_URL;
const loginUrl = `${baseUrl}/#/login`;
const dashbaordUrl = `${baseUrl}/#/dashboard`;
const valuationsByLandlordUrl = (year: number): string =>
  `${baseUrl}/#/valuations-by-landlord/select/${year}`;
const valuationReportByLandlordUrl = (year: number, landlordNumber: number): string =>
  `${baseUrl}/#/valuation-report-by-landlord/${year}/${landlordNumber}`;
const pms3Params = { year: 2018 };
const setValuationYear= (year: number): number => pms3Params.year = year;
const getValuationYear= (): number => pms3Params.year;

export {
  dashbaordUrl,
  valuationReportByLandlordUrl,
  loginUrl,
  valuationsByLandlordUrl,
  setValuationYear,
  getValuationYear,
}