import React from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Modal,
  Box,
} from '@mui/material';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { AddProductData } from '../../store/products/actions';

interface FormModalProps {
  isOpen: boolean;
  handleClose: () => void;
  onSubmit: (data: AddProductData) => void;
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  author: Yup.string().required('Required'),
  year: Yup.string().required('Required'),
  rating: Yup.number().required('Required'),
});

const FormModal: React.FC<FormModalProps> = ({ isOpen, handleClose, onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      year: '',
      rating: '',
    },
    validationSchema,
    onSubmit: (values) => {
      handleClose();
      onSubmit(values);
    },
  });

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: 5,
          p: 4,
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <TextField
            label="Author"
            name="author"
            value={formik.values.author}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.author && Boolean(formik.errors.author)}
            helperText={formik.touched.author && formik.errors.author}
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <TextField
            name="year"
            value={formik.values.year}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.year && Boolean(formik.errors.year)}
            helperText={formik.touched.year && formik.errors.year}
            fullWidth
            margin="normal"
            variant="outlined"
            type="date"
            placeholder=''
            InputProps={{ inputProps: { min: 0 } }}
          />

          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel id="rating-label">Rating</InputLabel>
            <Select
              labelId="rating-label"
              id="rating-select"
              name="rating"
              value={formik.values.rating}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.rating && Boolean(formik.errors.rating)}
              label="Rating"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
            {formik.touched.rating && formik.errors.rating && <div>{formik.errors.rating}</div>}
          </FormControl>

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default FormModal;
