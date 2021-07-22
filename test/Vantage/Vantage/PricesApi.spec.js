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

  beforeEach(function() {
    instance = new Vantage.PricesApi();
  });

  describe('Vantage', function() {
    describe('PricesApi', function() {
      describe('getPrice', function() {
        it('should call getPrice successfully', function(done) {
          // TODO: uncomment, update parameter values for getPrice call and complete the assertions
          /*
          var productId = "productId_example";
          var id = "id_example";

          instance.getPrice(productId, id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Vantage.Price);
            expect(data.id).to.be.a('string');
            // expect(data.id).to.be("");
            expect(data.unit).to.be.a('string');
            // expect(data.unit).to.be("hour");
            expect(data.region).to.be.a('string');
            // expect(data.region).to.be("us-east-1");
            expect(data.rateType).to.be.a('string');
            // expect(data.rateType).to.be("compute");
            expect(data.currency).to.be.a('string');
            // expect(data.currency).to.be("USD");
            expect(data.amount).to.be.a('number');
            // expect(data.amount).to.be(1.324);
            expect(data.details).to.be.a(Object);
            // expect(data.details).to.be({"platform":"linux-enterprise","lifecycle":"on-demand"});

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getPrices', function() {
        it('should call getPrices successfully', function(done) {
          // TODO: uncomment, update parameter values for getPrices call and complete the assertions
          /*
          var productId = "productId_example";
          var opts = {};
          opts.page = 56;
          opts.limit = 56;

          instance.getPrices(productId, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Vantage.Prices);
            expect(data.links).to.be.a(Object);
            // expect(data.links).to.be();
            {
              let dataCtr = data.prices;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Vantage.Price);
                expect(data.id).to.be.a('string');
                // expect(data.id).to.be("");
                expect(data.unit).to.be.a('string');
                // expect(data.unit).to.be("hour");
                expect(data.region).to.be.a('string');
                // expect(data.region).to.be("us-east-1");
                expect(data.rateType).to.be.a('string');
                // expect(data.rateType).to.be("compute");
                expect(data.currency).to.be.a('string');
                // expect(data.currency).to.be("USD");
                expect(data.amount).to.be.a('number');
                // expect(data.amount).to.be(1.324);
                expect(data.details).to.be.a(Object);
                // expect(data.details).to.be({"platform":"linux-enterprise","lifecycle":"on-demand"});
              }
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProduct', function() {
        it('should call getProduct successfully', function(done) {
          // TODO: uncomment, update parameter values for getProduct call and complete the assertions
          /*
          var id = "id_example";

          instance.getProduct(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Vantage.Product);
            expect(data.id).to.be.a('string');
            // expect(data.id).to.be("");
            expect(data.category).to.be.a('string');
            // expect(data.category).to.be("compute");
            expect(data.name).to.be.a('string');
            // expect(data.name).to.be("EC2");
            expect(data.serviceId).to.be.a('string');
            // expect(data.serviceId).to.be("aws-ec2");
            expect(data.providerId).to.be.a('string');
            // expect(data.providerId).to.be("aws");
            expect(data.details).to.be.a(Object);
            // expect(data.details).to.be({"gpu":0,"name":"M5 General Purpose 16xlarge","vcpu":64,"memory":256,"clock_speed_ghz":3.1,"physical_processor_description":"Intel Xeon Platinum 8175 (Skylake)","network_performance_description":"20 Gigabit"});

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProducts', function() {
        it('should call getProducts successfully', function(done) {
          // TODO: uncomment, update parameter values for getProducts call and complete the assertions
          /*
          var opts = {};
          opts.providerId = "providerId_example";
          opts.serviceId = "serviceId_example";
          opts.name = "name_example";
          opts.page = 56;
          opts.limit = 56;

          instance.getProducts(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Vantage.Products);
            expect(data.links).to.be.a(Object);
            // expect(data.links).to.be();
            {
              let dataCtr = data.products;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Vantage.Product);
                expect(data.id).to.be.a('string');
                // expect(data.id).to.be("");
                expect(data.category).to.be.a('string');
                // expect(data.category).to.be("compute");
                expect(data.name).to.be.a('string');
                // expect(data.name).to.be("EC2");
                expect(data.serviceId).to.be.a('string');
                // expect(data.serviceId).to.be("aws-ec2");
                expect(data.providerId).to.be.a('string');
                // expect(data.providerId).to.be("aws");
                expect(data.details).to.be.a(Object);
                // expect(data.details).to.be({"gpu":0,"name":"M5 General Purpose 16xlarge","vcpu":64,"memory":256,"clock_speed_ghz":3.1,"physical_processor_description":"Intel Xeon Platinum 8175 (Skylake)","network_performance_description":"20 Gigabit"});
              }
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProviders', function() {
        it('should call getProviders successfully', function(done) {
          // TODO: uncomment, update parameter values for getProviders call and complete the assertions
          /*
          var opts = {};
          opts.page = 56;
          opts.limit = 56;

          instance.getProviders(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Vantage.Providers);
            expect(data.links).to.be.a(Object);
            // expect(data.links).to.be();
            {
              let dataCtr = data.providers;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Vantage.Provider);
                expect(data.id).to.be.a('string');
                // expect(data.id).to.be("");
                expect(data.name).to.be.a('string');
                // expect(data.name).to.be("AWS");
                expect(data.description).to.be.a('string');
                // expect(data.description).to.be("Amazon Web Services");
              }
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getServices', function() {
        it('should call getServices successfully', function(done) {
          // TODO: uncomment, update parameter values for getServices call and complete the assertions
          /*
          var opts = {};
          opts.providerId = "providerId_example";
          opts.page = 56;
          opts.limit = 56;

          instance.getServices(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Vantage.Services);
            expect(data.links).to.be.a(Object);
            // expect(data.links).to.be();
            {
              let dataCtr = data.services;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Vantage.Service);
                expect(data.id).to.be.a('string');
                // expect(data.id).to.be("");
                expect(data.category).to.be.a('string');
                // expect(data.category).to.be("compute");
                expect(data.name).to.be.a('string');
                // expect(data.name).to.be("EC2");
                expect(data.description).to.be.a('string');
                // expect(data.description).to.be("Elastic Compute Cloud");
              }
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
