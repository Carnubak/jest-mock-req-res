import { mockResponse } from '../src';
import { commonTests } from './testHelper';

describe('mockResponse()', () => {
  const expectedProperties = [
    { name: 'app', type: Object },
    { name: 'headersSent', type: Boolean },
    { name: 'locals', type: Object },
  ];

  const expectedMethods = [
    'append',
    'attachment',
    'cookie',
    'clearCookie',
    'download',
    'end',
    'format',
    'get',
    'json',
    'jsonp',
    'links',
    'location',
    'redirect',
    'render',
    'send',
    'sendFile',
    'sendStatus',
    'set',
    'status',
    'type',
    'vary',
  ];

  const chainableMethods = [
    'append',
    'attachment',
    'clearCookie',
    'cookie',
    'format',
    'json',
    'jsonp',
    'links',
    'location',
    'send',
    'sendStatus',
    'set',
    'status',
    'type',
    'vary',
  ];

  commonTests({ factory: mockResponse, expectedProperties, expectedMethods });

  chainableMethods.forEach(method => {
    it(`should make the ${method}() method chainable`, () => {
      const mock = mockResponse();

      expect(mock[method]()).toBe(mock);
    });
  });

  it('should alias the set() method as header()', () => {
    const mock = mockResponse();

    expect(mock.header).toBe(mock.set);
  });

  it('should alias the type() method as contentType()', () => {
    const mock = mockResponse();

    expect(mock.contentType).toBe(mock.type);
  });
});
