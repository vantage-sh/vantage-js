# Vantage.PingApi

All URIs are relative to *https://api.vantage.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ping**](PingApi.md#ping) | **GET** /v1/ping | 


<a name="ping"></a>
# **ping**
> ping()



This is a health check endpoint that can be used to determine Vantage API healthiness. It will return a 200 success with the raw text of \"pong\" if everything is running smoothly.

### Example
```javascript
import {Vantage} from '@vantage-sh/vantage-client';
let defaultClient = Vantage.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Vantage.PingApi();
apiInstance.ping().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

