/** @odoo-module */

import { patch } from "@web/core/utils/patch";
import { KanbanController } from "@web/views/kanban/kanban_controller";
import { onWillUpdateProps } from "@odoo/owl";

patch(KanbanController.prototype, {
    setup() {
        super.setup(...arguments);
        var self = this;
        console.log(self)
        onWillUpdateProps((nextProps) => console.log('PROPS UPDATED'));
//        if (self.modelName === 'helpdesk.ticket') {
//                setInterval(function () {
//                    console.log("success")
//                    rpc.query({
//                        model: 'helpdesk.ticket',
//                        method: 'search_count',
//                        args: [[]],
//                    }).then(function (currentCount) {
//                        if (previousCount !== undefined && currentCount !== previousCount) {
//                            self.update({}, {reload: true});
//                        }
//                        previousCount = currentCount;
//                    });
//                }, 30000);
//        }
    },
});