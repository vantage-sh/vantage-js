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
    describe('Cost', function() {
      beforeEach(function() {
        instance = new Vantage.Cost();
      });

      it('should create an instance of Cost', function() {
        // TODO: update the code to test Cost
        expect(instance).to.be.a(Vantage.Cost);
      });

      it('should have the property accruedAt (base name: "accrued_at")', function() {
        // TODO: update the code to test the property accruedAt
        expect(instance).to.have.property('accruedAt');
        // expect(instance.accruedAt).to.be(expectedValueLiteral);
      });

      it('should have the property amount (base name: "amount")', function() {
        // TODO: update the code to test the property amount
        expect(instance).to.have.property('amount');
        // expect(instance.amount).to.be(expectedValueLiteral);
      });

      it('should have the property provider (base name: "provider")', function() {
        // TODO: update the code to test the property provider
        expect(instance).to.have.property('provider');
        // expect(instance.provider).to.be(expectedValueLiteral);
      });

      it('should have the property service (base name: "service")', function() {
        // TODO: update the code to test the property service
        expect(instance).to.have.property('service');
        // expect(instance.service).to.be(expectedValueLiteral);
      });

    });
  });

}));