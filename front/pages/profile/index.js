import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex justify-center mt-20">
        <div className="sm:w-1/2 flex flex-col">
          <h2 className="text-4xl">Loading...</h2>
        </div>
      </div>
    )
  }

  return (
    <div>
      { isAuthenticated ?
        <div className="flex justify-center mt-20">
          <div className="sm:w-1/2 flex flex-col">
            <div>
              <h2 className="text-4xl mb-16">プロフィール</h2>
              <div className="mb-10">
                <h2 className="text-2xl mb-3">プロフィール画像</h2>
                <img className="rounded-lg" src={user.picture} alt={user.name} />
              </div>
              <div className="mb-10">
                <h2 className="text-2xl mb-2">ユーザーネーム</h2>
                <p>{user.nickname}</p>
              </div>
              <div className="mb-10">
                <h2 className="text-2xl mb-2">メールアドレス</h2>
                <p>{user.email}</p>
              </div>
            </div>
          </div>
        </div> :
        <div className="flex justify-center mt-20">
          <div className="sm:w-1/2 flex flex-col">
            <p className="text-4xl">ログインしてください。</p>
          </div>
        </div>
      }
    </div>
  );
};

export default Profile;
