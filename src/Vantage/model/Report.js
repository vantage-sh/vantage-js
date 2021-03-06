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

/**
 * The Report model module.
 * @module Vantage/model/Report
 * @version 1.0.0
 */
export class Report {
  /**
   * Constructs a new <code>Report</code>.
   * Report model
   * @alias module:Vantage/model/Report
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Report</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Vantage/model/Report} obj Optional instance to populate.
   * @return {module:Vantage/model/Report} The populated <code>Report</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Report();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('earliest_cost_date'))
        obj.earliestCostDate = ApiClient.convertToType(data['earliest_cost_date'], 'String');
      if (data.hasOwnProperty('latest_cost_date'))
        obj.latestCostDate = ApiClient.convertToType(data['latest_cost_date'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'String');
      if (data.hasOwnProperty('workspace'))
        obj.workspace = ApiClient.convertToType(data['workspace'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Report.prototype.id = undefined;

/**
 * The title of the cost report.
 * @member {String} title
 */
Report.prototype.title = undefined;

/**
 * The date and time, in UTC, the report was created. ISO 8601 Formatted - 2021-01-01 or 2021-01-01T00:00:00Z.
 * @member {String} earliestCostDate
 */
Report.prototype.earliestCostDate = undefined;

/**
 * The date and time, in UTC, the report was created. ISO 8601 Formatted - 2021-07-31 or 2021-07-31T00:00:00Z.
 * @member {String} latestCostDate
 */
Report.prototype.latestCostDate = undefined;

/**
 * The date and time, in UTC, the report was created. ISO 8601 Formatted - 2021-07-15 or 2021-07-15T00:00:00Z.
 * @member {String} createdAt
 */
Report.prototype.createdAt = undefined;

/**
 * The name of the workspace the report is a part of.
 * @member {String} workspace
 */
Report.prototype.workspace = undefined;


