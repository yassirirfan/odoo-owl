# -*- coding: utf-8 -*-
#############################################################################
#
#    e-Sustavi d.o.o.
#
#    Copyright (C) 2025-TODAY e-Sustavi d.o.o.(<http://www.e-sustavi.hr>).
#    Author: e-Sustavi d.o.o.(<http://www.e-sustavi.hr>)
#
#    You can modify it under the terms of the GNU AFFERO
#    GENERAL PUBLIC LICENSE (AGPL v3), Version 3.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU AFFERO GENERAL PUBLIC LICENSE (AGPL v3) for more details.
#
#    You should have received a copy of the GNU AFFERO GENERAL PUBLIC LICENSE
#    (AGPL v3) along with this program.
#    If not, see <http://www.gnu.org/licenses/>.
#
#############################################################################
{
    "name": "Extended Invoice/Bill Period Filters",
    "version": "16.0.1.0.0",
    "category": "Accounting",
    "summary": "Expands available period filters for invoices and bills in Odoo Accounting.",
    'author': 'e-Sustavi d.o.o.',
    'company': 'e-Sustavi d.o.o.',
    'maintainer': 'e-Sustavi d.o.o.',
    'website': "http://www.e-sustavi.hr",
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
