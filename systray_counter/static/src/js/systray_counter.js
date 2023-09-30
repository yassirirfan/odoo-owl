/** @odoo-module **/
import {registry} from '@web/core/registry';
const {Component, useState} = owl
class Systray_Counter extends Component {
    setup(){
        this.state = useState({
            value: 0
        })
    }
    onChangeValue(val){
        this.state.value += val
    }
}
Systray_Counter.template='Systray_Counter_template'
const Systray={
 Component: Systray_Counter,
}
registry.category("systray" ).add("Systray_Counter",Systray)

