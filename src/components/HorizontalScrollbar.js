import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard.js';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';


  
const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  return (
    <div style={{ overflowX: 'scroll', display: 'flex' }} >
    {data.map((item) => (
      <Box
       
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
      </Box>
    ))}
  </div>
  )
}

export default HorizontalScrollbar
