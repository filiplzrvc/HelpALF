function MapSearcher(map) {}
MapSearcher.prototype.findSpaceship = function (map) {
  let lines = map.split('\n');

  for (let i = 0; i < lines.length; i++) {
    let col = lines[i].indexOf('X');
    if (col !== -1) {
      return [col, i];
    }
  }
  return 'Spaceship lost forever.';
};
