const {
  DEV,
  SSR,
  MODE,
  PROD,
  BASE_URL,
  VITE_SERVER_URL,
  VITE_PROJECT_ID,
  VITE_BUCKET_ID,
  VITE_API_KEY,
} = import.meta.env

if (!VITE_SERVER_URL || !VITE_PROJECT_ID || !VITE_BUCKET_ID || !VITE_API_KEY)
  throw new Error('missing environment value')

const env = {
  DEV,
  SSR,
  MODE,
  PROD,
  BASE_URL,
  VITE_SERVER_URL: VITE_SERVER_URL + '',
  VITE_PROJECT_ID: VITE_PROJECT_ID + '',
  VITE_BUCKET_ID: VITE_BUCKET_ID + '',
  VITE_API_KEY: VITE_API_KEY + '',
}

export default env
