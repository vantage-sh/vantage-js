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
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The Product model module.
 * @module Vantage/model/Product
 * @version 1.0.0
 */
export class Product {
  /**
   * Constructs a new <code>Product</code>.
   * Product model
   * @alias module:Vantage/model/Product
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Vantage/model/Product} obj Optional instance to populate.
   * @return {module:Vantage/model/Product} The populated <code>Product</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Product();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('category'))
        obj.category = ApiClient.convertToType(data['category'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('service_id'))
        obj.serviceId = ApiClient.convertToType(data['service_id'], 'String');
      if (data.hasOwnProperty('provider_id'))
        obj.providerId = ApiClient.convertToType(data['provider_id'], 'String');
      if (data.hasOwnProperty('details'))
        obj.details = ApiClient.convertToType(data['details'], Object);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Product.prototype.id = undefined;

/**
 * The category of the cloud product
 * @member {String} category
 */
Product.prototype.category = undefined;

/**
 * The common name of the product.
 * @member {String} name
 */
Product.prototype.name = undefined;

/**
 * A unique slug for the service the product belongs to.
 * @member {String} serviceId
 */
Product.prototype.serviceId = undefined;

/**
 * A unique slug for the provider the product belongs to.
 * @member {String} providerId
 */
Product.prototype.providerId = undefined;

/**
 * An object of metadata about the product.
 * @member {Object} details
 */
Product.prototype.details = undefined;


