/** @odoo-module */
import { patch } from "@web/core/utils/patch";
import { KanbanController } from "@web/views/kanban/kanban_controller";
import { useEffect, useState, onMounted, onWillUnmount, onWillStart  } from "@odoo/owl";

patch(KanbanController.prototype, {
    setup() {
        super.setup(...arguments);
        var self = this;
        this.state = useState({current_count: false});
        onMounted(async () => {
            this.intervalId = setInterval(async () => {
                // Fetches the recent count of records in the model.
                var newCount = await self.model.root.fetchCount()
                if (this.state.current_count){
                    // Check if the count fetched during previous interval and current is equal.
                    if (newCount != this.state.current_count){
                        // Reloads the state if there is variation between counts of different intervals.
                        self.model.action.loadState();
                    }
                } else {
                    // Initial assignment of count
                    this.state.current_count = newCount
                }
            }, 15000);
        });
        onWillUnmount(() => {
            // Clears the interval if the component is destroyed.
            clearInterval(this.intervalId);
        });
    },
});