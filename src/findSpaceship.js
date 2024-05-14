function MapSearcher(map) {}
MapSearcher.prototype.findSpaceship = function (map) {
  let lines = map.split('\n');
  let firstLine = lines[0];
  let lastLine = lines[lines.length - 1];

  let col = firstLine.indexOf('X');
  if (col !== -1) {
    return [col, 0];
  }

  col = lastLine.indexOf('X');
  if (col !== -1 && lines.length) {
    return [col, lines.length - 1];
  }

  return 'Spaceship lost forever.';
};
