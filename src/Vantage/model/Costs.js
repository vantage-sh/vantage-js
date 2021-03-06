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

import {ApiClient} from '../ApiClient';
import {Cost} from './Cost';

/**
 * The Costs model module.
 * @module Vantage/model/Costs
 * @version 1.0.0
 */
export class Costs {
  /**
   * Constructs a new <code>Costs</code>.
   * Costs model
   * @alias module:Vantage/model/Costs
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Costs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Vantage/model/Costs} obj Optional instance to populate.
   * @return {module:Vantage/model/Costs} The populated <code>Costs</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Costs();
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], Object);
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'String');
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
      if (data.hasOwnProperty('costs'))
        obj.costs = ApiClient.convertToType(data['costs'], [Cost]);
    }
    return obj;
  }
}

/**
 * @member {Object} links
 */
Costs.prototype.links = undefined;

/**
 * The sum of all amounts of costs for the entire report for the requested period.
 * @member {String} total
 */
Costs.prototype.total = undefined;

/**
 * The currency both the total and cost amount values are represented in. e.g. USD
 * @member {String} currency
 */
Costs.prototype.currency = undefined;

/**
 * @member {Array.<module:Vantage/model/Cost>} costs
 */
Costs.prototype.costs = undefined;


