import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
const Header = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        component="div"
        sx={{ textAlign: 'center', py: 8, textTransform: 'uppercase' }}
      >
        Tory watch
      </Typography>
    </Box>
  )
}

export default Header
