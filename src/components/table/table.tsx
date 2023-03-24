import { Button } from '@mui/material';
import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { useState } from 'react';
// Types
import { Product } from '../../store/products/slice';
import { Search } from '../search';
// Styled
import { Container } from './table.styled';

interface PropsT {
  products: Product[];
  onRowClick: (data: GridRowParams<Product>) => void;
  onDelete: (id: number) => void;
}

const Table: React.FC<PropsT> = ({ products, onRowClick, onDelete }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 10 },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'description', headerName: 'Description', width: 150 },
    { field: 'price', headerName: 'Price', type: 'number', width: 30 },
    {
      field: 'discountPercentage',
      headerName: 'Discount Percentage',
      type: 'percentage',
      width: 150,
    },
    { field: 'rating', headerName: 'Rating', type: 'number' },
    { field: 'stock', headerName: 'Stock', type: 'number' },
    { field: 'brand', headerName: 'Brand', width: 140 },
    { field: 'category', headerName: 'Category', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(params.row.id);
          }}
          sx={{ zIndex: 10 }}
        >
          Delete
        </Button>
      ),
    },
  ];

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filtered = products.filter((item) => {
      return item.title.includes(e.target.value) || item.category.includes(e.target.value);
    });
    setFilteredProducts(filtered);
  };

  return (
    <Container>
      <Search products={products} onChange={onSearch} />
      <DataGrid columns={columns} rows={filteredProducts} autoPageSize onRowClick={onRowClick} />
    </Container>
  );
};

export default Table;
