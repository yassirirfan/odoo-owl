# -*- coding: utf-8 -*-
{
    "name": "Extended Invoice/Bill Period Filters",
    "version": "16.0.1.0.0",
    "category": "Accounting",
    "summary": "Expands available period filters for invoices and bills in Odoo Accounting.",
    'author': 'Yassir Irfan',
    "license": "LGPL-3",
    "depends": ["account", "web", "spreadsheet"],
    "data": [
        'views/res_partner_views.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'fe_expanded_period_options/static/src/js/dates.js',
            'fe_expanded_period_options/static/src/js/constants.js',
            'fe_expanded_period_options/static/src/js/helpers.js',
        ]
    },
    "installable": True,
    "application": False,
    "auto_install": False,
}
