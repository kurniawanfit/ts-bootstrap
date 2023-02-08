import { EXCEPTION_MESSAGE } from './EXCEPTION_MESSAGE';

interface logFormat {
  message: any,
  responseTime?: number,
  destination?: string
}

export class CustomException {
  obj: any;
  systemLog: logFormat;
  constructor (obj: any = EXCEPTION_MESSAGE.PROCESSING_ERROR, systemLog?: logFormat) {
    this.obj = obj;
    this.systemLog = systemLog;
  }
}
