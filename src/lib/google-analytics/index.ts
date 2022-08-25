export const pageView = (url: string) => {
  //@ts-ignore
  window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, {
    path_url: url,
  });
};
