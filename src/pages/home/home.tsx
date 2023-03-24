// Hooks
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { useNavigate } from 'react-router-dom';
// Actions
import { AddProductData, deleteProduct, getProducts } from '../../store/products/actions';
// Selectors
import { selectProducts, selectProductsLoading } from '../../store/products/selectors';
// Types
import { Product } from '../../store/products/slice';
//Components
import { Loader, ModalForm, Table } from '../../components';
import { GridRowParams } from '@mui/x-data-grid';
import { Button } from '@mui/material';
// Styled
import { ButtonContainer } from './home.styled';
import { addProduct } from '../../store/products/actions';

const Home: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const products = useAppSelector(selectProducts);
  const loading = useAppSelector(selectProductsLoading);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (loading) {
    return <Loader loading />;
  }

  const onRowClick = (data: GridRowParams<Product>) => {
    console.log(data.row.id);
    navigate(`product/${data.row.id}`);
  };

  const onSubmit = (data: AddProductData) => {
    dispatch(addProduct(data));
  };

  const onDelete = (id: number) => {
    dispatch(deleteProduct(id));
  };

  return (
    <>
      <ButtonContainer>
        <Button
          variant="contained"
          color="success"
          sx={{ padding: '10px' }}
          onClick={() => setModalOpen(true)}
        >
          Add new product
        </Button>
      </ButtonContainer>
      {products?.products && (
        <Table products={products?.products} onRowClick={onRowClick} onDelete={onDelete} />
      )}
      <ModalForm isOpen={isModalOpen} handleClose={() => setModalOpen(false)} onSubmit={onSubmit} />
    </>
  );
};

export default Home;
