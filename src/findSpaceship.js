function MapSearcher(map) {}
MapSearcher.prototype.findSpaceship = function (map) {
  let firstLine = map.split('\n')[0];

  let col = firstLine.indexOf('X');
  if (col !== -1) {
    return [col, 0];
  }
  return 'Spaceship lost forever.';
};
