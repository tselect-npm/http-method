import type { THTTPMethod } from '../types/http-method';

export function toPascalCase(method: THTTPMethod): string {
  return method.charAt(0).toUpperCase() + method.slice(1).toLowerCase();
}
