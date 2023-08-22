import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';

const NewShop = () => {
  return(
    <div className="flex justify-center mt-20 mx-10 mb-10">
      <div className="flex flex-col">
        <h1 className="text-4xl mb-4">新規店舗登録</h1>
        <FormControl>
          <InputLabel htmlFor="name">店舗名</InputLabel>
          <Input id="name" aria-describedby="name" />
          <FormHelperText id="name">店舗名を入力して下さい。</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="name">店舗名</InputLabel>
          <Input id="name" aria-describedby="name" />
          <FormHelperText id="name">店舗名を入力して下さい。</FormHelperText>
        </FormControl>
      </div>
    </div>
  )
}

export default NewShop;
