import {defineConfig} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    storeDomain: import.meta.env.VITE_PUBLIC_MY_API_URL,
    storefrontToken: import.meta.env.VITE_STOREFRONT_API_TOKEN,
    storefrontApiVersion: '2022-07',
  },
});