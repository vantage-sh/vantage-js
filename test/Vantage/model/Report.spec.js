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
    describe('Report', function() {
      beforeEach(function() {
        instance = new Vantage.Report();
      });

      it('should create an instance of Report', function() {
        // TODO: update the code to test Report
        expect(instance).to.be.a(Vantage.Report);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

      it('should have the property earliestCostDate (base name: "earliest_cost_date")', function() {
        // TODO: update the code to test the property earliestCostDate
        expect(instance).to.have.property('earliestCostDate');
        // expect(instance.earliestCostDate).to.be(expectedValueLiteral);
      });

      it('should have the property latestCostDate (base name: "latest_cost_date")', function() {
        // TODO: update the code to test the property latestCostDate
        expect(instance).to.have.property('latestCostDate');
        // expect(instance.latestCostDate).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "created_at")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property workspace (base name: "workspace")', function() {
        // TODO: update the code to test the property workspace
        expect(instance).to.have.property('workspace');
        // expect(instance.workspace).to.be(expectedValueLiteral);
      });

    });
  });

}));