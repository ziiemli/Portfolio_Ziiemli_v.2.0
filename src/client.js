import {createClient} from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url';

const projectid = import.meta.env.VITE_PROJECT_ID
const projectdataset = import.meta.env.VITE_DATASET
const projectapiversion = import.meta.env.VITE_API_VERSION

const client = createClient({
    projectId: projectid,
    dataset: projectdataset,
    apiVersion: projectapiversion,
    // Set to `true` for production environments
    useCdn: false,
})

// img url's
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export default client
