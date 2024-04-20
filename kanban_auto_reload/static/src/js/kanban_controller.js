/** @odoo-module */

import { patch } from "@web/core/utils/patch";
import { KanbanController } from "@web/views/kanban/kanban_controller";
import { useEffect, useState, onMounted, onWillUnmount, onWillStart  } from "@odoo/owl";
var intervalId;
patch(KanbanController.prototype, {
    setup() {
        super.setup(...arguments);
        var self = this;
        this.state = useState({current_count: false});
        onMounted(async () => {
            this.intervalId = setInterval(async () => {
                var newCount = await self.model.root.fetchCount()
                if (this.state.current_count){
                    if (newCount != this.state.current_count){
                        self.model.action.loadState();
                    }
                } else {
                    this.state.current_count = newCount
                }
            }, 5000);
        });
        onWillUnmount(() => {
            clearInterval(this.intervalId);
        });
    },
});