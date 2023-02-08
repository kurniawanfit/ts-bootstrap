export enum LEVEL {
  INFO = 'info',
  DEBUG = 'debug',
  WARN = 'warn',
  ERROR = 'error'
}

export const EXCEPTION_MESSAGE = {
  MISSING_REQUIRED_DATA: { message: 'MISSING_REQUIRED_DATA', code: 400, level: LEVEL.WARN },
  INVALID_USERNAME_OR_PASSWORD: { message: 'INVALID_USERNAME_OR_PASSWORD', code: 400, level: LEVEL.ERROR },
  USER_NOT_FOUND: { message: 'USER_NOT_FOUND', code: 400, level: LEVEL.WARN },
  DATA_NOT_FOUND: { message: 'DATA_NOT_FOUND', code: 400, level: LEVEL.WARN },
  INVALID_LOAN_ID: { message: 'INVALID_LOAN_ID', code: 400, level: LEVEL.ERROR },
  NOT_AUTHORIZED: { message: 'NOT_AUTHORIZED', code: 401, level: LEVEL.WARN },
  PROCESSING_ERROR: { message: 'PROCESSING_ERROR', code: 500, level: LEVEL.ERROR }
};
