/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetTransacAggregatedSmsReport = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetTransacAggregatedSmsReport model module.
   * @module model/GetTransacAggregatedSmsReport
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>GetTransacAggregatedSmsReport</code>.
   * @alias module:model/GetTransacAggregatedSmsReport
   * @class
   * @param range {String} Time frame of the report
   * @param requests {Number} Number of requests for the timeframe
   * @param delivered {Number} Number of delivered SMS for the timeframe
   * @param hardBounces {Number} Number of hardbounces for the timeframe
   * @param softBounces {Number} Number of softbounces for the timeframe
   * @param blocked {Number} Number of blocked contact for the timeframe
   * @param unsubscribed {Number} Number of unsubscription for the timeframe
   * @param replied {Number} Number of answered SMS for the timeframe
   * @param accepted {Number} Number of accepted for the timeframe
   * @param rejected {Number} Number of rejected for the timeframe
   */
  var exports = function(range, requests, delivered, hardBounces, softBounces, blocked, unsubscribed, replied, accepted, rejected) {
    var _this = this;

    _this['range'] = range;
    _this['requests'] = requests;
    _this['delivered'] = delivered;
    _this['hardBounces'] = hardBounces;
    _this['softBounces'] = softBounces;
    _this['blocked'] = blocked;
    _this['unsubscribed'] = unsubscribed;
    _this['replied'] = replied;
    _this['accepted'] = accepted;
    _this['rejected'] = rejected;
  };

  /**
   * Constructs a <code>GetTransacAggregatedSmsReport</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetTransacAggregatedSmsReport} obj Optional instance to populate.
   * @return {module:model/GetTransacAggregatedSmsReport} The populated <code>GetTransacAggregatedSmsReport</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('range')) {
        obj['range'] = ApiClient.convertToType(data['range'], 'String');
      }
      if (data.hasOwnProperty('requests')) {
        obj['requests'] = ApiClient.convertToType(data['requests'], 'Number');
      }
      if (data.hasOwnProperty('delivered')) {
        obj['delivered'] = ApiClient.convertToType(data['delivered'], 'Number');
      }
      if (data.hasOwnProperty('hardBounces')) {
        obj['hardBounces'] = ApiClient.convertToType(data['hardBounces'], 'Number');
      }
      if (data.hasOwnProperty('softBounces')) {
        obj['softBounces'] = ApiClient.convertToType(data['softBounces'], 'Number');
      }
      if (data.hasOwnProperty('blocked')) {
        obj['blocked'] = ApiClient.convertToType(data['blocked'], 'Number');
      }
      if (data.hasOwnProperty('unsubscribed')) {
        obj['unsubscribed'] = ApiClient.convertToType(data['unsubscribed'], 'Number');
      }
      if (data.hasOwnProperty('replied')) {
        obj['replied'] = ApiClient.convertToType(data['replied'], 'Number');
      }
      if (data.hasOwnProperty('accepted')) {
        obj['accepted'] = ApiClient.convertToType(data['accepted'], 'Number');
      }
      if (data.hasOwnProperty('rejected')) {
        obj['rejected'] = ApiClient.convertToType(data['rejected'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Time frame of the report
   * @member {String} range
   */
  exports.prototype['range'] = undefined;
  /**
   * Number of requests for the timeframe
   * @member {Number} requests
   */
  exports.prototype['requests'] = undefined;
  /**
   * Number of delivered SMS for the timeframe
   * @member {Number} delivered
   */
  exports.prototype['delivered'] = undefined;
  /**
   * Number of hardbounces for the timeframe
   * @member {Number} hardBounces
   */
  exports.prototype['hardBounces'] = undefined;
  /**
   * Number of softbounces for the timeframe
   * @member {Number} softBounces
   */
  exports.prototype['softBounces'] = undefined;
  /**
   * Number of blocked contact for the timeframe
   * @member {Number} blocked
   */
  exports.prototype['blocked'] = undefined;
  /**
   * Number of unsubscription for the timeframe
   * @member {Number} unsubscribed
   */
  exports.prototype['unsubscribed'] = undefined;
  /**
   * Number of answered SMS for the timeframe
   * @member {Number} replied
   */
  exports.prototype['replied'] = undefined;
  /**
   * Number of accepted for the timeframe
   * @member {Number} accepted
   */
  exports.prototype['accepted'] = undefined;
  /**
   * Number of rejected for the timeframe
   * @member {Number} rejected
   */
  exports.prototype['rejected'] = undefined;



  return exports;
}));


