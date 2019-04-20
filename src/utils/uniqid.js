const uniqid = () =>
  Math.random()
    .toString(36)
    .substr(2);

export default uniqid;
