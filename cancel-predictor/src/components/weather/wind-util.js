/*
TODO apparently I need to invert these: 
Consequently, a wind blowing from the north has a wind direction of 0° (360°);
a wind blowing from the east has a wind direction of 90°; a wind blowing from the south has a wind direction of 180°;
and a wind blowing from the west has a wind direction of 270°.
In general, wind directions are measured in units from 0° to 360°,
*/

/*
TODO unit test
*/

/*
TODO support 8 point compass
*/

export const directions = {
  NORTH: { abbr: 'N', rotation: 0 },
  EAST: { abbr: 'E', rotation: 90 },
  SOUTH: { abbr: 'S', rotation: 180 },
  WEST: { abbr: 'W', rotation: 270 },
};

export const getWindDirection = (windDegrees) => {
  if (windDegrees < 45 || windDegrees > 315) {
    return directions.NORTH;
  } if (windDegrees < 135) {
    return directions.EAST;
  } if (windDegrees < 225) {
    return directions.SOUTH;
  }
  return directions.WEST;
};
