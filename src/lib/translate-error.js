function translateError(msg) {
  const newErr = new Error(msg); // placed here to get correct stack
  return (e) => {
    newErr.originalError = e;
    throw newErr;
  };
}

export default translateError;
