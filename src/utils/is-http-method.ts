import { map } from '../misc/map';

export function isHTTPMethod(candidate: string): boolean {
  return map.has(candidate.toLowerCase());
}