export function {{requestName}}(payload) {
  return gql.getGraphQLGrid({
    url: `${API_PATH}/query`,
    config: {
      domain: "{{name}}",
      gridField: "grid"
    },
    payload
  });
}
