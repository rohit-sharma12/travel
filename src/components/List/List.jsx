/* eslint-disable react/prop-types */
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";

import useStyles from './styles';
import { useState, useEffect, createRef } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({places, type, setType, isLoading}) => {
  const classes = useStyles();
  // const [elRefs, setElRefs] = useState([]);
  

  // useEffect(() => {
  //   const refs = Array(places?.length).fill().map((__, i) => elRefs[i] || createRef());
  //   setElRefs(refs);
  // }, [places])


  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants, Hotels & Atrractions around you
      </Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size='5rem'/>
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value='restaurants'>Restaurants</MenuItem>
              <MenuItem value='hotels'>Hotels</MenuItem>
              <MenuItem value='attractions'>Attractions</MenuItem>
            </Select>
          </FormControl>

          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid item key={i} xs={12}>
                <PlaceDetails place={place}
                
                />
              </Grid>

            ))}
          </Grid>
          </>
      )}
    </div>
  );
}

export default List;
