import { LoanModel, LoanDetailModel, ProductModel, UserModel } from '../index';

// pj_loan
LoanModel.hasOne(LoanDetailModel, {
  foreignKey: 'loanId'
});
LoanModel.belongsTo(ProductModel, {
  foreignKey: 'productId'
});
LoanModel.belongsTo(UserModel, {
  foreignKey: 'userId'
});

// pj_loan_details
LoanDetailModel.belongsTo(LoanModel, {
  foreignKey: 'loanId'
});

// pj_product
ProductModel.hasMany(LoanModel, {
  foreignKey: 'productId'
});

// pj_user
UserModel.hasMany(LoanModel, {
  foreignKey: 'userId'
});
