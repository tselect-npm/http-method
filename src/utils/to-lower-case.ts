import { THTTPMethod } from '../types/http-method';

export function toLowerCase(method: THTTPMethod): THTTPMethod {
  return method.toLowerCase() as THTTPMethod;
}