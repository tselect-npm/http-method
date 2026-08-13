import { describe, expect, it } from 'vitest';
import * as HTTPMethodUtils from '../src';

describe('HTTPMethod', () => {
  describe('.isHTTPMethod()', () => {
    it('should return true for a valid lower case method', () => {
      expect(HTTPMethodUtils.isHTTPMethod('get')).toBe(true);
    });
    it('should return true for a valid upper case method', () => {
      expect(HTTPMethodUtils.isHTTPMethod('GET')).toBe(true);
    });
    it('should return true for e valid mixed case method', () => {
      expect(HTTPMethodUtils.isHTTPMethod('gEt')).toBe(true);
    });
    it('should return false for an invalid method', () => {
      expect(HTTPMethodUtils.isHTTPMethod('foo')).toBe(false);
    });
  });
  describe('.toLowerCase()', () => {
    it('should return a lower case version of the method', () => {
      expect(HTTPMethodUtils.toLowerCase('GET')).toBe('get');
    });
  });
  describe('.toConstantCase()', () => {
    it('should return a constant case version of the method', () => {
      expect(HTTPMethodUtils.toConstantCase('get')).toBe('GET');
    });
  });
  describe('.toPascalCase()', () => {
    it('should return a pascal case version of the method', () => {
      expect(HTTPMethodUtils.toPascalCase('get')).toBe('Get');
    });
  });
});
