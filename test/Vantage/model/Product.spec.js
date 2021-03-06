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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../../src/Vantage/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/Vantage/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Vantage);
  }
}(this, function(expect, Vantage) {
  'use strict';

  var instance;

  describe('Vantage', function() {
    describe('Product', function() {
      beforeEach(function() {
        instance = new Vantage.Product();
      });

      it('should create an instance of Product', function() {
        // TODO: update the code to test Product
        expect(instance).to.be.a(Vantage.Product);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property category (base name: "category")', function() {
        // TODO: update the code to test the property category
        expect(instance).to.have.property('category');
        // expect(instance.category).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property serviceId (base name: "service_id")', function() {
        // TODO: update the code to test the property serviceId
        expect(instance).to.have.property('serviceId');
        // expect(instance.serviceId).to.be(expectedValueLiteral);
      });

      it('should have the property providerId (base name: "provider_id")', function() {
        // TODO: update the code to test the property providerId
        expect(instance).to.have.property('providerId');
        // expect(instance.providerId).to.be(expectedValueLiteral);
      });

      it('should have the property details (base name: "details")', function() {
        // TODO: update the code to test the property details
        expect(instance).to.have.property('details');
        // expect(instance.details).to.be(expectedValueLiteral);
      });

    });
  });

}));
