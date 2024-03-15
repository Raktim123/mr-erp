import { CollectionConfig } from 'payload/types'

const LeadStatus: CollectionConfig = {
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
}

export default LeadStatus
