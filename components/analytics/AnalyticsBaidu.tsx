import Script from "next/script";
export default function Page() {
  return (
    <>
      {process.env.NEXT_PUBLIC_AnalyticsBaidu ? (
        <Script id="AnalyticsBaidu">
          {`
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?${process.env.NEXT_PUBLIC_AnalyticsBaidu}";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
          `}
        </Script>
      ) : (
        <></>
      )}
    </>
  );
}
