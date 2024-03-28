"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var College = {
    slug: 'colleges',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
        },
    ],
    timestamps: true,
};
exports.default = College;
