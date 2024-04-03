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
      ({ req, operation, data }) => {
        // if (operation === 'create') {
        //   if (req.user) {
        //     data.createdBy = req.user.id;
        //     return data;
        //   }
        // }

        console.log(req.user)
        console.log(operation)
        console.log(data)
      },
    ],
  },
  timestamps: true,
}

export default Student
