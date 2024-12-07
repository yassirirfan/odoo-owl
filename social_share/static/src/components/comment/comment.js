/** @odoo-module **/

import { Component, useRef, onWillStart } from "@odoo/owl";
import { registry } from "@web/core/registry";

export class Comments extends Component {
    static template = "social_share.Comments";
    setup() {
        this.commentsSection = useRef("comments-section-ref");
    }
}