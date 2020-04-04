export const SAVE_REPORTS = 'sahaya/SAVE_REPORTS';

export function saveReports(report) {
  return {
    type: SAVE_REPORTS,
    payload: {report: report}
  };
}