// eslint-disable-next-line no-unused-vars
import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../middleware/jwt';
import Redis from '../middleware/redis';
import { ResponseHandler } from '../helper/ResponseHandler';
import { LEVEL, EXCEPTION_MESSAGE } from '../exception/EXCEPTION_MESSAGE';
import logger from '../helper/Logger';
import { v4 as uuidv4 } from 'uuid';

export async function serviceMiddleware (req: Request, res: Response, next: NextFunction): Promise<void> {
  // add trace id to body if not exist
  const traceId: string = uuidv4();
  if (!req.body.trace_id) req.body.trace_id = traceId;
  const message: string = JSON.stringify({ headers: req.headers, body: req.body });
  logger.log(LEVEL.INFO, 'REQUEST_DATA', { traceId: traceId, statusCode: null, message: message });

  // checkAuthentication(req, res, next);

  next();
}

// async function checkAuthentication (req: Request, res: Response, next: NextFunction) {
//   try {
//     if (req.headers.authorization !== undefined) {
//       const tokenHeader = req.headers.authorization;
//       if (tokenHeader === process.env.HEADER_TOKEN) {
//         next();
//       } else {
//         const jwtValue = verifyToken(tokenHeader);
//         const userName = jwtValue.userName;
//         const role = jwtValue.role;
//         const redisSession = new Redis();
//         const resultUserToken: any = await redisSession.publishAll(role + '-' + userName);
//         if (resultUserToken.token === tokenHeader) {
//           next();
//         } else {
//           ResponseHandler.send(res, EXCEPTION_MESSAGE.NOT_AUTHORIZED);
//         }
//       }
//     } else {
//       ResponseHandler.send(res, EXCEPTION_MESSAGE.NOT_AUTHORIZED);
//     }
//   } catch (e) {
//     ResponseHandler.send(res, EXCEPTION_MESSAGE.NOT_AUTHORIZED);
//   }
// }
