/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import GoogleMapReact from "google-map-react";
import { Paper, useMediaQuery, Typography } from "@material-ui/core";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import useStyles from './styles';
import mapStyles from './mapStyles';

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width: 600px)');


  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDm4Ji-RMAmNwijTOUp-wRx4-cZoaIheqw' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        onChildClick={''}
      >
        {places?.map((place, i) => (
          <div className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {
              !isDesktop ? (
                <LocationOnOutlinedIcon color='primary' fontSize="large" />

               ) : (
                  <Paper elevation={3} className={classes.paper}>
                    <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                      {place.name}
                    </Typography>
                    <img
                      className={classes.pointer}
                      src={place.photo ? place.photo.images.large.url : 'https://t3.ftcdn.net/jpg/02/06/04/70/360_F_206047084_OxZGQ404N8rocQmItLIQRMRWlQwV3mSH.jpg'}
                      alt={place.name} />
                  </Paper>
                )
            }
          </div>
        ))}
      </GoogleMapReact>

    </div>
  )
}

export default Map
