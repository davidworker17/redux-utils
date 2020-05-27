const getGraphQLLimit = (pagination = {}) => {
  const { pageSize = 25, currentPage = 1 } = pagination;

  return `size: ${pageSize} , page: ${currentPage}`;
};

export default getGraphQLLimit;
