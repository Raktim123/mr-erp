import { CollectionConfig } from 'payload/types'

const Student: CollectionConfig = {
  slug: 'students',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Basic Details', // required
          fields: [
            {
              name: 'image',
              label: 'Student Photo',
              type: 'upload',
              relationTo: 'media',
              required: true
            },
            {
              name: 'name',
              type: 'text',
            },
            {
              name: 'dob',
              type: 'date',
            },
            {
              name: 'phone_no',
              label:'Phone Number',
              type: 'text',
            },
            {
              name: 'additional_phone_no',
              label:'Additional Phone Number',
              type: 'text',
            },
            {
              name: 'college', // required
              type: 'relationship', // required
              relationTo: 'colleges', // required
              hasMany: false,
              required: true,
            },
            {
              name: 'course', // required
              type: 'relationship', // required
              relationTo: 'courses', // required
              hasMany: false,
              required: true,
            }
          ],
        },
        {
          label: 'Counsellings', // required
          fields: [
            {
              name: 'proposed_fees',
              label: 'Proposed Fees',
              type: 'number',
              required: true
            },
            {
              name: 'asking_fees',
              label: 'Student Asking Fees',
              type: 'number',
              required: true
            },
            {
              name: 'counselling_date',
              label: "Counselling Date",
              type: 'date',
              required: true
            },
            {
              name: 'counselling_docs',
              label: 'Counselling Docs',
              type: 'upload',
              relationTo: 'media',
              required: true
            },
          ],
        },
      ]
    },
  ],
  hooks: {
    beforeChange: [
      async ({ req, operation, data }) => {
        if (operation === 'create') {
          if (req.user) {
            data.createdBy = req.user.id;
            return data;
          }
        }
      },
    ],
  },
  timestamps: true,
}

export default Student
