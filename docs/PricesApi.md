# Vantage.PricesApi

All URIs are relative to *https://api.vantage.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPrice**](PricesApi.md#getPrice) | **GET** /v1/products/{product_id}/prices/{id} | 
[**getPrices**](PricesApi.md#getPrices) | **GET** /v1/products/{product_id}/prices | 
[**getProduct**](PricesApi.md#getProduct) | **GET** /v1/products/{id} | 
[**getProducts**](PricesApi.md#getProducts) | **GET** /v1/products | 
[**getProviders**](PricesApi.md#getProviders) | **GET** /v1/providers | 
[**getServices**](PricesApi.md#getServices) | **GET** /v1/services | 


<a name="getPrice"></a>
# **getPrice**
> Price getPrice(productId, id)



Returns a price

### Example
```javascript
import {Vantage} from 'vantage';
let defaultClient = Vantage.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Vantage.PricesApi();

let productId = "productId_example"; // String | 

let id = "id_example"; // String | 

apiInstance.getPrice(productId, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**Price**](Price.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPrices"></a>
# **getPrices**
> Prices getPrices(productId, opts)



Return available Prices across all Regions for a Product.

### Example
```javascript
import {Vantage} from 'vantage';
let defaultClient = Vantage.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Vantage.PricesApi();

let productId = "productId_example"; // String | 

let opts = { 
  'page': 2, // Number | The page of results to return.
  'limit': 500 // Number | The amount of results to return. The maximum is 1000
};
apiInstance.getPrices(productId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**|  | 
 **page** | **Number**| The page of results to return. | [optional] 
 **limit** | **Number**| The amount of results to return. The maximum is 1000 | [optional] 

### Return type

[**Prices**](Prices.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProduct"></a>
# **getProduct**
> Product getProduct(id)



Return a product

### Example
```javascript
import {Vantage} from 'vantage';
let defaultClient = Vantage.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Vantage.PricesApi();

let id = "id_example"; // String | 

apiInstance.getProduct(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**Product**](Product.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProducts"></a>
# **getProducts**
> Products getProducts(opts)



Return available Products for a Service. For example, with a Provider of AWS and a Service of EC2, Products will be a list of all EC2 Instances. By default, this endpoint returns all Products across all Services and Providers but has optional query parameters for filtering listed below.

### Example
```javascript
import {Vantage} from 'vantage';
let defaultClient = Vantage.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Vantage.PricesApi();

let opts = { 
  'providerId': "providerId_example", // String | Query by Provider to list all Products across all Services for a Provider. e.g. aws
  'serviceId': "serviceId_example", // String | Query by Service to list all Products for a specific provider service. e.g. aws-ec2
  'name': "name_example", // String | Query by name of the Product to see a list of products which match that name. e.g. m5a.16xlarge
  'page': 2, // Number | The page of results to return.
  'limit': 500 // Number | The amount of results to return. The maximum is 1000
};
apiInstance.getProducts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | **String**| Query by Provider to list all Products across all Services for a Provider. e.g. aws | [optional] 
 **serviceId** | **String**| Query by Service to list all Products for a specific provider service. e.g. aws-ec2 | [optional] 
 **name** | **String**| Query by name of the Product to see a list of products which match that name. e.g. m5a.16xlarge | [optional] 
 **page** | **Number**| The page of results to return. | [optional] 
 **limit** | **Number**| The amount of results to return. The maximum is 1000 | [optional] 

### Return type

[**Products**](Products.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProviders"></a>
# **getProviders**
> Providers getProviders(opts)



Providers are cloud infrastructure and service providers from which all cloud prices are derived. You can think of example Providers as being AWS, GCP, Cloudflare or Datadog. Currently, Vantage only supports a single provider of AWS but over time more will be added. Use this endpoint to retrieve a provider id for other API calls.

### Example
```javascript
import {Vantage} from 'vantage';
let defaultClient = Vantage.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Vantage.PricesApi();

let opts = { 
  'page': 2, // Number | The page of results to return.
  'limit': 500 // Number | The amount of results to return. The maximum is 1000
};
apiInstance.getProviders(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The page of results to return. | [optional] 
 **limit** | **Number**| The amount of results to return. The maximum is 1000 | [optional] 

### Return type

[**Providers**](Providers.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getServices"></a>
# **getServices**
> Services getServices(opts)



Return all Services. Examples of Services are EC2 for AWS. This endpoint will return all Services by default but you have the ability to filter Services by Provider using the optional query parameter documented below.

### Example
```javascript
import {Vantage} from 'vantage';
let defaultClient = Vantage.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Vantage.PricesApi();

let opts = { 
  'providerId': "providerId_example", // String | Query services for a specific provider. e.g. aws
  'page': 2, // Number | The page of results to return.
  'limit': 500 // Number | The amount of results to return. The maximum is 1000
};
apiInstance.getServices(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | **String**| Query services for a specific provider. e.g. aws | [optional] 
 **page** | **Number**| The page of results to return. | [optional] 
 **limit** | **Number**| The amount of results to return. The maximum is 1000 | [optional] 

### Return type

[**Services**](Services.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

