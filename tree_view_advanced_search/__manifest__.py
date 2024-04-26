# -*- coding: utf-8 -*-
{
    'name': 'Tree view Advanced Search',
    'version': '17.0.1.0.0',
    'category': 'Extra Tools',
    'summary': """Tree view Advanced Search""",
    'description': """Tree view Advanced Search""",
    'author': '',
    'company': '',
    'maintainer': '',
    'website': "",
    'depends': ['web'],
    'assets': {
        'web.assets_backend': [
            'tree_view_advanced_search/static/src/css/search_bar_view.css',
            'tree_view_advanced_search/static/src/js/list_controller_search_bar.js',
            'tree_view_advanced_search/static/src/js/list_renderer_search_bar.js',
            'tree_view_advanced_search/static/src/xml/search_bar_views.xml',
        ],
    },
    # 'images': ['static/description/banner.jpg'],
    'license': 'AGPL-3',
    'installable': True,
    'auto_install': False,
    'application': False,
}
