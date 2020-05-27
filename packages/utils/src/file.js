import contentDisposition from 'content-disposition';

export function saveBlobAsFile(blob, fileName) {
  const a = document.createElement("a");
  const url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
}

export function createBlobFromResponse(response) {
  const csvType = 'text/csv';
  const disposition = contentDisposition.parse(response.headers["content-disposition"]);

  //determine the content type from the header or default to octect stream
  const contentType = response.headers["content-type"] || csvType;
  const blob = new Blob([response.data], {type: contentType});

  saveBlobAsFile(blob, disposition.parameters.filename)

  return response;
}
