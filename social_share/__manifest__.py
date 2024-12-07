# -*- coding: utf-8 -*-
{
    'name': "Social Share",

    'summary': """
        Starting module for "Discover the JS framework, chapter 2: Build a dashboard"
    """,

    'description': """
        Starting module for "Discover the JS framework, chapter 2: Build a dashboard"
    """,

    'author': "Yassir Irfan",
    'website': "https://www.odoo.com/",
    'category': 'Tutorials/AwesomeDashboard',
    'version': '18.0.1.0.0',
    'application': True,
    'installable': True,
    'depends': ['base', 'web', 'mail'],

    'data': [
        'security/ir.model.access.csv',
        'views/social_share_menus.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'social_share/static/src/xml/social_share.xml',
            'social_share/static/src/css/social_share.css',
            'social_share/static/src/js/social_share.js',
            'social_share/static/src/components/comment/comment.xml',
            'social_share/static/src/components/comment/comment.js',
        ],
    },
    'license': 'AGPL-3'
}