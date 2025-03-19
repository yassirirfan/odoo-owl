odoo.define('fe_expanded_period_options.custom_helpers', function (require) {
    'use strict';

    // Import the original module using require
    const spreadsheetHelpers = require('@spreadsheet/global_filters/helpers');
    const dates = require("@web/core/l10n/dates");
    const { Domain } = require("@web/core/domain");
    const { DateTime } = luxon;
    const serializeDate = dates.serializeDate;
    const serializeDateTime = dates.serializeDateTime;

    spreadsheetHelpers.getRelativeDateDomain = function (now, offset, rangeType, fieldName, fieldType) {
        let endDate = now.minus({ day: 1 }).endOf("day");
        let startDate = endDate;
        const months = {
            january: 1, february: 2, march: 3, april: 4, may: 5, june: 6,
            july: 7, august: 8, september: 9, october: 10, november: 11, december: 12
        };

        switch (rangeType) {
            case "last_week": {
                const offsetParam = { day: 7 * offset };
                endDate = endDate.plus(offsetParam);
                startDate = now.minus({ day: 7 }).plus(offsetParam);
                break;
            }
            case "last_month": {
                const offsetParam = { day: 30 * offset };
                endDate = endDate.plus(offsetParam);
                startDate = now.minus({ day: 30 }).plus(offsetParam);
                break;
            }
            case "last_three_months": {
                const offsetParam = { day: 90 * offset };
                endDate = endDate.plus(offsetParam);
                startDate = now.minus({ day: 90 }).plus(offsetParam);
                break;
            }
            case "last_six_months": {
                const offsetParam = { day: 180 * offset };
                endDate = endDate.plus(offsetParam);
                startDate = now.minus({ day: 180 }).plus(offsetParam);
                break;
            }
            case "last_year": {
                const offsetParam = { day: 365 * offset };
                endDate = endDate.plus(offsetParam);
                startDate = now.minus({ day: 365 }).plus(offsetParam);
                break;
            }
            case "last_three_years": {
                const offsetParam = { day: 3 * 365 * offset };
                endDate = endDate.plus(offsetParam);
                startDate = now.minus({ day: 3 * 365 }).plus(offsetParam);
                break;
            }
            default:
                // Handle dynamic "month_year" case
                try {
                    const [range, year] = rangeType.split("-"); // Extract month and year
                    if (!isNaN(parseInt(year))){
                        const targetDate = DateTime.fromObject({ month: months[range], year: parseInt(year) });
                        startDate = targetDate.startOf("month");
                        endDate = targetDate.endOf("month");
                    } else{ return undefined; }
                } catch { return undefined; }
        }
        startDate = startDate.startOf("day");

        let leftBound, rightBound;
        if (fieldType === "date") {
            leftBound = serializeDate(startDate);
            rightBound = serializeDate(endDate);
        } else {
            leftBound = serializeDateTime(startDate);
            rightBound = serializeDateTime(endDate);
        }

        return new Domain(["&", [fieldName, ">=", leftBound], [fieldName, "<=", rightBound]]);
    };
});