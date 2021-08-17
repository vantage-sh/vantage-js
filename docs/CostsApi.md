# Vantage.CostsApi

All URIs are relative to *https://api.vantage.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCosts**](CostsApi.md#getCosts) | **GET** /v1/reports/{report_id}/costs | 
[**getReport**](CostsApi.md#getReport) | **GET** /v1/reports/{report_id} | 
[**getReports**](CostsApi.md#getReports) | **GET** /v1/reports | 


<a name="getCosts"></a>
# **getCosts**
> Costs getCosts(reportId, opts)



Return available Costs for the specified Cost Report and optional time period. If no time period is specified it will return all available costs for the report.

### Example
```javascript
import {Vantage} from 'vantage';
let defaultClient = Vantage.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Vantage.CostsApi();

let reportId = "reportId_example"; // String | 

let opts = { 
  'startDate': "startDate_example", // String | Query costs by the first date you would like to filter from. ISO 8601 Formatted - 2021-07-15 or 2021-07-15T19:20:48+00:00.
  'endDate': "endDate_example", // String | Query costs by the last date you would like to filter to. ISO 8601 Formatted - 2021-07-15 or 2021-07-15T19:20:48+00:00.
  'page': 2, // Number | The page of results to return.
  'limit': 500 // Number | The amount of results to return. The maximum is 1000
};
apiInstance.getCosts(reportId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | **String**|  | 
 **startDate** | **String**| Query costs by the first date you would like to filter from. ISO 8601 Formatted - 2021-07-15 or 2021-07-15T19:20:48+00:00. | [optional] 
 **endDate** | **String**| Query costs by the last date you would like to filter to. ISO 8601 Formatted - 2021-07-15 or 2021-07-15T19:20:48+00:00. | [optional] 
 **page** | **Number**| The page of results to return. | [optional] 
 **limit** | **Number**| The amount of results to return. The maximum is 1000 | [optional] 

### Return type

[**Costs**](Costs.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReport"></a>
# **getReport**
> Report getReport(reportId)



Return a Cost Report.

### Example
```javascript
import {Vantage} from 'vantage';
let defaultClient = Vantage.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Vantage.CostsApi();

let reportId = "reportId_example"; // String | 

apiInstance.getReport(reportId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | **String**|  | 

### Return type

[**Report**](Report.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReports"></a>
# **getReports**
> Reports getReports(opts)



Return all Cost Reports.

### Example
```javascript
import {Vantage} from 'vantage';
let defaultClient = Vantage.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Vantage.CostsApi();

let opts = { 
  'page': 56, // Number | The page of results to return.
  'limit': 56 // Number | The amount of results to return. The maximum is 1000
};
apiInstance.getReports(opts).then((data) => {
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

[**Reports**](Reports.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

