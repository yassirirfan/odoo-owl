/** @odoo-module */
import { ListRenderer } from "@web/views/list/list_renderer";
import { patch } from "@web/core/utils/patch";
import { useRef, useState } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { useBus } from "@web/core/utils/hooks";

patch(ListRenderer.prototype, {
    setup(){
        super.setup();
    },
    // Function for search while clicking "ENTER BUTTON"
    _onKeyPress(ev, name, obj) {
        if (ev.key === "Enter") {
            obj._onClick_search(ev, name);
        }
    },

    // To set the domain for filter and remove the filter
    _getInputValueAndDomain(ev, name) {
        const inputValue = ev.currentTarget.closest('.search-input').querySelector('input[type="text"]').value;
        const Domain = `[("${name}", "child_of", "${inputValue}")]`;
        return { inputValue, Domain };
    },

    // To search fo the filter
    _onClick_search: function(ev, name) {
        const { inputValue, Domain } = this._getInputValueAndDomain(ev, name);
        console.log('this.env.searchModel', this.env.searchModel)
        this.env.searchModel.clearQuery()
        this.env.searchModel.splitAndAddDomain(["&","|",["partner_id","child_of","gem"],["partner_id","child_of","lumb"],["user_id","ilike","mit"]]);
    },

    // To Remove the added filter
    _onClick_remove: function(ev, name) {
        const self = this
        const { inputValue, Domain } = this._getInputValueAndDomain(ev, name);
        this.env.searchModel.facets.forEach(function(facets) {
            if (facets.domain == Domain) {
                self.env.searchModel.deactivateGroup(facets.groupId);
                self.domain = self.domain.filter(dom => dom != facets.domain);
            }
        })
    },
})
