import { CollectionConfig } from 'payload/types'

const Leads: CollectionConfig = {
    slug: 'leads',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            type: 'tabs', 
            tabs: [
                {
                    label: 'Lead Details',
                    fields: [
                        {
                            name: 'name',
                            type: 'text',
                        },
                        {
                            name: 'email',
                            type: 'email',
                        },
                        {
                            name: "phone",
                            type: "text"
                        },
                        {
                            name: 'message',
                            type: 'text',
                        },
                    ]
                },
                {
                    label: 'Lead Logs',
                    fields: [
                        {
                            name: 'logs',
                            type: 'array',
                            fields: [
                                {
                                    name: "date",
                                    type: "date"
                                },
                                {
                                    name: 'description',
                                    type: "richText",
                                },
                                {
                                    name: 'Upload',
                                    type: 'upload',
                                    relationTo: 'media',
                                }
                            ]
                        },
                    ]
                },
                {
                    label: 'Lead Status',
                    fields: [
                        {
                            name: "next_follow_up_date",
                            label: "Next Followup date",
                            type: "date"
                        },
                        {
                            name: "status",
                            hasMany: false,
                            type: 'relationship',
                            relationTo: 'lead-status',
                            required: true
                        }
                    ]
                }
            ]
        },
    ],
    timestamps: true,
}

export default Leads
