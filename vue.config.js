module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/vue3-composition-api-todolist/'
      : '/',
};
