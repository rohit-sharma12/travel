import { CssBaseline, Grid } from '@material-ui/core';
import List from './components/List/List';
import Map from './components/Map/Map';
import Header from './components/Header/Header';
import { getPlacesData } from './api';
import { useState, useEffect } from 'react';
import { use } from 'react';

const App = () => {
  const [places, setPlaces] = useState([]);
  // const [filterdPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [type, setType] = useState('attractions');
  const [isLoading, setIsLoading] = useState(false);

  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    })
  }, []);

  // useEffect(() => {
  //   const filterdPlaces = places.filter((place) => place.rating > rating)
  //   setFilteredPlaces(filterdPlaces)
  // }, [rating])

    useEffect(() => {
      setIsLoading(true);

      getPlacesData(type, bounds.sw, bounds.ne)
      .then((data) => {
        setPlaces(data);
        setIsLoading(false);
      })
    },[type, coordinates, bounds])
 



  return (
    <>
      <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{ width: '100%' }}>
          <Grid item xs={12} md={4}>
            <List places={places}
            type={type}
            setType={setType}
            isLoading={isLoading}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={places}
            />
          </Grid>
        </Grid>
    </>
  )
}

export default App
