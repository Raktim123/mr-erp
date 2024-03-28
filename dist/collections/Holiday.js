"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Holiday = {
    slug: 'holidays',
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'date',
            type: 'date'
        }
    ],
    timestamps: true,
};
exports.default = Holiday;
