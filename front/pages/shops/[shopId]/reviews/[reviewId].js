import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

export async function getStaticProps({ params }) {
  const res = await axios.get(`http://localhost:3000/api/v1/shops/${params.shopId}/reviews/${params.reviewId}`);
  const review = res.data;
  return {
    props: {review: review}
  };
}

export async function getStaticPaths() {
  const shopRes = await axios.get(`http://localhost:3000/api/v1/shops`);
  const shops = await shopRes.data;

  const shopPaths = shops.map((shop) => ({
    params: { shopId: shop.id.toString() },
  }))

  const paths = [];

  for (const shopPath of shopPaths) {
    const reviewRes = await axios.get(`http://localhost:3000/api/v1/shops/${shopPath.params.shopId}/reviews`);
    const reviews = await reviewRes.data;

    const reviewPaths = reviews.map((review) => ({
      params: { shopId: shopPath.params.shopId, reviewId: review.id.toString() },
    }));

    paths.push(...reviewPaths);
  }
  return {
    paths,
    fallback: true,
  }
}

export default function ShopPage({ review }) {
  const router = useRouter()
  const ids = router.query

  return(
    <div className="flex justify-center mt-20">
      <div className="sm:w-1/2 flex flex-col">
        <div className="text-lg md:text-4xl px-6 py-4">
          レビュー
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden mb-20">
              <table className="min-w-full text-left md:text-lg font-light mb-4">
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <th className="whitespace-nowrap px-6 py-4">
                      画像
                    </th>
                    <td className="whitespace-pre-wrap px-6 py-4">
                      <img src={ review.image.url } alt="reviewImage" className="rounded-lg" width={500} height={500} />
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <th className="whitespace-nowrap px-6 py-4">
                      商品名
                    </th>
                    <td className="whitespace-pre-wrap px-6 py-4">
                      { review.title }
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <th className="whitespace-nowrap px-6 py-4">
                      評価
                    </th>
                    <td className="whitespace-pre-wrap px-6 py-4">
                      { review.score } / 5
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <th className="whitespace-nowrap px-6 py-4">
                      説明
                    </th>
                    <td className="whitespace-pre-wrap px-6 py-4">
                      { review.caption }
                    </td>
                  </tr>
                </tbody>
              </table>
              <Link className="text-xl" href={`/shops/${ids.shopId}/reviews/`}>⇦レビュー一覧に戻る</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
