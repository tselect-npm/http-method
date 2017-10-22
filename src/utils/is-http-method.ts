import { HTTPMethod } from '../constants/http-method';

export function isHTTPMethod(candidate: string): boolean {
  return Object.values(HTTPMethod).includes(candidate.toLowerCase());
}