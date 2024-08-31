# -*- coding: utf-8 -*-

import logging
import random

from odoo import http
from odoo.http import request

logger = logging.getLogger(__name__)


class AwesomeDashboard(http.Controller):
    @http.route('/dynamic_dashboard/data', type='json', auth='user')
    def get_dynamic_statistics(self, model):
        if model == 'sale.order':
            return request.env[model].search_read(
                [], ['name', 'amount_total', 'partner_id'],
                order='id desc', limit=10)
        return request.env[model].search_read(
            [('amount_total', '>=', 100)],
            ['name', 'amount_total','partner_id'], order='id desc', limit=20)

