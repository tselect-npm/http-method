import { HTTPMethod } from '../';

describe('HTTPMethod', function () {
  describe('.isHTTPMethod()', function () {
    it('should return true for a valid lower case method', function () {
      expect(HTTPMethod.isHTTPMethod('get')).to.equal(true);
    });
    it('should return true for a valid upper case method', function () {
      expect(HTTPMethod.isHTTPMethod('GET')).to.equal(true);
    });
    it('should return true for e valid mixed case method', function () {
      expect(HTTPMethod.isHTTPMethod('gEt')).to.equal(true);
    });
    it('should return false for an invalid method', function () {
      expect(HTTPMethod.isHTTPMethod('foo')).to.equal(false);
    });
  });
  describe('.toLowerCase()', function () {
    it('should return a lower case version of the method', function () {
      expect(HTTPMethod.toLowerCase('GET')).to.equal('get');
    });
  });
  describe('.toConstantCase()', function () {
    it('should return a constant case version of the method', function () {
      expect(HTTPMethod.toConstantCase('get')).to.equal('GET');
    });
  });
  describe('.toPascalCase()', function () {
    it('should return a pascal case version of the method', function () {
      expect(HTTPMethod.toPascalCase('get')).to.equal('Get');
    });
  });
});