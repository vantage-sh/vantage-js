/*
 * Vantage
 * Vantage API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@vantage.sh
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.21
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from "../ApiClient";
import {Price} from '../model/Price';
import {Prices} from '../model/Prices';
import {Product} from '../model/Product';
import {Products} from '../model/Products';
import {Providers} from '../model/Providers';
import {Services} from '../model/Services';

/**
* Prices service.
* @module Vantage/Vantage/PricesApi
* @version 1.0.0
*/
export class PricesApi {

    /**
    * Constructs a new PricesApi. 
    * @alias module:Vantage/Vantage/PricesApi
    * @class
    * @param {module:Vantage/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:Vantage/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns a price
     * @param {String} productId 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Vantage/model/Price} and HTTP response
     */
    getPriceWithHttpInfo(productId, id) {
      let postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getPrice");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPrice");
      }


      let pathParams = {
        'product_id': productId,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Price;

      return this.apiClient.callApi(
        '/v1/products/{product_id}/prices/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns a price
     * @param {String} productId 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Vantage/model/Price}
     */
    getPrice(productId, id) {
      return this.getPriceWithHttpInfo(productId, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return available Prices across all Regions for a Product.
     * @param {String} productId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of results to return.
     * @param {Number} opts.limit The amount of results to return. The maximum is 1000
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Vantage/model/Prices} and HTTP response
     */
    getPricesWithHttpInfo(productId, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getPrices");
      }


      let pathParams = {
        'product_id': productId
      };
      let queryParams = {
        'page': opts['page'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Prices;

      return this.apiClient.callApi(
        '/v1/products/{product_id}/prices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Return available Prices across all Regions for a Product.
     * @param {String} productId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of results to return.
     * @param {Number} opts.limit The amount of results to return. The maximum is 1000
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Vantage/model/Prices}
     */
    getPrices(productId, opts) {
      return this.getPricesWithHttpInfo(productId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return a product
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Vantage/model/Product} and HTTP response
     */
    getProductWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProduct");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Product;

      return this.apiClient.callApi(
        '/v1/products/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Return a product
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Vantage/model/Product}
     */
    getProduct(id) {
      return this.getProductWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return available Products for a Service. For example, with a Provider of AWS and a Service of EC2, Products will be a list of all EC2 Instances. By default, this endpoint returns all Products across all Services and Providers but has optional query parameters for filtering listed below.
     * @param {Object} opts Optional parameters
     * @param {String} opts.providerId Query by Provider to list all Products across all Services for a Provider. e.g. aws
     * @param {String} opts.serviceId Query by Service to list all Products for a specific provider service. e.g. aws-ec2
     * @param {String} opts.name Query by name of the Product to see a list of products which match that name. e.g. m5a.16xlarge
     * @param {Number} opts.page The page of results to return.
     * @param {Number} opts.limit The amount of results to return. The maximum is 1000
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Vantage/model/Products} and HTTP response
     */
    getProductsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'provider_id': opts['providerId'],
        'service_id': opts['serviceId'],
        'name': opts['name'],
        'page': opts['page'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Products;

      return this.apiClient.callApi(
        '/v1/products', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Return available Products for a Service. For example, with a Provider of AWS and a Service of EC2, Products will be a list of all EC2 Instances. By default, this endpoint returns all Products across all Services and Providers but has optional query parameters for filtering listed below.
     * @param {Object} opts Optional parameters
     * @param {String} opts.providerId Query by Provider to list all Products across all Services for a Provider. e.g. aws
     * @param {String} opts.serviceId Query by Service to list all Products for a specific provider service. e.g. aws-ec2
     * @param {String} opts.name Query by name of the Product to see a list of products which match that name. e.g. m5a.16xlarge
     * @param {Number} opts.page The page of results to return.
     * @param {Number} opts.limit The amount of results to return. The maximum is 1000
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Vantage/model/Products}
     */
    getProducts(opts) {
      return this.getProductsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Providers are cloud infrastructure and service providers from which all cloud prices are derived. You can think of example Providers as being AWS, GCP, Cloudflare or Datadog. Currently, Vantage only supports a single provider of AWS but over time more will be added. Use this endpoint to retrieve a provider id for other API calls.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of results to return.
     * @param {Number} opts.limit The amount of results to return. The maximum is 1000
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Vantage/model/Providers} and HTTP response
     */
    getProvidersWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Providers;

      return this.apiClient.callApi(
        '/v1/providers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Providers are cloud infrastructure and service providers from which all cloud prices are derived. You can think of example Providers as being AWS, GCP, Cloudflare or Datadog. Currently, Vantage only supports a single provider of AWS but over time more will be added. Use this endpoint to retrieve a provider id for other API calls.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of results to return.
     * @param {Number} opts.limit The amount of results to return. The maximum is 1000
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Vantage/model/Providers}
     */
    getProviders(opts) {
      return this.getProvidersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return all Services. Examples of Services are EC2 for AWS. This endpoint will return all Services by default but you have the ability to filter Services by Provider using the optional query parameter documented below.
     * @param {Object} opts Optional parameters
     * @param {String} opts.providerId Query services for a specific provider. e.g. aws
     * @param {Number} opts.page The page of results to return.
     * @param {Number} opts.limit The amount of results to return. The maximum is 1000
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Vantage/model/Services} and HTTP response
     */
    getServicesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'provider_id': opts['providerId'],
        'page': opts['page'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Services;

      return this.apiClient.callApi(
        '/v1/services', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Return all Services. Examples of Services are EC2 for AWS. This endpoint will return all Services by default but you have the ability to filter Services by Provider using the optional query parameter documented below.
     * @param {Object} opts Optional parameters
     * @param {String} opts.providerId Query services for a specific provider. e.g. aws
     * @param {Number} opts.page The page of results to return.
     * @param {Number} opts.limit The amount of results to return. The maximum is 1000
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Vantage/model/Services}
     */
    getServices(opts) {
      return this.getServicesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
