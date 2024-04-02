import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: "phone",
      type: "text"
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: false,
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Agent',
          value: 'agent',
        },
        {
          label: 'Accountant',
          value: 'accountant',
        },
        {
          label: 'Telecaller',
          value: 'telecaller',
        },
      ],
    },
  ],
  timestamps: true,
}

export default Users
