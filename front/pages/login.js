import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <h2>ログイン状態</h2>
      {isAuthenticated ?
        <p>ログイン中です</p> :
        <p>ログアウトしています</p>
      }
    </div>
  );
};

export default LoginPage;
