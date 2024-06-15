from odoo.http import Controller, route, request


class MyController(Controller):

    @route('/my_module/live_data', type='json', auth='none', methods=["POST"], csrf=False)
    def live_data(self):
        data = request.httprequest.get_json()
        channel = "bust_test_channel"
        message = {
            "value": data,
            "channel": channel
        }
        request.env["bus.bus"]._sendone(channel, "notification", message)
        return 1
