import { CollectionConfig } from 'payload/types'

const Employee: CollectionConfig = {
    slug: 'employees',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Employee Information',
                    fields: [
                        {
                            name: 'name',
                            type: 'text',
                        },
                        {
                            name: 'age',
                            type: 'number'
                        },
                        {
                            name: 'position',
                            type: 'text',
                        },
                        {
                            name: 'designation',
                            type: 'text'
                        }
                    ]
                }
            ]
        },
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Contact Details',
                    fields: [
                        {
                            name: 'country',
                            type: 'text',
                        },
                        {
                            name: 'state',
                            type: 'text'
                        },
                        {
                            name: 'city',
                            type: 'text',
                        },
                        {
                            name: 'pin',
                            label: 'PIN Code',
                            type: 'text'
                        },
                        {
                            name: 'address',
                            label: 'Street Address',
                            type: 'text'
                        },
                        {
                            name: 'email',
                            label: "Email Address",
                            type: 'text'
                        },
                        {
                            name: 'phone_1',
                            label: 'Primary Phone Number',
                            type: 'number'
                        },
                        {
                            name: 'phone_2',
                            label: 'Secondery Phone Number',
                            type: 'number'
                        }
                    ]
                }
            ]
        },
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Salary/Wages',
                    fields: [
                        {
                            name: 'base',
                            label: 'Base Salary',
                            type: 'number',
                        },
                        {
                            name: 'housing_allowance',
                            label: 'Housing Allowance',
                            type: 'number'
                        },
                        {
                            name: 'travel_allowance',
                            label: 'Travel Allowance',
                            type: 'number',
                        },
                    ]
                }
            ]
        },
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Documents',
                    fields: [
                        {
                            name: 'documents',
                            type: 'array',
                            fields: [
                                {
                                    name: 'document_title',
                                    label: "Title",
                                    type: 'text',
                                },
                                {
                                    name: 'document',
                                    label: 'Upload',
                                    type: 'upload',
                                    relationTo: 'media',
                                    required: true
                                }
                            ]
                        },
                    ]
                }
            ]
        }
    ],
    timestamps: true,
}

export default Employee
