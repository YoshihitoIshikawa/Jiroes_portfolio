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
        <h1 className="text-4xl mb-8">新規店舗登録</h1>
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
          <Box mb={2}>
            <TextField
              { ...register('address') }
              label="所在地"
              variant="outlined"
              fullWidth
              multiline
              rows={2}
            />
          </Box>
          <Box mb={2}>
            <TextField
              { ...register('access') }
              label="アクセス"
              variant="outlined"
              fullWidth
              multiline
              rows={2}
            />
          </Box>
          <Box mb={2}>
            <TextField
              { ...register('open_time') }
              label="営業時間"
              variant="outlined"
              fullWidth
              multiline
              rows={2}
            />
          </Box>
          <Box mb={2}>
            <TextField
              { ...register('closed_days') }
              label="定休日"
              variant="outlined"
              fullWidth
              multiline
              rows={2}
            />
          </Box>
          <Box mb={2}>
            <TextField
              { ...register('phone_number') }
              label="電話番号"
              variant="outlined"
              fullWidth
              multiline
              rows={2}
            />
          </Box>
          <Box mb={2}>
            <TextField
              { ...register('parking') }
              label="駐車場(有・無・その他詳細)"
              variant="outlined"
              fullWidth
              multiline
              rows={2}
            />
          </Box>
          <Box mb={2}>
            <TextField
              { ...register('menu') }
              label="メニュー"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
            />
          </Box>
          <Box mb={2}>
            <TextField
              { ...register('when_to_buy_tickets') }
              label="食券購入(列に並ぶ前・入店時等)"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
            />
          </Box>
          <Box mb={2}>
            <TextField
              { ...register('call_timing') }
              label="コール(タイミングや店舗独自の仕方等)"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
            />
          </Box>
          <Box mb={2}>
            <TextField
              { ...register('prohibited_matters') }
              label="禁止事項(マシマシ不可・麺固め不可・特定のルール等)"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
            />
          </Box>
          <Box mb={2}>
            <TextField
              { ...register('remarks') }
              label="備考(店舗特有のルール・留意ポイント等)"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
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
