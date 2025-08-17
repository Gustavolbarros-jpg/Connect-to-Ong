export const ok = (body) => {
  return {
    success: true,
    statusCode: 200,
    body,
  };
};
export const created = (body) => {
  return {
    success: true,
    statusCode: 201,
    body,
  };
};

export const badRequest = (error) => {
  return {
    success: false,
    statusCode: 400,
    body: { message: error.message },
  };
};
export const notFound = (message) => {
  return {
    success: false,
    statusCode: 404,
    body: { message: message },
  };
};
export const serverError = (error) => {
  return {
    success: false,
    statusCode: 500,
    body: { error: error.message },
  };
};
