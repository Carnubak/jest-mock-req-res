import { mockRequest } from '../src/mockRequest';
import { commonTests } from './testHelper';

describe('mockRequest()', () => {
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

  const expectedMethods = ['accepts', 'acceptsCharsets', 'acceptsEncodings', 'acceptsLanguages', 'get', 'is', 'range'];

  commonTests({ factory: mockRequest, expectedProperties, expectedMethods });

  it('should include additional provided properties and methods', () => {
    const testFunction = () => {};
    const mock = mockRequest({ new: 'property', newMethod: testFunction });

    expect(mock['new']).toBe('property');
    expect(mock['newMethod']).toBe(testFunction);
  });

  it('should override default values with provided ones', () => {
    const firstMock = mockRequest();
    const secondMock = mockRequest({ path: 'somePath' });

    expect(firstMock.path).toBe('');
    expect(secondMock.path).toBe('somePath');
  });
});
