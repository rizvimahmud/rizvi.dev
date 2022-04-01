import NextHead from "next/head";
import { useRouter } from "next/router";

interface MetaData {
  title?: string;
  description?: string;
}

const DOMAIN = "https://rizvi.vercel.app";
const image = `${DOMAIN}/assets/logo.png`;

export const Head = (props: MetaData) => {
  const {
    title = "Rizvi Mahmud",
    description = "Developer, exploring the world of user intefaces",
  } = props;

  const router = useRouter();
  const path = router.asPath;

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${DOMAIN}${path}`} />
      <meta name="robots" content="index, follow" />
      <meta property="og:url" content={DOMAIN} />
      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="keywords" content="rizvi mahmud, developer, design" />
      <meta name="twitter:url" content={DOMAIN} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mahmudRizvi5" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@mahmudRizvi5" />
    </NextHead>
  );
};
