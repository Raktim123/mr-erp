"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
var path_1 = __importDefault(require("path"));
exports.Media = {
    slug: 'media',
    upload: {
        staticDir: path_1.default.resolve(__dirname, '../../../media'),
    },
    fields: [],
};
