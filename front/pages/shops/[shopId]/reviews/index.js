import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from 'next/router';
import LoginButton from "@/components/logInButton";
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
  const { user, isLoading, isAuthenticated } = useAuth0();
  const router = useRouter();
  const { shopId } = router.query;
  console.log(shopId)
  console.log(reviews)
  if (isLoading) {
    return (
      <div className="flex justify-center mt-20">
        <div className="sm:w-1/2 flex flex-col">
          <h2 className="text-4xl">Loading...</h2>
        </div>
      </div>
    )
  }

  if (isAuthenticated) {
    return(
      <div className="flex justify-center mt-20">
        <div className="sm:w-1/2 flex flex-col">
          {reviews.map((review) => (
            <Box className="m-4 flex" key={review.id}>
              <div className="mr-10">
                <img src={review.image.thumb.url} alt="reviewImage" width={200} height={200} />
              </div>
              <div>
                <Link className="text-xl" href={`/reviews/${review.id}`}>{review.title}</Link>
                <p>評価：{ review.score }</p>
              </div>
            </Box>
          ))}
        </div>
      </div>
      )
  } else {
    return(
      <div>
        <h1>ログインして下さい。</h1>
        <LoginButton/>
      </div>
    )
  }
};

export default indexReviews;
