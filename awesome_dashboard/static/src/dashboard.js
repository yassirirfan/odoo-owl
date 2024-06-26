/** @odoo-module **/

import { Component, onWillStart } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { ControlPanel } from "@web/search/control_panel/control_panel";
import { Layout } from "@web/search/layout";
import { useService } from "@web/core/utils/hooks";
import { userService } from "@web/core/user_service";
import {  _t } from "@web/core/l10n/translation";

class DashboardItem extends Component {
    static template = "awesome_dashboard.DashboardItem";
    static props = {
        size: 1
    }
    redirectView(ev){
        console.log('view_name', ev.currentTarget)
    }
}
class AwesomeDashboard extends Component {
    static template = "awesome_dashboard.AwesomeDashboard";
    static components = { Layout, DashboardItem };
    setup() {
        this.action = useService("action");
        this.rpc = useService("rpc");
        this.notificationService = useService("notification");
        onWillStart(async () => {
            const result = await this.rpc("/awesome_dashboard/statistics", {a: 1, b: 2});
            this.data = result
        });
    }
    showNotification() {
        this.notificationService.add(_t("Critical error occurred. Please contact support."), {
            title: "Error",
            type: "danger",
            buttons: [{
                        onClick: () => {
                            this.actionService.doAction(
                                "base_setup.action_general_configuration"
                            );
                            closeFn();
                        },
                        primary: true,
                        name: "Go to Settings",
                    },
            ],
        });
    }
    openSettings() {
        this.action.doAction("base.action_partner_form");
    }
}
registry.category("actions").add("awesome_dashboard.dashboard", AwesomeDashboard);