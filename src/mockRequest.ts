import { Application, Request } from 'express';
import { Dictionary } from 'express-serve-static-core';

interface MockRequest extends Request {
  accepts: jest.Mock;
  acceptsCharsets: jest.Mock;
  acceptsEncodings: jest.Mock;
  acceptsLanguages: jest.Mock;
  get: jest.Mock;
  header: jest.Mock;
  is: jest.Mock;
  range: jest.Mock;
}

export function mockRequest(options?: Dictionary<any>) {
  const getMethod = jest.fn();

  const mock: unknown = {
    app: {},
    baseUrl: '',
    body: {},
    cookies: {},
    fresh: true,
    hostname: '',
    ip: '127.0.0.1',
    ips: [],
    method: '',
    originalUrl: '',
    params: {},
    path: '',
    protocol: 'https',
    query: {},
    route: {},
    secure: true,
    signedCookies: {},
    stale: false,
    subdomains: [],
    xhr: true,
    accepts: jest.fn(),
    acceptsCharsets: jest.fn(),
    acceptsEncodings: jest.fn(),
    acceptsLanguages: jest.fn(),
    get: getMethod,
    header: getMethod,
    is: jest.fn(),
    range: jest.fn(),
    ...options,
  };
  return mock as MockRequest;
}
