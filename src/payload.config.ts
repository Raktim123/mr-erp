import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import { Document } from './collections/Document'
import { Media } from './collections/Media'
import LeadStatus from './collections/LeadStatus'
import Leads from './collections/Lead'
import Logo from './graphics/Logo'
import Icon from './graphics/Icon'
import Dashboard from './components/Dashboard'
import CRM from './components/CRM'
import College from './collections/College'
import Course from './collections/Course'
import Student from './collections/Student'
import Payment from './collections/Payment'
import Holiday from './collections/Holiday'
import Employee from './collections/Employee'
import Nav from './components/Nav'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    components: {
      // Nav: Nav,
      graphics: {
        Logo
      },
      views: {
        Dashboard: Dashboard,
      },
    },
    css: path.resolve(__dirname, 'stylesheet.css'),
  },
  editor: slateEditor({}),
  collections: [Users, Document, Media, LeadStatus, Leads, College, Course, Student, Payment, Holiday, Employee],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
