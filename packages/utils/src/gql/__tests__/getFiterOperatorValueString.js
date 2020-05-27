import getFiterOperatorValueString from '../getFiterOperatorValueString';

describe('getFiterOperatorValueString', () => {
  it('should return a proper string for non-object input', () => {
    const filterValue = 'filterValue';

    const result = getFiterOperatorValueString(filterValue);

    expect(result).toEqual(`operator: like, value: "%${filterValue}%"`);
  });

  it('should return a proper string for object input (dates)', () => {
    const filterValue = {
      from: 'from',
      to: 'to',
    };

    const result = getFiterOperatorValueString(filterValue);

    expect(result).toEqual(`operator: between, value: ["${filterValue.from}", "${filterValue.to}"]`);
  });

  it('should return a proper string for object input (dates) with empty props', () => {
    const filterValue = {
      from: undefined,
      to: undefined,
    };

    const result = getFiterOperatorValueString(filterValue);

    expect(result).toEqual("operator: between, value: [false, false]");
  });
});
