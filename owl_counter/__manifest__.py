{
    'name': 'Counter App',
    'version': '0.0.1',
    'depends': ['base'],
    'data': [
        'views/counter.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'owl_counter/static/src/xml/counter.xml',
            'owl_counter/static/src/js/counter.js',
        ],
    },
    'license': 'AGPL-3',
    'installable': True,
    'auto_install': False,
    'application': False,
}
