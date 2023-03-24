import { Autocomplete, Stack, TextField } from '@mui/material';
// Types
import { Product } from '../../store/products/slice';
// Styled
import { Container } from './search.styled';

interface PropsT {
  products: Product[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<PropsT> = ({ products, onChange }) => {
  const modifyOption = () => {
    const titles: string[] = [];
    const categories: string[] = [];
    products.forEach((item) => {
      titles.push(item.title);
    });
    products.forEach((item) => {
      if (categories.includes(item?.category)) {
        return;
      }
      item?.category && categories.push(item?.category);
    });

    return [...titles, ...categories];
  };

  return (
    <Container>
      <Stack spacing={2} sx={{ width: 600 }}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={modifyOption()}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                onSelect: onChange,
                type: 'search',
              }}
            />
          )}
        />
      </Stack>
    </Container>
  );
};

export default Search;
