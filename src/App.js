import './App.css';
import { Box, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import ImageList from './components/image-list';
import DonwoloadButton from './components/donwload-button/inedx';
import FeatList from './components/feat-list';
import AboutTeam from './components/about-team';

function App() {
  return (
    <>
      <header className='header-container'>
      {/* <Card sx={{width: 'fit-content', background: '#cdf2f5', margin: '0 auto', padding: '12px 24px'}}> */}
      <Typography 
        variant="h1"
        noWrap
        component="h1" sx={{color: "#fff", textAlign: 'center', fontWeight: 'bold'}}>
        Jerry the Slime
      </Typography>
      {/* </Card> */}
      </header>
      <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '100px 450px', color: '#FFF'}}>
      <ImageList/>
      <Typography  variant="h4" component="h4" gutterBottom sx={{textTransform: 'capitalize', marginTop: '24px'}}>
        about jerry the slime
      </Typography>
      <Typography variant="body1" gutterBottom>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Typography>
      <FeatList/>
      <DonwoloadButton/>
      <AboutTeam/>
      </Box>
      <footer className='footer-container'>
        <Typography>
          Made with ❤️ in Manaus
        </Typography>
      </footer>
    </>
  );
}

export default App;
