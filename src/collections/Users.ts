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
          label: 'Sales Person',
          value: 'seller',
        },
      ],
    },
  ],
  timestamps: true,
}

export default Users
