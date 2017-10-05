import * as HTTPMethod from '../constants/http-method';

export const map = new Map([
  [HTTPMethod.GET, 'GET'],
  [HTTPMethod.POST, 'POST'],
  [HTTPMethod.PATCH, 'PATCH'],
  [HTTPMethod.OPTIONS, 'OPTIONS'],
  [HTTPMethod.HEAD, 'HEAD'],
  [HTTPMethod.DELETE, 'DELETE']
]);