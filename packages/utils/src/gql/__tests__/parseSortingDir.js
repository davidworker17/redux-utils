import parseSortingDir from '../parseSortingDir';

describe('parseSortingDir', () => {
  it('should return ASC for asc input', () => {
    const result = parseSortingDir('asc');

    expect(result).toEqual('ASC');
  });

  it('should return DESC for empty input', () => {
    const result = parseSortingDir('');

    expect(result).toEqual('DESC');
  });

  it('should return DESC for undefined input', () => {
    const result = parseSortingDir();

    expect(result).toEqual('DESC');
  });

  it('should return DESC for desc input', () => {
    const result = parseSortingDir('desc');

    expect(result).toEqual('DESC');
  });
});
