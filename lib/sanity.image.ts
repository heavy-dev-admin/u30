import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from 'lib/sanity.api'

const imageBuilder = createImageUrlBuilder({ projectId, dataset })

export const urlForImage = (source: any) => imageBuilder.image(source).auto('format').fit('max')
