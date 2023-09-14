import { useForm, Controller } from "react-hook-form";
import { Box, Button, TextField, FormControl, Select, InputLabel, MenuItem } from '@mui/material';
import axios from "axios";
import { useRouter } from "next/router";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";

export default function NewShop() {
  const schema = yup.object({
    title: yup.string().required('入力必須項目です。'),
    score: yup.string().required('入力必須項目です。'),
    caption: yup.string().required('入力必須項目です。'),
    image: yup.string().required('画像を選択して下さい。')
  });

  const { register, handleSubmit, formState: { errors }, control } = useForm({ resolver: yupResolver(schema) });
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0()
  const router = useRouter();
  const { shopId } = router.query;
  const [token,setToken] = useState('')

  useEffect(() => {
    const getToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently({})
        setToken(accessToken)
        console.log(token)
      } catch (e) {
        console.log(e.message)
      }
    }
    getToken()
  }, [])

  async function onSubmit(data) {
    try {
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      await axios.post(`http://localhost:3000/api/v1/shops/${shopId}/reviews`, data, headers)
      router.push("/")
    } catch (err) {
      alert("登録に失敗しました。")
      console.log(data)
    };
  };

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
          <h1 className="text-4xl mb-8">レビュー投稿</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box mb={2}>
              <TextField
                { ...register('title') }
                label="商品名"
                variant="outlined"
                fullWidth
                error={ errors.title ? true : false }
              />
              <div className="mt-2 text-xs text-red-600">{ errors.title?.message }</div>
            </Box>
            <Box mb={2}>
              <TextField
                { ...register('caption') }
                label="内容"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                error={ errors.caption ? true : false }
              />
              <div className="mt-2 text-xs text-red-600">{ errors.caption?.message }</div>
            </Box>
            <Box mb={2}>
              <Controller
                control={control}
                name="score"
                defaultValue=""
                render={({ field }) => (
                  <FormControl sx={{ minWidth: 120 }} size="small">
                    <InputLabel id="score">スコア</InputLabel>
                    <Select
                      { ...field }
                      labelId="score"
                      id="demo-select-small"
                      label="score"
                      error={ errors.score ? true : false }
                    >
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
              <div className="mt-2 text-xs text-red-600">{ errors.score?.message }</div>
            </Box>
            <Box mb={2}>
              <Controller
                control={control}
                name="image"
                defaultValue=""
                render={({ field }) => (
                  <input
                    { ...field }
                    label="画像"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={2}
                    error={ errors.image ? true : false }
                    type="file"
                    accept="image/*"
                  />
                )}
              />
              <div className="mt-2 text-xs text-red-600">{ errors.image?.message }</div>
            </Box>
            <input
              { ...register('user_id') }
              id="user_id"
              type="hidden"
              name="user_id"
              value={user.sub}
            />
            <Button sx={{width: 100, marginBottom: 10}} variant="outlined" type="submit">
              送信
            </Button>
          </form>
        </div>
      </div>
    )
  }
};
