export function {{requestName}}(data) {
  return gql.getGraphQLGrid({
    url: `${API_PATH}/query`,
    config: {
      domain: '{{endpoint}}'
    },
    gridQueryPart: gql.getGridQueryPart({
      payload: {
        fields: [
        ],
        filtering: {
        },
        sorting: {
        },
      },
    }),
  });
}
