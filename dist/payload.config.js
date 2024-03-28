"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var plugin_cloud_1 = require("@payloadcms/plugin-cloud");
var db_mongodb_1 = require("@payloadcms/db-mongodb");
var bundler_webpack_1 = require("@payloadcms/bundler-webpack");
var richtext_slate_1 = require("@payloadcms/richtext-slate");
var config_1 = require("payload/config");
var Users_1 = __importDefault(require("./collections/Users"));
var Document_1 = require("./collections/Document");
var Media_1 = require("./collections/Media");
var LeadStatus_1 = __importDefault(require("./collections/LeadStatus"));
var Lead_1 = __importDefault(require("./collections/Lead"));
var Logo_1 = __importDefault(require("./graphics/Logo"));
var Dashboard_1 = __importDefault(require("./components/Dashboard"));
var College_1 = __importDefault(require("./collections/College"));
var Course_1 = __importDefault(require("./collections/Course"));
var Student_1 = __importDefault(require("./collections/Student"));
var Payment_1 = __importDefault(require("./collections/Payment"));
var Holiday_1 = __importDefault(require("./collections/Holiday"));
var Employee_1 = __importDefault(require("./collections/Employee"));
exports.default = (0, config_1.buildConfig)({
    admin: {
        user: Users_1.default.slug,
        bundler: (0, bundler_webpack_1.webpackBundler)(),
        components: {
            // Nav: Nav,
            graphics: {
                Logo: Logo_1.default
            },
            views: {
                Dashboard: Dashboard_1.default,
            },
        },
        css: path_1.default.resolve(__dirname, 'stylesheet.css'),
    },
    editor: (0, richtext_slate_1.slateEditor)({}),
    collections: [Users_1.default, Document_1.Document, Media_1.Media, LeadStatus_1.default, Lead_1.default, College_1.default, Course_1.default, Student_1.default, Payment_1.default, Holiday_1.default, Employee_1.default],
    typescript: {
        outputFile: path_1.default.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path_1.default.resolve(__dirname, 'generated-schema.graphql'),
    },
    plugins: [(0, plugin_cloud_1.payloadCloud)()],
    db: (0, db_mongodb_1.mongooseAdapter)({
        url: process.env.DATABASE_URI,
    }),
});
