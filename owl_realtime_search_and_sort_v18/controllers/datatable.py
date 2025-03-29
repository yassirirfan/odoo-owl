from odoo import http
from odoo.http import request
import json


class DataTableController(http.Controller):
    @http.route('/interactive_data_table/get_products', type='json', auth='user')
    def get_products(self, **kw):
        products = request.env['product.product'].search_read(
            [],
            ['id', 'name', 'list_price', 'qty_available', 'default_code', 'categ_id']
        )

        # Convert categ_id (Many2one) to a proper format
        for product in products:
            if product['categ_id']:
                product['categ_id'] = {
                    'id': product['categ_id'][0],
                    'name': product['categ_id'][1]
                }

        return products