import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'copyright',
      label: 'Copyright',
      type: 'text',
      admin: {
        placeholder: 'e.g. @2024 <company-name-here> All rights reserved',
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
    {
      name: 'navItemz',
      type: 'array',
      maxRows: 6,
      fields: [
        {
          type: 'group',
          name: 'link',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'Type',
                  type: 'radio',
                  options: [
                    { label: 'Internal link', value: 'internalLink' },
                    { label: 'Custom URL', value: 'customUrl' },
                  ],
                  defaultValue: 'customUrl',
                  admin: {
                    layout: 'horizontal',
                    width: '50%',
                  },
                },
                {
                  name: 'openInNewTab',
                  type: 'checkbox',
                  label: 'Open in new tab',
                  admin: {
                    width: '50%',
                    style: {
                      alignSelf: 'flex-end',
                    },
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'reference',
                  label: 'Document to link to',
                  type: 'relationship',
                  relationTo: ['pages'],
                  required: true,
                  admin: {
                    width: '35%',
                    condition: (_, siblingData) => {
                      if (siblingData.Type === 'internalLink') {
                        return true
                      }

                      return false
                    },
                  },
                },
                {
                  name: 'customUrl',
                  type: 'text',
                  label: 'Custom URL',
                  required: true,
                  admin: {
                    width: '35%',
                    condition: (_, siblingData) => {
                      if (siblingData.Type === 'customUrl') {
                        return true
                      }

                      return false
                    },
                  },
                },
                {
                  name: 'label',
                  type: 'text',
                  label: 'Label',
                  required: true,
                  admin: {
                    width: '65%',
                  },
                },
              ],
            },
          ],
          // admin: {
          //   hideGutter: true,
          // },
        },
      ],
    },
  ],
}
