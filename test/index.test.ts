import { describe, expect, it } from 'vitest';
import type { THTTPMethod } from '../src';
import * as HTTPMethodUtils from '../src';

// Compile-time guard. THTTPMethod once omitted 'put' while HTTPMethod.PUT
// existed, so toLowerCase(HTTPMethod.PUT) did not typecheck. This fails the
// build if a member is ever added to the enum without widening the union.
const _everyEnumMemberIsInTheUnion: THTTPMethod = {} as HTTPMethodUtils.HTTPMethod;
void _everyEnumMemberIsInTheUnion;

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
    it.each(Object.values(HTTPMethodUtils.HTTPMethod))('should return true for the enum member %s', (method) => {
      expect(HTTPMethodUtils.isHTTPMethod(method)).toBe(true);
    });
  });
  describe('.toLowerCase()', () => {
    it('should return a lower case version of the method', () => {
      expect(HTTPMethodUtils.toLowerCase('GET')).toBe('get');
    });
    it('should accept put, which the type once omitted', () => {
      expect(HTTPMethodUtils.toLowerCase('PUT')).toBe('put');
      expect(HTTPMethodUtils.toLowerCase(HTTPMethodUtils.HTTPMethod.PUT)).toBe('put');
    });
  });
  describe('.toConstantCase()', () => {
    it('should return a constant case version of the method', () => {
      expect(HTTPMethodUtils.toConstantCase('get')).toBe('GET');
    });
    it('should accept put, which the type once omitted', () => {
      expect(HTTPMethodUtils.toConstantCase('put')).toBe('PUT');
      expect(HTTPMethodUtils.toConstantCase(HTTPMethodUtils.HTTPMethod.PUT)).toBe('PUT');
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
      ['put', 'Put'],
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
      ['PUT', 'Put'],
    ] as const)('should lower the tail of the constant case method %s', (input, expected) => {
      expect(HTTPMethodUtils.toPascalCase(input)).toBe(expected);
    });
  });
});
