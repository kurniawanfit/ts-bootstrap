import { LoanModel, LoanDetailModel, ProductModel, UserModel } from '../model/index';
import { Transaction } from 'sequelize';
require('../model/associations/index');

class LoanQuery {
  async findAll (where: any = {}, attributes: any = [], limit: number, offset: number, transaction?: Transaction) {
    const options: any = {
      where: where,
      limit: limit,
      offset: offset,
      transaction: transaction
    };

    if (attributes.length !== 0) { options.attributes = attributes; }

    return await LoanModel.findAll(options);
  }

  async findAndCountAll (where: any = {}, limit: number, offset: number, transaction?: Transaction) {
    return await LoanModel.findAndCountAll({
      where: where,
      limit: limit,
      offset: offset
    });
  }

  async findAllLoanAndLoanDetail (where: any = {}, limit: number, offset: number, transaction?: Transaction) {
    return await LoanModel.findAndCountAll({
      where: where,
      include: [ // for join with other tables, by default using left outer join
        {
          model: LoanDetailModel,
          required: true // for making full inner join
        },
        {
          model: ProductModel,
          required: true
        },
        {
          model: UserModel,
          required: true
        }
      ],
      limit: limit,
      offset: offset
    });
  }
}

export const loanQuery = new LoanQuery();
