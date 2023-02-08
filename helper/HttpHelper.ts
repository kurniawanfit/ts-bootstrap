import axios from 'axios';
import logger from './Logger';
import { LEVEL } from '../exception/EXCEPTION_MESSAGE';

export class HttpHelper {
    axios :any
    url :string
    body :any
    header :any
    method :any
    params :any
    validateStatus :any
    traceId: string

    constructor (traceId?: string) {
      this.axios = axios;
      this.validateStatus = function (status: number) {
        return status >= 200 && status < 500; // default success
      };
      this.traceId = traceId;
    }

    setUrl (url: string) {
      this.url = url;
      return this;
    }

    setBody (body: any) {
      this.body = body;
      return this;
    }

    setHeader (header: any) {
      this.header = header;
      return this;
    }

    async get () {
      this.method = 'get';
      return await this.run();
    }

    async post () {
      this.method = 'post';
      return await this.run();
    }

    async put () {
      this.method = 'put';
      return await this.run();
    }

    config () {
      return {
        url: this.url,
        headers: this.header,
        method: this.method,
        validateStatus: this.validateStatus,
        data: this.body,
        params: this.params
      };
    }

    async run () {
      const result: any = await this.axios(this.config());
      logger.log(LEVEL.INFO, 'HTTP_CALL', {
        traceId: this.traceId,
        statusCode: result.status,
        message: result.data
      });

      return result;
    }

    static request (url: string) {
      const req = new HttpHelper();
      req.setUrl(url);
      return req;
    }
}
