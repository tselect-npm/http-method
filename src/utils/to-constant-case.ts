import { THTTPMethod } from '../types/http-method';

export function toConstantCase(method: THTTPMethod): THTTPMethod {
  return method.toUpperCase() as THTTPMethod;
}
