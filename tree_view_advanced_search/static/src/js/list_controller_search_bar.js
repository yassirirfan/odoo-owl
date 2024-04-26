/** @odoo-module */
import { ListController } from "@web/views/list/list_controller";
import { patch } from "@web/core/utils/patch";
import { onWillUpdateProps } from "@odoo/owl";

const originalGetModelParams = ListController.modelParams;
patch(ListController.prototype, {
    setup() {
        super.setup();
        onWillUpdateProps((np) => console.log('PROPS UPDATED', np.domain));
    },

})
