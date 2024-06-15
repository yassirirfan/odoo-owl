/** @odoo-module **/
import {registry} from "@web/core/registry";
import {Component, useState} from "@odoo/owl";
import {useService} from "@web/core/utils/hooks";

class BusAPI extends Component {
    setup() {
        this.state = useState({
            busVal: false
        })
        this.busService = this.env.services.bus_service
        this.channel = "bust_test_channel"
        this.busService.addChannel(this.channel)
        this.busService.addEventListener("notification", this.onMessage.bind(this))
    }

    onMessage({detail: notifications}) {
        notifications = notifications.filter(item => item.payload.channel === this.channel)
        notifications.forEach(item => {
            this.state.busVal = item.payload.value.data
        })
    }
}

BusTest.template = 'api_bus.apiBus';
registry.category("actions").add("api_bus_menu_action", BusAPI)