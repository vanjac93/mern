import { AppError } from './appError'

class ErrorHandler {
  public async handleError(err: Error): Promise<void> {
    // await logger.error(
    //   'Error message from the centralized error-handling component',
    //   err,
    // );
    // await sendMailToAdminIfCritical();
    // await sendEventsToSentry();
  }

  public isTrustedError(error: Error) {
    if (error instanceof AppError) {
      return error.isOperational
    }
    return false
  }
}

const errorHandler = new ErrorHandler()

export default errorHandler
