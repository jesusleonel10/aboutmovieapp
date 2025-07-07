import { fetchData } from "@/lib/data";
import Search from "@/features/search/components/Search/Search";
import Slider from "@/features/slider/components/Slider/Slider";

async function trendingWeek() {
  try {
    const response = await fetchData(`/trending/all/week?&language=es-MX`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const trending = await trendingWeek();
  return (
    <>
      <Search 
        trending={trending.results}
      />
      <Slider 
        trending={trending.results}
      />
    </>
  );
}
