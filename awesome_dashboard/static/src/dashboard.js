/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { ControlPanel } from "@web/search/control_panel/control_panel";
import { Layout } from "@web/search/layout";
import { useService } from "@web/core/utils/hooks";
import { userService } from "@web/core/user_service";

class AwesomeDashboard extends Component {
    static template = "awesome_dashboard.AwesomeDashboard";
    static components = { Layout };
    setup() {
        this.action = useService("action");
        this.notificationService = useService("notification");
    }
    showNotification() {
        this.notificationService.add("Hello", {
            title: "test",
            type: "success"
        })
    }
    openSettings() {
        this.action.doAction("base_setup.action_general_configuration");
    }
}

registry.category("actions").add("awesome_dashboard.dashboard", AwesomeDashboard);
