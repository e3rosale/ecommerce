import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    // {
    //   name: 'delete_1',
    //   label: 'Enable',
    //   type: 'checkbox',
    // },
    // {
    //   name: 'delete_2',
    //   label: 'Date',
    //   type: 'date',
    // },
    // {
    //   name: 'delete_3',
    //   label: 'E-mail',
    //   type: 'email',
    // },
    // {
    //   name: 'delete_4',
    //   label: 'Size',
    //   type: 'radio',
    //   options: [
    //     // required
    //     {
    //       label: 'Small',
    //       value: 'small',
    //     },
    //     {
    //       label: 'Medium',
    //       value: 'medium',
    //     },
    //     {
    //       label: 'Large',
    //       value: 'large',
    //     },
    //   ],
    //   defaultValue: 'medium', // The first value in options.
    // },
    // {
    //   name: 'delete_5',
    //   label: 'Editor',
    //   type: 'richText',
    // },
    // {
    //   name: 'delete_6', // required
    //   label: 'Roles',
    //   type: 'select', // required
    //   hasMany: true,
    //   admin: {
    //     isClearable: true,
    //     isSortable: false, // use mouse to drag and drop different values, and sort them according to your choice
    //   },
    //   options: [
    //     {
    //       label: 'Admin',
    //       value: 'admin',
    //     },
    //     {
    //       label: 'Customer',
    //       value: 'customer',
    //     },
    //     {
    //       label: 'Merchant',
    //       value: 'merchant',
    //     },
    //   ],
    // },
    // {
    //   name: 'delete_7', // required
    //   type: 'textarea', // required
    //   label: 'Product description',
    // },
    // {
    //   name: 'image',
    //   label: 'Product image',
    //   type: 'upload',
    //   relationTo: 'media',
    //   filterOptions: {
    //     mimeType: { contains: 'image' },
    //   },
    // },
    {
      name: 'copyright',
      label: 'Copyright',
      type: 'text',
      defaultValue: () => '@2024 <Company name> All rights reserved',
      admin: {
        description: 'Add or update copyright text for company here',
      },
    },
    {
      name: 'navItems',
      type: 'array',
      maxRows: 6,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
  ],
}
