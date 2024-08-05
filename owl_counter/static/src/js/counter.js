/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Component, useState, useEffect, useRef } from "@odoo/owl";
import {useService} from "@web/core/utils/hooks";

export class Counter extends Component {
    static template = "workshop_module.Counter";

    setup() {
        this.state = useState({ value: 1 , product: "Sample"});

        this.orm = useService("orm")
        this.valueRef = useRef("valueRef");
        this.divContainer = useRef("divContainer");

        useEffect((value) => {

            if (value && value < 5) this.divContainer.el.style.background = "green";
            else if (value && value> 5 && value < 10) {
                this.divContainer.el.style.background = "yellow";
                // this.fetchProduct(value);
            }
             else if (value && value > 10) this.divContainer.el.style.background = "red";
        }, () => [this.state.value])

    }

    async fetchProduct(value) {
        const name = await this.orm.read('product.product', [value], ['name']);
        this.state.product =  name[0] ? name[0]?.name : "noProduct";
    }

    async fetchSaleOrder(value) {
        const name = await this.orm.read('sale.order', [value], ['name']);
        this.state.product =  name[0] ? name[0]?.name : "noProduct";
    }

    onChangeInput(event) {
        this.valueRef.el.innerHTML = event.target.value;
    }

    increment() {
        this.state.value += 1 ;
    }

    decrement() {
        if (this.state.value > 0) this.state.value -= 1
        // this.state.value = this.state.value > 0 ? this.state.value - 1: this.state.value;
    }

    handleOnClickParent() {
        console.log("handleOnClickParent", this)
    }

    handleOnClickChild(e) {
        e.stopPropagation();
        console.log("handleOnClickChild", this)
    }

}


registry.category("actions").add("owl_counter.Counter", Counter);
