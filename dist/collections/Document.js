"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = void 0;
exports.Document = {
    slug: 'documents',
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: "title",
            label: "Title",
            type: "text"
        },
        {
            name: 'document',
            label: 'Document',
            type: 'upload',
            relationTo: 'media',
            required: true
        }
    ],
};
