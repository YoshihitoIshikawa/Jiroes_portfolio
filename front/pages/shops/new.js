import { useForm, Controller } from "react-hook-form";
import { Box, Button, TextField, Input } from '@mui/material';


const NewShop = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }

  return(
    <div className="flex justify-center mt-20">
      <div className="sm:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl mb-8">新規店舗登録</h1>
        <Box mb={2}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{
              required: { value: true, message: '*店舗名は必須項目です。' }
            }}
            render={({ field }) => (
              <TextField
                { ...field }
                label="店舗名(必須)"
                variant="outlined"
                fullWidth
                error={ errors.name ? true : false }
                helperText={ errors.name?.message }
              />
            )}
          />
        </Box>
        <Box mb={2}>
          <Controller
            name="address"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                { ...field }
                label="住所"
                variant="outlined"
                fullWidth
              />
            )}
          />
        </Box>
        <Box mb={2}>
          <Controller
            name="access"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                { ...field }
                label="アクセス"
                variant="outlined"
                fullWidth
                multiline
                rows={2}
              />
            )}
          />
        </Box>
        <Box mb={2}>
          <Controller
            name="open_time"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                { ...field }
                label="営業時間"
                variant="outlined"
                fullWidth
                multiline
                rows={2}
              />
            )}
          />
        </Box>
        <Box mb={2}>
          <Controller
            name="closed_days"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                { ...field }
                label="定休日"
                variant="outlined"
                fullWidth
                multiline
                rows={2}
              />
            )}
          />
        </Box>
        <Box mb={2}>
          <Controller
            name="phone_number"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                { ...field }
                label="電話番号"
                variant="outlined"
                fullWidth
                multiline
                rows={2}
              />
            )}
          />
        </Box>
        <Box mb={2}>
          <Controller
            name="parking"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                { ...field }
                label="駐車場(有・無・その他詳細)"
                variant="outlined"
                fullWidth
                multiline
                rows={2}
              />
            )}
          />
        </Box>
        <Box mb={2}>
          <Controller
            name="when_to_buy_tickets"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                { ...field }
                label="食券購入タイミング(列に並ぶ前・入店時等)"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
              />
            )}
          />
        </Box>
        <Box mb={2}>
          <Controller
            name="call_timing"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                { ...field }
                label="コールタイミング(食券提出時・商品提供直前等)"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
              />
            )}
          />
        </Box>
        <Box mb={2}>
          <Controller
            name="prohibited_matters"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                { ...field }
                label="禁止事項(マシマシ不可・麺固め不可・特定のルール等)"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
            )}
          />
        </Box>
        <Box mb={2}>
          <Controller
            name="remarks"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                { ...field }
                label="備考(店舗特有のルール・留意ポイント等)"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
            )}
          />
        </Box>
        <p className="mb-5 text-red-600">{ errors.name?.message }</p>
        <Button sx={{width: 100, marginBottom: 10}} variant="outlined" type="submit" onClick={handleSubmit(onSubmit)}>
          送信
        </Button>
      </div>
    </div>
  )
}

export default NewShop;
