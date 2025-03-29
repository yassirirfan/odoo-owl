{
    'name': 'Interactive Data Table',
    'version': '1.0',
    'category': 'Extra Tools',
    'summary': 'Interactive data table with sorting and filtering',
    'description': """
        Interactive Data Table
        =====================
        This module provides an interactive data table with:
        - Column sorting (ascending/descending)
        - Column filtering (text search, range selection)
        - Dynamic table updates
    """,
    'author': 'Your Company',
    'website': 'https://www.yourcompany.com',
    'depends': ['base', 'web', 'product'],
    'data': [
        'views/data_table_views.xml',
    ],
    'assets': {
        'web.assets_backend': [
            # 'interactive_data_table/static/src/js/components/**/*',
            # 'interactive_data_table/static/src/js/data_table_action.js',
            # 'interactive_data_table/static/src/xml/data_table_templates.xml',
        ],
    },
    'application': True,
    'installable': True,
    'license': 'LGPL-3',
}