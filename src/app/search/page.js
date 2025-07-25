import { fetchData } from "@/lib/data";
import SearchResults from "@/features/search/components/SearchResults/SearchResults";

// async function fetchQuery(url) {
//   try {
//     const response = await fetchData(url);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// }

export default async function Search({searchParams}) {
  const query = searchParams.query || '';
  // const data = await fetchQuery(`/search/multi?query=${query}&include_adult=false&language=es-MX&page=1`);
  return (
    <SearchResults query={query} />
  )
}
