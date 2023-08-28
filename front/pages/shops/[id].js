import axios from "axios";

export async function getStaticProps({ params }) {
  const res = await axios.get(`http://localhost:3000/api/v1/shops/${params.id}`);
  const shop = res.data;
  return {
    props: {shop: shop}
  };
}

export async function getStaticPaths() {
  const res = await axios.get("http://localhost:3000/api/v1/shops");
  const shops = res.data;

  const paths = shops.map((shop) => ({
    params: { id: shop.id.toString() },
  }))
  return {
    paths,
    fallback: true,
  }
}

export default function ShopPage({ shop }) {

  return(
    <div className="flex justify-center mt-20">
      <div className="sm:w-1/2 flex flex-col">
        <div>
          <h1 className="text-4xl">{ shop.name }</h1>
        </div>
      </div>
  </div>  )
}
