/** @odoo-module **/
import { PERIOD_OPTIONS } from "@web/search/utils/dates";

// Convert object to array of key-value pairs
const entries = Object.entries(PERIOD_OPTIONS);

// Define new entries
const newEntries = [];
for (let i = 3; i <= 11; i++) {
    newEntries.push([
        `${i + 1}_months_ago`,
        {
            "id": `${i + 1}_months_ago`,
            "groupNumber": 1,
            "format": "MMMM",
            "plusParam": { "months": -i },
            "granularity": "month"
        }
    ]);
}

// Insert new entries after the third element
entries.splice(3, 0, ...newEntries);

// Clear the original object
Object.keys(PERIOD_OPTIONS).forEach(key => delete PERIOD_OPTIONS[key]);

// Refill the original object while preserving order
entries.forEach(([key, value]) => {
    PERIOD_OPTIONS[key] = value;
});





