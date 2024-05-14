describe('Map Searcher', function () {
var searcher;

  beforeEach(function () {
    searcher = new MapSearcher();
  });

  it('should return a message if the map string is empty', function () {
    var map = '';
    expect(searcher.findSpaceship(map)).toEqual('Spaceship lost forever.');
  });

    it('should return a message if no X found in the map', function () {
      var map =
        '.........\n' +
        '.........\n' +
        '.........\n' +
        '.........\n' +
        '.........\n' +
        '.........';
      expect(searcher.findSpaceship(map)).toEqual('Spaceship lost forever.');
    });
  
  
    it('should return correct coordinates for X at the beginning', function () {
      var map =
        'X........\n' +
        '.........\n' +
        '.........\n' +
        '.........\n' +
        '.........\n' +
        '.........';
      expect(searcher.findSpaceship(map)).toEqual([0, 0]);
    });
  
  
    it('should return correct coordinates for X at the end', function () {
      var map =
        '.........\n' +
        '.........\n' +
        '.........\n' +
        '.........\n' +
        '.........\n' +
        '........X';
      expect(searcher.findSpaceship(map)).toEqual([8, 5]);
    });
  
  
    it('should return correct coordinates for the position of X', function () {
      var map =
        '.........\n' +
        '.........\n' +
        '.........\n' +
        '...X.....\n' +
        '.........\n' +
        '.........';
      expect(searcher.findSpaceship(map)).toEqual([3, 3]);
    });
});
