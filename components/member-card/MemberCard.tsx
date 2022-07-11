/// Member of Parliament profile card
import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export interface MemberCardProps {
  name: string
  party: string
  image: string
  bio: string
  twitter?: string
  facebook?: string
  instagram?: string
  youtube?: string
  website?: string
}

const MemberCard = (props: MemberCardProps) => {
  const { name, party, image, bio } = props
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {party}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default MemberCard
