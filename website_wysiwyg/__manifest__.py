# -*- coding: utf-8 -*-
{
    'name': "Website WYSIWYG",
    'summary': """Starting module for "Discover WYSIWYG" """,
    'description': """Starting module for WYSIWYG""",
    'author': "Yassir Irfan",
    'website': "https://www.odoo.com/",
    'category': 'Tutorials',
    'version': '17.0.1.0.0.1',
    'application': True,
    'installable': True,
    'depends': ['base', 'web'],
    'data': [],
    'assets': {
        'web.assets_frontend': [
            'website_wysiwyg/static/src/js/wysiwyg.js',
        ]
    },
    'license': 'AGPL-3'
}
