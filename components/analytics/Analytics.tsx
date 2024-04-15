
import AnalyticsGoogle from "@/components/analytics/AnalyticsGoogle";
import AnalyticsBaidu from "@/components/analytics/AnalyticsBaidu";

export default function Page() {
  return (
    <>
      {process.env.NODE_ENV === "development" ? (
        <></>
      ) : (
        <>
          <AnalyticsGoogle />
          <AnalyticsBaidu />
        </>
      )}
    </>
  )
}
