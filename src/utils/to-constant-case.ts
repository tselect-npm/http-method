import { THTTPMethod } from '../types';

export function toConstantCase(method: THTTPMethod): THTTPMethod {
  return method.toUpperCase() as THTTPMethod;
}