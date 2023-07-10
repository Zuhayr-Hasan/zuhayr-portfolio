import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Grid, Typography, Box, Button } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'
import './App.css'
import cozy from './images/eazy.png'
import frispes from './images/frispes-landing.png'
import lasles from './images/lasles-landing.png'
import leamon from './images/leamon-landing.png'
import offshore from './images/offshore-landing.png'
import pro from './images/pro-landing.png'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import SimpleSlider from './Carousel'

const cards = [
  {
    img: pro,
    heading: 'Pro Edu',
    url: 'https://portfolio-invozone-proedu.netlify.app/',
  },
  {
    img: frispes,
    heading: 'Frispes',
    url: 'https://portfolio-invozone-frispes.netlify.app/',
  },
  {
    img: cozy,
    heading: 'Eazy Camper',
    url: 'https://portfolio-invozone-easycamper.netlify.app/',
  },
  {
    img: offshore,
    heading: 'OFF Shore',
    url: 'https://portfolio-invozone-offshore.netlify.app/',
  },
  {
    img: leamon,
    heading: 'Leamon Wares',
    url: 'https://portfolio-invozone-1.netlify.app/',
  },
  {
    img: lasles,
    heading: 'Lasles VPN',
    url: 'https://portfolio-invozone-lasles.netlify.app/',
  },
]

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Lato'].join(','),
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <div className='App margin-top-75'>
        <Grid
          container
          className='portfolio-section'
          spacing={1}
          sx={{ borderRadius: '10px' }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant='h3'
              sx={{ fontSize: '40px', color: '#191919', mt: 1 }}
              className='portfolio-h3p'
            >
              Zuhayr Hasan
            </Typography>
            <Box sx={{ display: 'flex', mt: 1 }}>
              <EmailIcon />
              <Typography sx={{ ml: 1 }}>zuhayrhassan1122@gmail.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', mt: 1 }}>
              <LocalPhoneIcon sx={{ border: '2px solid white' }} />
              <Typography variant='body1' component='p' sx={{ ml: 1 }}>
                +923311329191
              </Typography>
            </Box>

            <Box className='github-card'>
              <Button
                variant='text'
                className='btn-github'
                onClick={() =>
                  window.open('https://github.com/Zuhayr-Hasan', '_blank')
                }
              >
                GitHub
                <ArrowRightAltIcon sx={{ ml: 1, color: '#191919' }} />
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='body1' className='portfolio-p' sx={{ mt: 2 }}>
              Experienced web developer with 1 year of expertise in React,
              Node.js, MongoDB, JavaScript, TypeScript, and MUI. Specialized in
              PKI-based digital signing platforms. Strong problem-solving
              skills, collaborative mindset, and a passion for delivering
              exceptional user experiences.
            </Typography>
          </Grid>
        </Grid>
      </div>
      <SimpleSlider />

      <div className='App'>
        <Typography variant='h4' sx={{ mt: 4 }}>
          Portfolio Projects
        </Typography>
        <Grid container className='images-section' spacing={2}>
          {cards.map((item) => {
            return (
              <Grid
                item
                md={4}
                sx={{ cursor: 'pointer' }}
                className='main-card'
              >
                <Box
                  className='box-content'
                  sx={{
                    position: 'relative',
                  }}
                >
                  <Box className='card-img' sx={{ height: '100%' }}>
                    <img src={item.img} className='card-img-v' />
                  </Box>
                  <Box
                    className='card-content'
                    sx={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <Typography className='card-data' variant='body1'>
                        {item.heading}
                      </Typography>
                      <Button
                        className='card-btn'
                        variant='outlined'
                        onClick={() => window.open(item.url, '_blank')}
                      >
                        View
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </div>
      {/* <SimpleSlider /> */}   
    </ThemeProvider>
  )
}

export default App
