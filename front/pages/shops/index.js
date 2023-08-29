import { Box } from "@mui/material";
import axios from "axios";
import Link from "next/link";

export async function getStaticProps() {
  const res = await axios.get("http://localhost:3000/api/v1/shops");
  const shops = res.data;
  return {
    props: {shops: shops}
  };
}

export default function IndexShops({shops}) {
  console.log(shops)
  return(
    <div className="flex justify-center mt-20">
      <div className="sm:w-1/2 flex flex-col">
        {shops.map((shop) => (
          <Box className="m-4" key={shop.id}>
            <Link href={`/shops/${shop.id}`}>{shop.name}</Link>
          </Box>
        ))}
      </div>
    </div>
  )
}
