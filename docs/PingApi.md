# Vantage.PingApi

All URIs are relative to *https://api.vantage.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ping**](PingApi.md#ping) | **GET** /v1/ping | 


<a name="ping"></a>
# **ping**
> Object ping()



This is a health check endpoint that can be used to determine Vantage API healthiness. It will return 200 if everything is running smoothly.

### Example
```javascript
import {Vantage} from 'vantage';
let defaultClient = Vantage.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Vantage.PingApi();
apiInstance.ping().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

