/** @odoo-module **/
import { registry } from "@web/core/registry";
import { useInputField } from "@web/views/fields/input_field_hook";
import time from 'web.time';

var translation = require('web.translation');
var _t = translation._t;
const { Component,useRef} = owl;

export class DomainSelectorTextField extends Component {
   static template = 'FieldDateMultipleDate';

   setup() {
       super.setup();
       this.input = useRef('inputdate');
       useInputField({ getValue: () => this.props.value || "", refName: "inputdate" });
   }

   _onSelectDateField(ev) {
        var dateFormat = time.getLangDateFormat();
        var dates;

        // Switch statement to format the date format
        switch (true) {
            case dateFormat.includes('MMMM'):
                dates = dateFormat.toLowerCase();
                dateFormat = dates.replace(/mmmm/g, 'MM');
                break;

            case dateFormat.includes('MMM'):
                dates = dateFormat.toLowerCase();
                dateFormat = dates.replace(/mmm/g, 'M');
                break;

            case dateFormat.includes('ddd'):
                dates = dateFormat.toLowerCase();
                dateFormat = dates.replace(/ddd/g, 'DD');
                break;

            default:
                dateFormat = dateFormat.toLowerCase();
                break;
        }

        if (this.input.el) {
            // Assuming this line should update the input value, but the logic seems incorrect
            // It should probably be something like this:
            // this.input.el.value = this.input.el.value.replace(dateFormat, '');
            // Setting up the date picker using jQuery
            $(this.input.el).datepicker({
                multidate: true,
                format: dateFormat,
            }).trigger('focus');
        }
   }
}

registry.category("fields").add("multiple_datepicker", DomainSelectorTextField);