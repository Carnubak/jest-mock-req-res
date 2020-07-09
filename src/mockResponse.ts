import { Response } from 'express';
import { Dictionary } from 'express-serve-static-core';

interface MockResponse extends Response {
  append: jest.Mock;
  attachment: jest.Mock;
  cookie: jest.Mock;
  clearCookie: jest.Mock;
  download: jest.Mock;
  end: jest.Mock;
  format: jest.Mock;
  get: jest.Mock;
  json: jest.Mock;
  jsonp: jest.Mock;
  links: jest.Mock;
  location: jest.Mock;
  redirect: jest.Mock;
  render: jest.Mock;
  send: jest.Mock;
  sendFile: jest.Mock;
  sendStatus: jest.Mock;
  set: jest.Mock;
  status: jest.Mock;
  type: jest.Mock;
  vary: jest.Mock;
}

export function mockResponse(options?: Dictionary<any>) {
  const mock: unknown = {
    app: {},
    headersSent: false,
    locals: {},
    append: jest.fn(),
    attachment: jest.fn(),
    cookie: jest.fn(),
    clearCookie: jest.fn(),
    download: jest.fn(),
    end: jest.fn(),
    format: jest.fn(),
    get: jest.fn(),
    json: jest.fn(),
    jsonp: jest.fn(),
    links: jest.fn(),
    location: jest.fn(),
    redirect: jest.fn(),
    render: jest.fn(),
    send: jest.fn(),
    sendFile: jest.fn(),
    sendStatus: jest.fn(),
    set: jest.fn(),
    status: jest.fn(),
    type: jest.fn(),
    vary: jest.fn(),
    ...options,
  };
  return mock as MockResponse;
}
