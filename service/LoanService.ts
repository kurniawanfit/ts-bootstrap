import { loanQuery } from '../sequelize/query';
import { CustomException } from '../exception/CustomException';
import { EXCEPTION_MESSAGE } from '../exception/EXCEPTION_MESSAGE';
import { sequelize } from '../sequelize/init';
import { HttpHelper } from '../helper/HttpHelper';
const fs = require('fs');
const FormData = require('form-data');

export class LoanService {
  static async getAllLoanData (payload: any): Promise<any> {
    return sequelize.transaction(async (transaction) => {
      const queryResult = await loanQuery.findAll(
        payload.loan_id,
        [
          ['id', 'loanId'],
          'userId',
          'loanStatus'
        ],
        payload.limit,
        payload.offset,
        transaction
      );

      if (queryResult.length === 0) {
        throw new CustomException(EXCEPTION_MESSAGE.DATA_NOT_FOUND);
      }

      return { loanData: queryResult };
    });
  }

  /**
   * This method is used for getting paginated loan data with the total number of rows
   *
   * @param payload -> user_id: number, loan_status: string
   * @returns -> throw exception if failed, return data if success
   */
  static async getAllLoanDataWithTotal (payload: any): Promise<any> {
    return sequelize.transaction(async (transaction) => {
      const { count, rows } = await loanQuery.findAndCountAll(
        payload.loan_id,
        payload.limit,
        payload.offset,
        transaction
      );

      if (rows.length === 0) {
        throw new CustomException(EXCEPTION_MESSAGE.DATA_NOT_FOUND);
      }

      return { loanData: rows, totalData: count };
    });
  }

  static async getLoanDataAndLoanDetail (payload: any): Promise<any> {
    return sequelize.transaction(async (transaction) => {
      const { count, rows } = await loanQuery.findAllLoanAndLoanDetail(
        payload.loan_id,
        payload.limit,
        payload.offset,
        transaction
      );

      if (rows.length === 0) {
        throw new CustomException(EXCEPTION_MESSAGE.DATA_NOT_FOUND);
      }

      return { loanData: rows, totalData: count };
    });
  }

  // Example of JSON request payload for HTTP request with the image converted as base64
  static async callOtherServiceWithJsonPayload (payload: any): Promise<any> {
    const requestPayload = {
      reference_id: payload.reference_id,
      name: payload.name,
      image: Buffer.from(fs.readFileSync(payload.image.path)).toString('base64')
    };

    const httpHelper: HttpHelper = new HttpHelper(payload.trace_id);
    httpHelper.setUrl(process.env.OTHER_SERVICE_URL + '/get/something');
    httpHelper.setHeader({ 'Content-Type': 'application/json' });
    httpHelper.setBody(requestPayload);
    const response: any = await httpHelper.post();

    if (response.data.status === 200) {
      return response.data;
    } else {
      throw new CustomException(EXCEPTION_MESSAGE.PROCESSING_ERROR);
    }
  }

  // Example of form data request payload for HTTP request with the image uploaded
  static async callOtherServiceWithFormDataPayload (payload: any): Promise<any> {
    const bodyRequest = new FormData();
    bodyRequest.append('reference_id', payload.reference_id);
    bodyRequest.append('name', payload.name);
    bodyRequest.append('file', fs.createReadStream(payload.image.path));

    const httpHelper: HttpHelper = new HttpHelper(payload.trace_id);
    httpHelper.setUrl(process.env.OTHER_SERVICE_URL + '/get/something');
    httpHelper.setHeader(bodyRequest.getHeaders());
    httpHelper.setBody(bodyRequest);
    const response: any = await httpHelper.post();

    if (response.data.status === 200) {
      return response.data;
    } else {
      throw new CustomException(EXCEPTION_MESSAGE.PROCESSING_ERROR);
    }
  }
}
