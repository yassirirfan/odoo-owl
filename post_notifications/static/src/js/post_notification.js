/** @odoo-module **/

import { Component } from "@odoo/owl";
import { userService } from "@web/core/user_service";

export class PostItem extends Component {
    setup(){
        this.notificationService = userService("notifications");
    }
    showNotification() {
        this.notificationService.add("Hello", {
            title: "test",
            type: "success"
        })
    }
}
PostItem.template = "post_notifications.PostNotification"
