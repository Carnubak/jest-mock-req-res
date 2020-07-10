# jest-mock-req-res

[Jest](https://jestjs.io) mocks for [Express](https://expressjs.com) `Request` and `Response` objects. Inspired by [mock-req-res](https://www.npmjs.com/package/mock-req-res).

# Motivation

The mocks provided by `mock-req-res` are very useful due to their simplicity of use, but they depend on `sinon`, whereas I've been working in teams that use `jest` as their weapon of choice for testing. That's why I decided to replace the Sinon stubs with Jest spies. In addition, this package is written in Typescript and typings are provided.

Much like the original `mock-req-res` package, the intention of these mocks is to allow you to write properly isolated tests for your Express middleware functions.

Mocks are designed based on the specs for [Express](https://expressjs.com) version 4.x. These mocks should be compatible with version 5.x, as far as I can tell, except that the `host` property is not present in the `Request` interface for version 4. You can add it as a custom property when mocking requests (see below).

# Dependencies

The only dependency (marked as a peer dependency) is [`jest`](https://jestjs.io) version 13.0.0 or newer, as the syntax for creating mocks is different in earlier versions.

# Installation

Simply add this package as a development dependency to your project:

```bash
npm i -D jest-mock-req-res
```

# API

## `mockRequest(options)`

The `mockRequest()` function creates a mock `Request` object. The `options` parameter is an optional object with any keys you want to override or add to the created object. For instance:

```typescript
const req1 = mockRequest({ awesome: 'value' });
console.log(req1.awesome);
// => 'value'

const req2 = mockRequest({ hostname: 'example.com' });
console.log(req2.hostname);
// => 'example.com'
```

The default mock contains the following members:

```typescript
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
get: jest.fn(), // (*)
header: jest.fn(), // (*)
is: jest.fn(),
range: jest.fn(),
```

(\*) The `header()` method is an alias for the `get()` method, [as provided in Express](https://expressjs.com/en/api.html#req.get).

Note that this invariant is not enforced, so if you override either of the `header()` or `get()` methods, this alias will not work as expected.

## `mockResponse()`

The `mockResponse()` function creates a mock `Response` object. The `options` parameter is an optional object with any keys you want to override or add to the created object. For instance:

```typescript
const res1 = mockResponse({ awesome: 'value' });
console.log(res1.awesome);
// => 'value'

const res2 = mockResponse({ locals: { name: 'John Smith' } });
console.log(res2.locals.name);
// => 'John Smith'
```

The default mock contains the following members:

```typescript
    app: {},
    headersSent: false,
    locals: {},
    append: jest.fn().mockReturnThis(),
    attachment: jest.fn().mockReturnThis(),
    clearCookie: jest.fn().mockReturnThis(),
    contentType: jest.fn().mockReturnThis(), // (*)
    cookie: jest.fn().mockReturnThis(),
    download: jest.fn(),
    end: jest.fn(),
    format: jest.fn().mockReturnThis(),
    get: jest.fn(),
    header: jest.fn().mockReturnThis(), // (**)
    json: jest.fn().mockReturnThis(),
    jsonp: jest.fn().mockReturnThis(),
    links: jest.fn().mockReturnThis(),
    location: jest.fn().mockReturnThis(),
    redirect: jest.fn(),
    render: jest.fn(),
    send: jest.fn().mockReturnThis(),
    sendFile: jest.fn(),
    sendStatus: jest.fn().mockReturnThis(),
    set: jest.fn().mockReturnThis(), // (**)
    status: jest.fn().mockReturnThis(),
    type: jest.fn().mockReturnThis(), // (*)
    vary: jest.fn().mockReturnThis(),
```

(\*) The `contentType()` method behaves as an alias to the `type()` method, as [that is the actual Express behavior](https://github.com/expressjs/express/blob/4.x/lib/response.js#L590), though it's not mentioned in the API docs.

(\*\*) The `header()` method is an alias for the `set()` method, [as provided in Express](https://expressjs.com/en/api.html#res.set).

Note that these two invariants are not enforced, so if you override any of the `contentType()`, `header()`, `set()` or `type()` methods, the aliases will not work as expected.
