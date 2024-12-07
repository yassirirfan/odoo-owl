# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import api, fields, models, _


class SocialShareComments(models.Model):
    _name = "social.share.comment"
    _description = "Social Comments"

    comment = fields.Text()
    user_id = fields.Many2one('res.users')
    commented_on = fields.Datetime()
    parent_id = fields.Many2one('social.share.comment')
