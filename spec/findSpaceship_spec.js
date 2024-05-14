describe('Map Searcher', function () {
var searcher;

  beforeEach(function () {
    searcher = new MapSearcher();
  });

  it('should return a message if the map string is empty', function () {
    var map = '';
    expect(searcher.findSpaceship(map)).toEqual('Spaceship lost forever.');
  });
});
