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
    root.SibApiV3Sdk.UpdateContact = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UpdateContact model module.
   * @module model/UpdateContact
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>UpdateContact</code>.
   * @alias module:model/UpdateContact
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>UpdateContact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateContact} obj Optional instance to populate.
   * @return {module:model/UpdateContact} The populated <code>UpdateContact</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = ApiClient.convertToType(data['attributes'], {'String': 'String'});
      }
      if (data.hasOwnProperty('emailBlacklisted')) {
        obj['emailBlacklisted'] = ApiClient.convertToType(data['emailBlacklisted'], 'Boolean');
      }
      if (data.hasOwnProperty('smsBlacklisted')) {
        obj['smsBlacklisted'] = ApiClient.convertToType(data['smsBlacklisted'], 'Boolean');
      }
      if (data.hasOwnProperty('listIds')) {
        obj['listIds'] = ApiClient.convertToType(data['listIds'], ['Number']);
      }
      if (data.hasOwnProperty('unlinkListIds')) {
        obj['unlinkListIds'] = ApiClient.convertToType(data['unlinkListIds'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * @member {Object.<String, String>} attributes
   */
  exports.prototype['attributes'] = undefined;
  /**
   * Blacklist the contact for emails (emailBlacklisted = true)
   * @member {Boolean} emailBlacklisted
   */
  exports.prototype['emailBlacklisted'] = undefined;
  /**
   * Blacklist the contact for SMS (smsBlacklisted = true)
   * @member {Boolean} smsBlacklisted
   */
  exports.prototype['smsBlacklisted'] = undefined;
  /**
   * Ids of the lists to add the contact to
   * @member {Array.<Number>} listIds
   */
  exports.prototype['listIds'] = undefined;
  /**
   * Ids of the lists to remove the contact from
   * @member {Array.<Number>} unlinkListIds
   */
  exports.prototype['unlinkListIds'] = undefined;



  return exports;
}));


