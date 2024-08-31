/** @odoo-module **/

import { Component, onWillStart, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { ControlPanel } from "@web/search/control_panel/control_panel";
import { Layout } from "@web/search/layout";
import { useService } from "@web/core/utils/hooks";
import { userService } from "@web/core/user_service";
import {  _t } from "@web/core/l10n/translation";

class ListItem extends Component {
    static template = "dynamic_dashboard.ListItem";
    static props = {
       data: { type: Object },
    }
}

class SearchBar extends Component {
    static template = "dynamic_dashboard.SearchBar";
        setup() {
        this.state = useState({ searchTerm: "" });
    }

    onInput(event) {
        console.log('AAAAAAAAAAAAAAAAAAA')
    }
}

class List extends Component {
    static template = "dynamic_dashboard.List";
    static components = { Layout, SearchBar, ListItem };
    static props = {
        position: { type: String, optional: true },
        model: { type: String, optional: true },
    }
    setup() {
        this.rpc = useService("rpc");
        this.state = useState({
            searchTerm: "",
            data: [],
            filteredData: []
        });
        onWillStart(async () => {
            const result = await this.rpc("/dynamic_dashboard/data", { model: this.props.model });
            this.state.data = result;
            this.state.filteredData = result;
        });
    }

    onSearch(searchTerm) {
        this.state.filteredData = this.state.data.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.partner_id[1].toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
}

class DynamicDashboard extends Component {
    static template = "dynamic_dashboard.Container";
    static components = { Layout, List };
    setup() {
        this.action = useService("action");
        this.rpc = useService("rpc");
//        this.notificationService = useService("notification");
    }
}
registry.category("actions").add("dynamic_dashboard.dashboard", DynamicDashboard);