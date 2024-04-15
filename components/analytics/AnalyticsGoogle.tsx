

// pnpm i @next/third-parties@latest
// quote: https://icegreeen.medium.com/implementing-google-analytics-ga4-in-next-js-14-779da8df5c9e

import { GoogleTagManager } from '@next/third-parties/google'

export default function Page() {
  return (
    <>
      {process.env.NEXT_PUBLIC_AnalyticsGoogle ? (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_AnalyticsGoogle} />
      ) : (
        <></>
      )}
    </>
  );
}
