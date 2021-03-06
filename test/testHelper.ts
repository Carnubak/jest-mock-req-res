interface TestParameters {
  factory: Function;
  expectedProperties: Array<{
    name: string;
    type: any;
  }>;
  expectedMethods: Array<string>;
}

export function commonTests({ factory, expectedMethods, expectedProperties }: TestParameters) {
  it('should return an object', () => {
    expect(factory()).toEqual(expect.any(Object));
  });

  describe('the returned object', () => {
    expectedProperties.forEach(({ name, type }) => {
      it(`should provide a default value of type ${type} for ${name}`, () => {
        const mock = factory();
        expect(mock[name]).toEqual(expect.any(type));
      });
    });
  });

  expectedMethods.forEach(method => {
    it(`should provide a spy for ${method}()`, () => {
      const mock = factory();

      expect(mock[method]).toEqual(expect.any(Function));
      expect(mock[method].mock).toBeDefined();
    });
  });

  it('should include additional provided properties and methods', () => {
    const testFunction = () => {};
    const mock = factory({ new: 'property', newMethod: testFunction });

    expect(mock['new']).toBe('property');
    expect(mock['newMethod']).toBe(testFunction);
  });

  it('should override default values with provided ones', () => {
    const firstMock = factory();
    const secondMock = factory({ app: { test: 'application' } });

    expect(firstMock.app).toEqual({});
    expect(secondMock.app).toEqual({ test: 'application' });
  });
}
