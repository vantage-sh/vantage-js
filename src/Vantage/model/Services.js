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
import {Service} from './Service';

/**
 * The Services model module.
 * @module Vantage/model/Services
 * @version 1.0.0
 */
export class Services {
  /**
   * Constructs a new <code>Services</code>.
   * Services model
   * @alias module:Vantage/model/Services
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Services</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Vantage/model/Services} obj Optional instance to populate.
   * @return {module:Vantage/model/Services} The populated <code>Services</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Services();
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], Object);
      if (data.hasOwnProperty('services'))
        obj.services = ApiClient.convertToType(data['services'], [Service]);
    }
    return obj;
  }
}

/**
 * @member {Object} links
 */
Services.prototype.links = undefined;

/**
 * @member {Array.<module:Vantage/model/Service>} services
 */
Services.prototype.services = undefined;


