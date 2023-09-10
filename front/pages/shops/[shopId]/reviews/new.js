import { useForm } from "react-hook-form";
import { Box, Button, TextField } from '@mui/material';
import axios from "axios";
import { useRouter } from "next/router";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

export default function NewShop() {
  const schema = yup.object({
    name: yup.string().required('店舗名は入力必須項目です。')
  });

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  const router = useRouter();

  async function onSubmit(data) {
    try {
      await axios.post("http://localhost:3000/api/v1/shops", data)
      router.push("/")
    } catch (err) {
      alert("登録に失敗しました。")
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
              { ...register('score') }
              label="スコア"
              variant="outlined"
              fullWidth
              multiline
              rows={2}
              error={ errors.score ? true : false }
              helperText={ errors.score?.message }
            />
          </Box>
          <Box mb={2}>
            <TextField
              { ...register('caption') }
              label="内容"
              variant="outlined"
              fullWidth
              multiline
              rows={2}
              error={ errors.caption ? true : false }
              helperText={ errors.caption?.message }
            />
          </Box>
          <Box mb={2}>
            <TextField
              { ...register('image') }
              label="画像"
              variant="outlined"
              fullWidth
              multiline
              rows={2}
              error={ errors.image ? true : false }
              helperText={ errors.image?.message }
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
