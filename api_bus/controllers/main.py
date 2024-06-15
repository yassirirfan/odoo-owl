import json

from odoo.http import Controller, route, request


class ApiBus(Controller):
    @route('/trigger/bus/channel', type='json', auth='none',
           methods=["POST"], csrf=False)
    def trigger_bus_channel(self):
        data = request.httprequest.get_json()
        channel = "bust_test_channel"
        request.env["bus.bus"]._sendone(channel, "notification", {
            "value": data,
            "channel": channel
        })
        return json.dumps({
            'status': 'Success',
            'message': 'Bus triggered'
        })
