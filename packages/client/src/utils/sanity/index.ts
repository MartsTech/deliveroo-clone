import sanityClient from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';
import type {SanityImageSource} from '@sanity/image-url/lib/types/types';
import config from './config';

export const client = sanityClient(config);

export const urlFor = (source: SanityImageSource) =>
  createImageUrlBuilder(client).image(source);
