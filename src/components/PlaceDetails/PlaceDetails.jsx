/* eslint-disable react/prop-types */
import { Box, Typography, Button, Card, CardMedia, CardContent, Chip, CardActions } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';

import useStyles from './styles';

const PlaceDetails = ({place}) => {
  
  const classes = useStyles();

  // if(selected) refProp?.current?.scrollIntoView({behaviour: 'smooth', block: 'start'})

  return (
    <Card elevation={6}>
      <CardMedia style={{ height: 350 }}
        image={place.photo ? place.photo.images.large.url : 'https://t3.ftcdn.net/jpg/02/06/04/70/360_F_206047084_OxZGQ404N8rocQmItLIQRMRWlQwV3mSH.jpg'}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5'>{place.name}</Typography>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Price</Typography>
          <Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Ranking</Typography>
          <Typography gutterBottom variant='subtitle1'>{place.ranking}</Typography>
        </Box>
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place?.address && (
          <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.subtitle}>
            <LocationOnIcon /> {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.spacing}>
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button size='small' color='primary' onClick={() => window.open(place.web_url, '_blank')}>
            Trip Advisor
          </Button>
          <Button size='small' color='primary' onClick={() => window.open(place.website, '_blank')}>
            Visit Website
          </Button>
        </CardActions>
      </CardContent>

    </Card>
    
  )
}

export default PlaceDetails
