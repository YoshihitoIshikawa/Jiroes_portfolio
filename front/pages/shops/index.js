import axios from "axios";
import Link from "next/link";

export async function getStaticProps() {
  const res = await axios.get("http://localhost:3000/api/v1/shops");
  const shops = await res.data;
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
          <div>
            <Link href={"/profile"}>{shop.name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
