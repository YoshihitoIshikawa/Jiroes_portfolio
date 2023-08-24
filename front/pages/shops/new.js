import { useForm, Controller } from "react-hook-form";
import { Box, Button, TextField, FormControl } from '@mui/material';
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

const NewShop = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [access, setAccess] = useState("");
  const [parking, setParking] = useState("");
  const [open_time, setOpen_time] = useState("");
  const [closed_days, setClosed_days] = useState("");
  const [remarks, setRemarks] = useState("");
  const [prohibited_matters, setProhibited_matters] = useState("");
  const [when_to_buy_tickets, setWhen_to_buy_tickets] = useState("");
  const [call_timing, setCall_timing] = useState("");

  const onChange = (e, setState) => {
    setState(e.target.value);
    console.log(name)
  };

  const onSubmit = async () => {
    const params = {
    name: name,
    address: address,
    phone_number: phone_number,
    access: access,
    parking: parking,
    open_time: open_time,
    closed_days: closed_days,
    remarks: remarks,
    prohibited_matters: prohibited_matters,
    when_to_buy_tickets: when_to_buy_tickets,
    call_timing: call_timing
    };

    console.log(name)
    try {
      await axios.post("http://localhost:3000/api/v1/shops", params)
      router.push("/")
    } catch (err) {
      alert("登録に失敗しました。")
    };
  };

  return(
    <div className="flex justify-center mt-20">
      <div className="sm:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl mb-8">新規店舗登録</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                  value={name}
                  onChange={(e) => {onChange(e, setName)}}
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
                  value={address}
                  onChange={(e) => {onChange(e, setAddress)}}                />
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
                  value={access}
                  onChange={(e) => {onChange(e, setAccess)}}                />
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
                  value={open_time}
                  onChange={(e) => {onChange(e, setOpen_time)}}                />
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
                  value={closed_days}
                  onChange={(e) => {onChange(e, setClosed_days)}}                />
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
                  value={phone_number}
                  onChange={(e) => {onChange(e, setPhone_number)}}                />
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
                  value={parking}
                  onChange={(e) => {onChange(e, setParking)}}                />
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
                  value={when_to_buy_tickets}
                  onChange={(e) => {onChange(e, setWhen_to_buy_tickets)}}                />
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
                  value={call_timing}
                  onChange={(e) => {onChange(e, setCall_timing)}}                />
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
                  rows={4}value={prohibited_matters}
                  onChange={(e) => {onChange(e, setProhibited_matters)}}
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
                  value={remarks}
                  onChange={(e) => {onChange(e, setRemarks)}}                />
              )}
            />
          </Box>
          <p className="mb-5 text-red-600">{ errors.name?.message }</p>
          <Button sx={{width: 100, marginBottom: 10}} variant="outlined" type="submit">
            送信
          </Button>
        </form>
      </div>
    </div>
  )
};

export default NewShop;
