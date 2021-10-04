const { HttpException } = require('./HttpException')

function ExceptionHandler(err, req, res, next) {
  let status = 500;

  if (err instanceof HttpException) {
    status = err.status;
  }

  if (err instanceof Error) {
    status = 400;
  }

  return res.status(status)
    .json({
      status: 'error',
      message: err.message
    })
}

module.exports = { ExceptionHandler }