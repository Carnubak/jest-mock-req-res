import { Response } from 'express';
import { Dictionary } from 'express-serve-static-core';

interface MockResponse extends Response {
  append: jest.Mock;
  attachment: jest.Mock;
  clearCookie: jest.Mock;
  contentType: jest.Mock;
  cookie: jest.Mock;
  download: jest.Mock;
  end: jest.Mock;
  format: jest.Mock;
  get: jest.Mock;
  header: jest.Mock;
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
  const setMethod = jest.fn().mockReturnThis();
  const typeMethod = jest.fn().mockReturnThis();

  const mock: unknown = {
    app: {},
    headersSent: false,
    locals: {},
    append: jest.fn().mockReturnThis(),
    attachment: jest.fn().mockReturnThis(),
    clearCookie: jest.fn().mockReturnThis(),
    contentType: typeMethod,
    cookie: jest.fn().mockReturnThis(),
    download: jest.fn(),
    end: jest.fn(),
    format: jest.fn().mockReturnThis(),
    get: jest.fn(),
    header: setMethod,
    json: jest.fn().mockReturnThis(),
    jsonp: jest.fn().mockReturnThis(),
    links: jest.fn().mockReturnThis(),
    location: jest.fn().mockReturnThis(),
    redirect: jest.fn(),
    render: jest.fn(),
    send: jest.fn().mockReturnThis(),
    sendFile: jest.fn(),
    sendStatus: jest.fn().mockReturnThis(),
    set: setMethod,
    status: jest.fn().mockReturnThis(),
    type: typeMethod,
    vary: jest.fn().mockReturnThis(),
    ...options,
  };
  return mock as MockResponse;
}
