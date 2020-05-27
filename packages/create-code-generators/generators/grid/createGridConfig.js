export function createGridConfig({
  data,
  totalSize,
  isLoading,
}) {
  const columns = [
    {
      id: 1,
      field: "id",
      label: "id",
      type: "string",
      isFilterable: true,
      isSortable: true
    },
  ];

  const rowOptions = [
    {
      id: 1,
      icon: "view",
      label: "View",
      handler: () => {}
    },
  ];

  return {
    values: data,
    itemsCount: totalSize,
    columns,
    config: {
      isLoading,
      rowOptions,
      isSelectable: false,
      withRowOptions: true,
      withFiltering: true,
      withPagination: true,
      pagination: {
        pageSize: 25
      }
    }
  }
}
