import { mockRequest } from '../src/mockRequest';

describe('mockRequest()', () => {
  it('should return an object', () => {
    expect(mockRequest()).toEqual(expect.any(Object));
  });

  describe('the returned object', () => {
    const expectedProperties = [
      { name: 'app', type: Object },
      { name: 'baseUrl', type: String },
      { name: 'body', type: Object },
      { name: 'cookies', type: Object },
      { name: 'fresh', type: Boolean },
      { name: 'hostname', type: String },
      { name: 'ip', type: String },
      { name: 'ips', type: Array },
      { name: 'method', type: String },
      { name: 'originalUrl', type: String },
      { name: 'params', type: Object },
      { name: 'path', type: String },
      { name: 'protocol', type: String },
      { name: 'query', type: Object },
      { name: 'route', type: Object },
      { name: 'secure', type: Boolean },
      { name: 'signedCookies', type: Object },
      { name: 'stale', type: Boolean },
      { name: 'subdomains', type: Array },
      { name: 'xhr', type: Boolean },
    ];

    const expectedMethods = [
      'accepts',
      'acceptsCharsets',
      'acceptsEncodings',
      'acceptsLanguages',
      'get',
      'is',
      'range',
    ];

    expectedProperties.forEach(({ name, type }) => {
      it(`should provide a default value of type ${type} for ${name}`, () => {
        const mock = mockRequest();

        expect(mock[name]).toEqual(expect.any(type));
      });
    });

    expectedMethods.forEach(method => {
      it(`should provide a spy for ${method}()`, () => {
        const mock = mockRequest();

        expect(mock[method]).toEqual(expect.any(Function));
        expect(mock[method].mock).toBeDefined();
      });
    });
  });
});
