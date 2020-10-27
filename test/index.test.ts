import { expect } from 'chai';
import * as HTTPMethodUtils from '../src';

describe('HTTPMethod', function () {
  describe('.isHTTPMethod()', function () {
    it('should return true for a valid lower case method', function () {
      expect(HTTPMethodUtils.isHTTPMethod('get')).to.equal(true);
    });
    it('should return true for a valid upper case method', function () {
      expect(HTTPMethodUtils.isHTTPMethod('GET')).to.equal(true);
    });
    it('should return true for e valid mixed case method', function () {
      expect(HTTPMethodUtils.isHTTPMethod('gEt')).to.equal(true);
    });
    it('should return false for an invalid method', function () {
      expect(HTTPMethodUtils.isHTTPMethod('foo')).to.equal(false);
    });
  });
  describe('.toLowerCase()', function () {
    it('should return a lower case version of the method', function () {
      expect(HTTPMethodUtils.toLowerCase('GET')).to.equal('get');
    });
  });
  describe('.toConstantCase()', function () {
    it('should return a constant case version of the method', function () {
      expect(HTTPMethodUtils.toConstantCase('get')).to.equal('GET');
    });
  });
  describe('.toPascalCase()', function () {
    it('should return a pascal case version of the method', function () {
      expect(HTTPMethodUtils.toPascalCase('get')).to.equal('Get');
    });
  });
});