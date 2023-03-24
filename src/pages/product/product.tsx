// Hooks
import { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
// Components
import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
// Actions
import { getProduct } from '../../store/product/actions';
// Selectors
import { selectProduct, selectProductLoading } from '../../store/product/selectors';
import { Loader } from '../../components';

const Product: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectProduct);
  const loading = useAppSelector(selectProductLoading);

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  if (loading || !product) {
    return <Loader loading />;
  }

  return (
    <Card sx={{ maxWidth: 600, margin: '5px auto' }}>
      <CardHeader title="Product Title" subheader="Brand" />
      <Carousel>
        {product.images.map((item) => (
          <CardMedia sx={{ height: 0, paddingTop: '56.25%' }} image={item} />
        ))}
      </Carousel>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Category: {product.category}
        </Typography>
        <Typography sx={{ marginTop: 1 }} gutterBottom variant="h5" component="h2">
          {product.title}
        </Typography>
        <Typography variant="body1" color="textPrimary" component="p">
          Description: {product.description}
        </Typography>
        <Typography sx={{ marginTop: 1 }} variant="h6" color="textPrimary" component="p">
          Price: {product.price}
        </Typography>
        <Typography sx={{ marginTop: 1 }} variant="body1" color="textPrimary" component="p">
          Discount: {product.discountPercentage}
        </Typography>
        <Typography sx={{ marginTop: 1 }} variant="body1" color="textPrimary" component="p">
          Rating: {product.rating}
        </Typography>
        <Typography sx={{ marginTop: 1 }} variant="body2" color="textSecondary" component="p">
          Stock: In Stock
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
