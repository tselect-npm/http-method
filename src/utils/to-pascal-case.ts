import * as Lodash from 'lodash';
import { THTTPMethod } from '../types';

export function toPascalCase(method: THTTPMethod): string {
  return Lodash.capitalize(method);
}