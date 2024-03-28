"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Course = {
    slug: 'courses',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
        },
        {
            name: 'semesters',
            type: 'number',
        },
    ],
    timestamps: true,
};
exports.default = Course;
