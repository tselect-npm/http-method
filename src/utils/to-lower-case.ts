import { THTTPMethod } from '../types';

export function toLowerCase(method: THTTPMethod): THTTPMethod {
  return method.toLowerCase() as THTTPMethod;
}