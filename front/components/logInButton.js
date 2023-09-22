import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button className="w-28" variant="outlined" onClick={() => loginWithRedirect()}>ログイン</Button>;
};

export default LoginButton;
