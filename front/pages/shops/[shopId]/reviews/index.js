import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from 'next/router';
import LoginButton from "@/components/logInButton";

const index = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();
  const router = useRouter();
  const { shopId } = router.query;

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
      <h1>Hello World/{shopId}/{ user.nickname }</h1>
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

export default index;
