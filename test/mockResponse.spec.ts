import { mockResponse } from '../src/mockResponse';
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

  commonTests({ factory: mockResponse, expectedProperties, expectedMethods });
});
