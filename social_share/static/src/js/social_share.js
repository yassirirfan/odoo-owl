/** @odoo-module **/

import { Component, useRef, onWillStart } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { Comments } from "../components/comment/comment";
//import { Layout } from "@web/search/layout";
import { useService } from "@web/core/utils/hooks";
//import { userService } from "@web/core/user_service";
//import {  _t } from "@web/core/l10n/translation";

class SocialShare extends Component {
    static template = "social_share.Container";
    static components = { Comments };
    setup() {
        this.commentInputRef = useRef("comment-input-ref");
        this.orm = useService("orm")
    }
    toggleComments(){
       console.log(this.commentsSection)
       this.commentsSection.el.classList.toggle('d-none');
    }
    async addComment(ev){
        ev.preventDefault();
        console.log('this', this)
        await this.orm.call("social.share.comment", "create", [{ comment: 'TEST' }]),
        console.log('HELLOO')
    }
}
registry.category("actions").add("social_share.container", SocialShare);