import * as Lodash from 'lodash';
import { THTTPMethod } from '../types/http-method';

export function toPascalCase(method: THTTPMethod): string {
  return Lodash.capitalize(method);
}