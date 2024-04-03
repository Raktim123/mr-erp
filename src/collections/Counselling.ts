import { CollectionConfig } from 'payload/types'

const Counselling: CollectionConfig = {
  slug: 'counsellings',
  admin: {
    useAsTitle: 'student.name',
  },
  fields: [
    {
      name: 'student', // required
      type: 'relationship', // required
      relationTo: 'students', // required
      required: true,
    },
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
  },
  timestamps: true,
}

export default Counselling
