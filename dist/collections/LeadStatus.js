"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LeadStatus = {
    slug: 'lead-status',
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
exports.default = LeadStatus;
