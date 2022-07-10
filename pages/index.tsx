import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Header from '../components/header/Header'
import MainNavigation from '../components/main-navigation/MainNavigation'
import MainFooter from '../components/footer/MainFooter'

const Home = () => {
  return (
    <>
      <Container fixed sx={{ pb: 8 }}>
        <Header />
        <MainNavigation />
        <Box sx={{ margin: 'auto' }} pt={8}></Box>
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

export default Home
