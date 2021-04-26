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
 * The Price model module.
 * @module Vantage/model/Price
 * @version 1.0.0
 */
export class Price {
  /**
   * Constructs a new <code>Price</code>.
   * Price model
   * @alias module:Vantage/model/Price
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Price</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Vantage/model/Price} obj Optional instance to populate.
   * @return {module:Vantage/model/Price} The populated <code>Price</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Price();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('unit'))
        obj.unit = ApiClient.convertToType(data['unit'], 'String');
      if (data.hasOwnProperty('region'))
        obj.region = ApiClient.convertToType(data['region'], 'String');
      if (data.hasOwnProperty('rate_type'))
        obj.rateType = ApiClient.convertToType(data['rate_type'], 'String');
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('details'))
        obj.details = ApiClient.convertToType(data['details'], Object);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Price.prototype.id = undefined;

/**
 * The unit in which the amount is billed.
 * @member {String} unit
 */
Price.prototype.unit = undefined;

/**
 * The region the price is specific to.
 * @member {String} region
 */
Price.prototype.region = undefined;

/**
 * The part of the product the price applies to. (compute, transfer, etc..)
 * @member {String} rateType
 */
Price.prototype.rateType = undefined;

/**
 * The currency of the amount.
 * @member {String} currency
 */
Price.prototype.currency = undefined;

/**
 * The amount of money this specific product price costs.
 * @member {Number} amount
 */
Price.prototype.amount = undefined;

/**
 * Service specific metadata.
 * @member {Object} details
 */
Price.prototype.details = undefined;


