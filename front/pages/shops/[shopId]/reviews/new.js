import { useForm } from "react-hook-form";
import { Box, Button, TextField, FormControl, Select, InputLabel, MenuItem } from '@mui/material';
import axios from "axios";
import { useRouter } from "next/router";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";

export default function NewShop() {
  const schema = yup.object({
    title: yup.string().required('入力必須項目です。'),
    score: yup.string().required('入力必須項目です。'),
    caption: yup.string().required('入力必須項目です。'),
    image: yup.string().required('画像を選択して下さい。')
  });

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  const router = useRouter();
  const { shopId } = router.query;

  async function onSubmit(data) {
    try {
      await axios.post(`http://localhost:3000/api/v1/shops/${shopId}/reviews`, data)
      router.push("/")
    } catch (err) {
      alert("登録に失敗しました。")
      console.log(data)
    };
  };

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
              helperText={ errors.title?.message }
            />
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
              helperText={ errors.caption?.message }
            />
          </Box>
          <Box mb={2}>
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="score">スコア</InputLabel>
              <Select
                { ...register('score') }
                labelId="score"
                id="demo-select-small"
                label="score"
                error={ errors.score ? true : false }
                helperText={ errors.score?.message }
              >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={1}>1</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box mb={2}>
            <input
              { ...register('image') }
              label="画像"
              variant="outlined"
              fullWidth
              multiline
              rows={2}
              error={ errors.image ? true : false }
              helperText={ errors.image?.message }
              type="file"
              accept="image/*"
            />
          </Box>
          <Button sx={{width: 100, marginBottom: 10}} variant="outlined" type="submit">
            送信
          </Button>
        </form>
      </div>
    </div>
  )
};
