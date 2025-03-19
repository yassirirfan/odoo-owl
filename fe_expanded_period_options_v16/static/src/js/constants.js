/** @odoo-module **/
import { RELATIVE_DATE_RANGE_TYPES } from "@spreadsheet/helpers/constants";
import { _lt } from "@web/core/l10n/translation";

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const today = new Date();

for (let i = 0; i < 12; i++) {
    let date = new Date(today.getFullYear(), today.getMonth() - i, 1);
    let year = date.getFullYear();
    let month = months[date.getMonth()];

    RELATIVE_DATE_RANGE_TYPES.push({
        type: `${month.toLowerCase()}-${year}`,
        description: _lt(`${month} ${year}`)
    });
}
