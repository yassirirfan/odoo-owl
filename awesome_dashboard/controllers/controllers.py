# -*- coding: utf-8 -*-

import logging
import random

from odoo import http
from odoo.http import request

logger = logging.getLogger(__name__)


class AwesomeDashboard(http.Controller):
    @http.route('/awesome_dashboard/statistics', type='json', auth='user')
    def get_statistics(self):
        def fetch_count(model):
            return request.env[model].search_count([])
        return [
            {'id': 2, 'size': 2, 'title': 'Customers',
             'content': fetch_count('res.partner')},
            {'id': 3, 'size': 1, 'title': 'Leads',
             'content': fetch_count('crm.lead')}
        ]

