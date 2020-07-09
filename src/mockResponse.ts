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
    append: jest.fn().mockReturnThis(),
    attachment: jest.fn().mockReturnThis(),
    cookie: jest.fn().mockReturnThis(),
    clearCookie: jest.fn().mockReturnThis(),
    download: jest.fn(),
    end: jest.fn(),
    format: jest.fn().mockReturnThis(),
    get: jest.fn(),
    json: jest.fn().mockReturnThis(),
    jsonp: jest.fn().mockReturnThis(),
    links: jest.fn().mockReturnThis(),
    location: jest.fn().mockReturnThis(),
    redirect: jest.fn(),
    render: jest.fn(),
    send: jest.fn().mockReturnThis(),
    sendFile: jest.fn(),
    sendStatus: jest.fn().mockReturnThis(),
    set: jest.fn().mockReturnThis(),
    status: jest.fn().mockReturnThis(),
    type: jest.fn().mockReturnThis(),
    vary: jest.fn().mockReturnThis(),
    ...options,
  };
  return mock as MockResponse;
}
