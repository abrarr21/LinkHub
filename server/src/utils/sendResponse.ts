import { StatusCodes } from "http-status-codes";
import type { Response } from "express";

type responseBody = {
  success: boolean;
  data?: any;
  message?: string;
};

const sendResponse = (
  res: Response,
  statusCode: number,
  message: string,
  data = null,
) => {
  const responseBody: responseBody = {
    success: true,
  };

  if (message) responseBody.message = message;
  if (data !== null && data !== undefined) {
    responseBody.data = data;
  }

  return res.status(statusCode || StatusCodes.OK).json(responseBody);
};

export default sendResponse;
