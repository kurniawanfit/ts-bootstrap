
import { Request, Response } from 'express';
import { LoanService } from '../service/LoanService';
import { ResponseHandler } from '../helper/ResponseHandler';
import { EXCEPTION_MESSAGE } from '../exception/EXCEPTION_MESSAGE';
import { CustomException } from '../exception/CustomException';
import * as Joi from 'joi';

export class LoanController {
  async getAllLoanData (req: Request, res: Response): Promise<void> {
    try {
      const validationSchema: any = Joi.object({
        loan_id: Joi.number().allow(null).optional(),
        loan_status: Joi.string().required(),
        trace_id: Joi.string().required()
      });

      const validation: any = validationSchema.validate(req.body);
      if (!validation.error) {
        const result = await LoanService.getAllLoanData(req.body);

        ResponseHandler.send(req, res, result);
      } else {
        // you can throw custom log message to CustomException in addition to enrich the system logging
        throw new CustomException(EXCEPTION_MESSAGE.MISSING_REQUIRED_DATA, validation);
      }
    } catch (error) {
      ResponseHandler.send(req, res, error, true);
    }
  }
}

export const loanController = new LoanController();
