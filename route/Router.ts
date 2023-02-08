// Controller
import { Request, Response } from 'express';
import { loanController } from '../controller/LoanController';
import { serviceMiddleware } from '../middleware/middleware';
const express = require('express');
const router = express.Router();

router.post('/loan/get/all', serviceMiddleware, loanController.getAllLoanData);

// health check endpoint
router.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'OK',
    message: 'Bootstrap API is live.'
  });
});

// Return 404 to all unidentified path URLs
router.get('*', function (req: Request, res: Response) {
  res.status(404).json();
});

module.exports = router;
