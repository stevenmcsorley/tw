import Container from '@mui/material/Container'
import Header from '../components/header/Header'
import MainNavigation from '../components/main-navigation/MainNavigation'
import MainFooter from '../components/footer/MainFooter'
import { Typography } from '@mui/material'

const About = () => {
  return (
    <>
      <Container fixed sx={{ pb: 8 }}>
        <Header />
        <MainNavigation />
        <Typography
          variant="h4"
          component="div"
          sx={{ textAlign: 'center', py: 8, textTransform: 'uppercase' }}
        >
          About Tory watch dot com
        </Typography>
      </Container>
      <Container
        maxWidth={false}
        sx={{ borderTop: '1px solid rgb(211 211 211 / 20%)' }}
      >
        <MainFooter />
      </Container>
    </>
  )
}

export default About
