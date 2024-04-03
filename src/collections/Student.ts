import { CollectionConfig } from 'payload/types'
import payload from 'payload'

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
    {
      name: 'createdBy',
      type: 'relationship',
      relationTo: 'users',
      access: {
        update: () => false,
      },
      admin: {
        readOnly: true,
        condition: data => Boolean(data?.createdBy)
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ req, operation, data }) => {
        if (operation === 'create') {
          if (req.user) {
            data.createdBy = req.user.id
          }
        }
        return data
      },
    ],

    afterChange: [
      async ({ req, operation, doc }) => {
        const post = await payload.create({
          collection: 'counsellings', // required
          data: {
            student: doc.id,
            proposed_fees: doc.proposed_fees,
            asking_fees: doc.asking_fees,
            counselling_date: doc.counselling_date,
            counselling_docs: doc.counselling_docs,
            createdBy: req.user.id
          },
        })

        return post
      },
    ]
  },
  access: {
    create: ({ req: { user } }) => { return true; },
    read: ({ req: { user } }) => { return true; },
    update: ({ req: { user } }) => { if (user && user.roles === 'admin') { return true; } },
    delete: ({ req: { user } }) => { if (user && user.roles === 'admin') { return true; } },
  },
  timestamps: true,
}

export default Student
