
const MonthlyReport = require('./monthly.report.model');

exports.createReport = (report) => {
    return MonthlyReport.create(
        report
    ).then((reportResult) => {
        return reportResult
    }).catch((err) => {
        return err;
    });
};

exports.getAllReports = () => {
    return MonthlyReport.findAll().then((reportResult) => {
        return reportResult;
    }).catch((err) => {
        return err;
    });
};

exports.getMonthReport = (month) => {
    return MonthlyReport.findOne({
        where: {month: month}
    }).then((reportResult) => {
        return reportResult
    }).catch((err) => {
        return err;
    });
};