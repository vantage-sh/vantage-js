# vantage

Vantage - JavaScript client for vantage
Vantage API
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 0.0.1-beta.5
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://www.vantage.sh](https://www.vantage.sh)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm i @vantage-sh/vantage-client
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/vantage-js
then install it via:

```shell
    npm install YOUR_USERNAME/vantage-js --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Vantage = require('@vantage-sh/vantage-client');

var defaultClient = Vantage.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

var api = new Vantage.PingApi()
api.ping().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://api.vantage.sh*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Vantage.PingApi* | [**ping**](docs/PingApi.md#ping) | **GET** /v1/ping | 
*Vantage.PricesApi* | [**getPrice**](docs/PricesApi.md#getPrice) | **GET** /v1/products/{product_id}/prices/{id} | 
*Vantage.PricesApi* | [**getPrices**](docs/PricesApi.md#getPrices) | **GET** /v1/products/{product_id}/prices | 
*Vantage.PricesApi* | [**getProduct**](docs/PricesApi.md#getProduct) | **GET** /v1/products/{id} | 
*Vantage.PricesApi* | [**getProducts**](docs/PricesApi.md#getProducts) | **GET** /v1/products | 
*Vantage.PricesApi* | [**getProviders**](docs/PricesApi.md#getProviders) | **GET** /v1/providers | 
*Vantage.PricesApi* | [**getServices**](docs/PricesApi.md#getServices) | **GET** /v1/services | 


## Documentation for Models

 - [Vantage.Price](docs/Price.md)
 - [Vantage.Prices](docs/Prices.md)
 - [Vantage.Product](docs/Product.md)
 - [Vantage.Products](docs/Products.md)
 - [Vantage.Provider](docs/Provider.md)
 - [Vantage.Providers](docs/Providers.md)
 - [Vantage.Service](docs/Service.md)
 - [Vantage.Services](docs/Services.md)


## Documentation for Authorization


### oauth2

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: 
  - read: Grants read access

