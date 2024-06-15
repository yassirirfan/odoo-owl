# -*- coding: utf-8 -*-
{
    'name': 'Bus Module',
    'version': "1.0",
    'depends': ['base', 'bus'],
    'data': [
        'views/api_bus_action.xml'
    ],
    'assets': {
        'web.assets_backend': [
            "api_bus/static/src/js/apiBus.js",
            "api_bus/static/src/js/apiBus.xml"
        ],
    },
    'license': 'LGPL-3',
    'installable': True,
    'auto_install': False,
    'application': False,
}
