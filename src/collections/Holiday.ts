import { CollectionConfig } from 'payload/types'

const Holiday: CollectionConfig = {
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
}

export default Holiday
