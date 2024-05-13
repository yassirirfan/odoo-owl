/** @odoo-module **/;
import { loadWysiwygFromTextarea } from "@web_editor/js/frontend/loadWysiwygFromTextarea";
import publicWidget from "@web/legacy/js/public/public_widget";

publicWidget.registry.websiteProducts = publicWidget.Widget.extend({
    selector: '#product_details',
    events: {},
    init() {
        this._super(...arguments);
    },
    /**
     * @override
     */
    start: function () {
        var self = this;
        $('textarea.o_wysiwyg_loader').toArray().forEach((textarea) => {
            var $textarea = $(textarea);
            var editorKarma = $textarea.data('karma') || 0; // default value for backward compatibility
            var $form = $textarea.closest('form');
            var hasFullEdit = parseInt($("#karma").val()) >= editorKarma;

            var options = {
                toolbarTemplate: 'website_home.web_editor_toolbar',
                toolbarOptions: {
                    showColors: false,
                    showFontSize: false,
                    showHistory: true,
                    showHeading1: false,
                    showHeading2: false,
                    showHeading3: false,
                    showLink: hasFullEdit,
                    showImageEdit: hasFullEdit,
                },
                recordInfo: {
                    context: self._getContext(),
                },
                resizable: true,
                userGeneratedContent: true,
                height: 350,
            };
            options.allowCommandLink = hasFullEdit;
            options.allowCommandImage = hasFullEdit;
            loadWysiwygFromTextarea(self, $textarea[0], options).then(wysiwyg => {
                // float-start class messes up the post layout OPW 769721
                $form.find('.note-editable').find('img.float-start').removeClass('float-start');
            });
        });
    }
});
