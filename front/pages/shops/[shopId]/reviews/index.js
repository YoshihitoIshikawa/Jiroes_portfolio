import { useRouter } from 'next/router';
import axios from "axios";
import Link from "next/link";
import { Box } from "@mui/material";

export async function getStaticProps({ params }) {
  const res = await axios.get(`http://localhost:3000/api/v1/shops/${params.shopId}/reviews`);
  const reviews = res.data;
  return {
    props: {reviews: reviews}
  };
}
export async function getStaticPaths() {
  const res = await axios.get("http://localhost:3000/api/v1/shops");
  const shops = await res.data;

  const paths = shops.map((shop) => ({
    params: { shopId: shop.id.toString() },
  }))
  return {
    paths,
    fallback: true,
  }
}

const indexReviews = ({ reviews }) => {
  const router = useRouter();
  const { shopId } = router.query;

  if (reviews.length == 0 ) {
    return(
      <div className="flex justify-center mt-20">
        <div className="md:w-1/2 flex flex-col">
          <h2 className="text-4xl mb-12">レビュー一覧</h2>
          <p className='text-2xl mb-8'>まだレビューがありません。</p>
          <Link className="text-xl" href={`/shops/${shopId}/reviews/new`}>⇨レビューを投稿する。</Link>
        </div>
      </div>
    )
  } else {
    return(
      <div className="flex justify-center mt-20">
        <div className="md:w-1/2 flex flex-col">
          <h2 className="text-4xl mb-12">レビュー一覧</h2>
          {reviews.map((review) => (
            <Box className="m-4 flex" key={review.id}>
              <div className="mr-10">
                <img src={review.image.thumb.url} alt="reviewImage" className="rounded-lg" width={200} height={200} />
              </div>
              <div>
                <Link className="text-xl" href={`/shops/${shopId}/reviews/${review.id}`}>{review.title}</Link>
                <p className="text-lg mt-4">評価：{ review.score } / 5</p>
              </div>
            </Box>
          ))}
        </div>
      </div>
      )
  }

};

export default indexReviews;
