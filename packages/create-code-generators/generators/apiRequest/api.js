export function {{requestName}}(data) {
  return axios.{{method}}(`${API_PATH}/{{endpoint}}`, data);
}
