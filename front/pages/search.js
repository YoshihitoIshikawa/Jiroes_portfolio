import { useState } from "react";
import { useRouter } from 'next/router';
import { useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/system";
import Link from "next/link";

function SearchResults() {
  const router = useRouter();
  const searchTerm = router.query.keyword;

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const getSearchResults = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/shops/search?search=${searchTerm}`);
        setSearchResults(response.data);
        console.log(router.query.keyword)
      } catch (e) {
        console.log(e.message)
      }
    }
    getSearchResults()
  }, [searchTerm])

  return (
    <div className="sm:w-1/2 flex flex-col">
      {searchResults.map((shop) => (
        <Box className="m-4" key={shop.id}>
          <Link className="text-xl" href={`/shops/${shop.id}`}>{shop.name}</Link>
          <p>{ shop.access }</p>
        </Box>
      ))}
    </div>
  );
}

export default SearchResults;
