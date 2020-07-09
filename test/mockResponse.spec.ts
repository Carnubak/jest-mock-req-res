import { mockResponse } from '../src/mockResponse';

describe('mockResponse()', () => {
  it('should return an object', () => {
    expect(mockResponse()).toEqual(expect.any(Object));
  });

  describe('the returned object', () => {
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

    expectedProperties.forEach(({ name, type }) => {
      it(`should provide a default value of type ${type} for ${name}`, () => {
        const mock = mockResponse();
        expect(mock[name]).toEqual(expect.any(type));
      });
    });

    expectedMethods.forEach(method => {
      it(`should provide a spy for ${method}()`, () => {
        const mock = mockResponse();

        expect(mock[method]).toEqual(expect.any(Function));
        expect(mock[method].mock).toBeDefined();
      });
    });
  });
});
