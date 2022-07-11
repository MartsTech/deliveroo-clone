import type {ClientConfig} from '@sanity/client';
import Config from 'react-native-config';

export default {
  projectId: Config.SANITY_PROJECT_ID,
  dataset: Config.SANITY_DATASET,
  apiVersion: Config.SANITY_API_VERSION,
  useCdn: true,
} as ClientConfig;
