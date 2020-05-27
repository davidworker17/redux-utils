import getGraphQLLimit from '../getGraphQLLimit';

describe('getGraphQLLimit', () => {
  it('should return proper string', () => {
    const pagination = {
      pageSize: 123,
      currentPage: 10,
    };

    const result = getGraphQLLimit(pagination);

    expect(result).toEqual(`size: ${pagination.pageSize} , page: ${pagination.currentPage}`);
  });

  it('should return proper string with defaults', () => {
    const result = getGraphQLLimit();

    expect(result).toEqual(`size: 25 , page: 1`);
  });
});
