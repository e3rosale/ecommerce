import { Category, Page } from '../../../payload/payload-types'
import { fetchDoc } from '../../_api/fetchDoc'
import { Blocks } from '../../_components/Blocks'
import { Gutter } from '../../_components/Gutter'
import { Filters } from './Filters'

import classes from './index.module.scss'
import { draftMode } from 'next/headers'
import { fetchDocs } from '../../_api/fetchDocs'
import { HR } from '../../_components/HR'

const Products = async () => {
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null
  let categories: Category[] | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug: 'products',
      draft: isDraftMode,
    })

    categories = await fetchDocs<Category>('categories')
  } catch (error) {}

  const { layout } = page

  return (
    <div className={classes.container}>
      <Gutter className={classes.products}>
        <Filters categories={categories} />
        <Blocks blocks={layout} disableTopPadding={true} />
      </Gutter>
      <HR />
    </div>
  )
}

export default Products
