import auth0Client from "auth0";
import { useAuth0 } from "@auth0/auth0-react";


export default function EditProfile() {
  const managementClient = new auth0Client.ManagementClient({
    domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
    clientId: process.env.AUTH0_MANAGEMENT_APP_CLIENT_ID,
    clientSecret: process.env.AUTH0_MANAGEMENT_APP_CLIENT_SECRET,
    scope: "update:users",
  });

  return(
    <div className="flex justify-center mt-20">
      <div className="sm:w-1/2 flex flex-col">
        <h1 className="text-4xl mb-8">ユーザーネーム変更</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box mb={2}>
            <TextField
              { ...register('name') }
              label="店舗名(必須)"
              variant="outlined"
              fullWidth
              error={ errors.name ? true : false }
              helperText={ errors.name?.message }
            />
          </Box>
          <Button sx={{width: 100, marginBottom: 10}} variant="outlined" type="submit">
            送信
          </Button>
        </form>
      </div>
    </div>
  )

}
