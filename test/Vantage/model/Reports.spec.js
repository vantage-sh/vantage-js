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
    describe('Reports', function() {
      beforeEach(function() {
        instance = new Vantage.Reports();
      });

      it('should create an instance of Reports', function() {
        // TODO: update the code to test Reports
        expect(instance).to.be.a(Vantage.Reports);
      });

      it('should have the property links (base name: "links")', function() {
        // TODO: update the code to test the property links
        expect(instance).to.have.property('links');
        // expect(instance.links).to.be(expectedValueLiteral);
      });

      it('should have the property reports (base name: "reports")', function() {
        // TODO: update the code to test the property reports
        expect(instance).to.have.property('reports');
        // expect(instance.reports).to.be(expectedValueLiteral);
      });

    });
  });

}));
