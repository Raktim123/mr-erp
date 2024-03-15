import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import type { CollectionConfig } from 'payload/types'

export const Document: CollectionConfig = {
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
}
