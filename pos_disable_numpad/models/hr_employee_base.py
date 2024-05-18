# -*- coding: utf-8 -*-
from odoo import fields, models


class HrEmployeeBase(models.AbstractModel):
    _inherit = "hr.employee.base"

    disable_numpad = fields.Boolean(
        string="POS-Disable Numpad")