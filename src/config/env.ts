export const env = {
  nyTimes: {
    baseUrl: import.meta.env.VITE_NY_TIMES_BASE_URL,
    apiKey: import.meta.env.VITE_NY_TIMES_API_KEY,
  },
} as const;
