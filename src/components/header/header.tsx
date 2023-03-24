// Styled
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { Container, Title } from './header.styled';

const Header: React.FC = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Products Searcher
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;
