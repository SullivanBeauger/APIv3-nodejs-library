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
    define(['ApiClient', 'model/InlineResponse2001ApiKeys', 'model/InlineResponse2001Credits', 'model/InlineResponse2001Ips', 'model/InlineResponse2001Statistics'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2001ApiKeys'), require('./InlineResponse2001Credits'), require('./InlineResponse2001Ips'), require('./InlineResponse2001Statistics'));
  } else {
    // Browser globals (root is window)
    if (!root.SendinBlueApi) {
      root.SendinBlueApi = {};
    }
    root.SendinBlueApi.InlineResponse2002 = factory(root.SendinBlueApi.ApiClient, root.SendinBlueApi.InlineResponse2001ApiKeys, root.SendinBlueApi.InlineResponse2001Credits, root.SendinBlueApi.InlineResponse2001Ips, root.SendinBlueApi.InlineResponse2001Statistics);
  }
}(this, function(ApiClient, InlineResponse2001ApiKeys, InlineResponse2001Credits, InlineResponse2001Ips, InlineResponse2001Statistics) {
  'use strict';




  /**
   * The InlineResponse2002 model module.
   * @module model/InlineResponse2002
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>InlineResponse2002</code>.
   * @alias module:model/InlineResponse2002
   * @class
   * @param email {String} Login Email
   * @param firstName {String} First Name
   * @param lastName {String} Last Name
   * @param companyName {String} Name of the company
   * @param password {String} The encrypted password of child account
   */
  var exports = function(email, firstName, lastName, companyName, password) {
    var _this = this;

    _this['email'] = email;
    _this['firstName'] = firstName;
    _this['lastName'] = lastName;
    _this['companyName'] = companyName;


    _this['password'] = password;


  };

  /**
   * Constructs a <code>InlineResponse2002</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2002} obj Optional instance to populate.
   * @return {module:model/InlineResponse2002} The populated <code>InlineResponse2002</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('companyName')) {
        obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
      }
      if (data.hasOwnProperty('credits')) {
        obj['credits'] = InlineResponse2001Credits.constructFromObject(data['credits']);
      }
      if (data.hasOwnProperty('statistics')) {
        obj['statistics'] = InlineResponse2001Statistics.constructFromObject(data['statistics']);
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('ips')) {
        obj['ips'] = ApiClient.convertToType(data['ips'], [InlineResponse2001Ips]);
      }
      if (data.hasOwnProperty('apiKeys')) {
        obj['apiKeys'] = ApiClient.convertToType(data['apiKeys'], [InlineResponse2001ApiKeys]);
      }
    }
    return obj;
  }

  /**
   * Login Email
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * First Name
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * Last Name
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * Name of the company
   * @member {String} companyName
   */
  exports.prototype['companyName'] = undefined;
  /**
   * @member {module:model/InlineResponse2001Credits} credits
   */
  exports.prototype['credits'] = undefined;
  /**
   * @member {module:model/InlineResponse2001Statistics} statistics
   */
  exports.prototype['statistics'] = undefined;
  /**
   * The encrypted password of child account
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * IP(s) associated to a child account user
   * @member {Array.<module:model/InlineResponse2001Ips>} ips
   */
  exports.prototype['ips'] = undefined;
  /**
   * API Keys associated to child account
   * @member {Array.<module:model/InlineResponse2001ApiKeys>} apiKeys
   */
  exports.prototype['apiKeys'] = undefined;



  return exports;
}));

