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
import {Provider} from './Provider';

/**
 * The Providers model module.
 * @module Vantage/model/Providers
 * @version 1.0.0
 */
export class Providers {
  /**
   * Constructs a new <code>Providers</code>.
   * Providers model
   * @alias module:Vantage/model/Providers
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Providers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Vantage/model/Providers} obj Optional instance to populate.
   * @return {module:Vantage/model/Providers} The populated <code>Providers</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Providers();
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], Object);
      if (data.hasOwnProperty('providers'))
        obj.providers = ApiClient.convertToType(data['providers'], [Provider]);
    }
    return obj;
  }
}

/**
 * @member {Object} links
 */
Providers.prototype.links = undefined;

/**
 * @member {Array.<module:Vantage/model/Provider>} providers
 */
Providers.prototype.providers = undefined;


