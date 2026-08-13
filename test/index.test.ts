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

    // toPascalCase used to delegate to lodash.capitalize. These pin the vendored
    // implementation to the output lodash produced for every input the signature
    // admits, so the dependency can be dropped without changing behaviour.
    it.each([
      ['get', 'Get'],
      ['post', 'Post'],
      ['patch', 'Patch'],
      ['options', 'Options'],
      ['delete', 'Delete'],
      ['head', 'Head'],
    ] as const)('should pascal case the lower case method %s', (input, expected) => {
      expect(HTTPMethodUtils.toPascalCase(input)).toBe(expected);
    });

    it.each([
      ['GET', 'Get'],
      ['POST', 'Post'],
      ['PATCH', 'Patch'],
      ['OPTIONS', 'Options'],
      ['DELETE', 'Delete'],
      ['HEAD', 'Head'],
    ] as const)('should lower the tail of the constant case method %s', (input, expected) => {
      expect(HTTPMethodUtils.toPascalCase(input)).toBe(expected);
    });
  });
});
