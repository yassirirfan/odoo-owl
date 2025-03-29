/** @odoo-module **/

import { Component } from "@odoo/owl";

export class FilterDropdown extends Component {
    setup() {
        // Inherited from parent component
    }

    onTextFilterChange(event) {
        this.props.updateTextFilter(this.props.field, event.target.value);
    }

    onMinRangeChange(event) {
        this.props.updateRangeFilter(this.props.field, 'min', event.target.value);
    }

    onMaxRangeChange(event) {
        this.props.updateRangeFilter(this.props.field, 'max', event.target.value);
    }
}

FilterDropdown.template = 'interactive_data_table.FilterDropdown';
FilterDropdown.props = {
    type: String,
    field: String,
    value: [String, Object],
    updateTextFilter: Function,
    updateRangeFilter: Function,
};
