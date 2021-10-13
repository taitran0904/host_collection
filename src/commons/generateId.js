export const encodeId = id => {
  return `${Math.random().toString(36).substr(2, 9)}-1-${Math.random().toString(36).substr(2, 9)}-2-${Math.random().toString(36).substr(2, 9)}-${id}-${Math.random().toString(36).substr(2, 9)}${Math.random().toString(36).substr(2, 9)}-3-${Math.random().toString(36).substr(2, 9)}`;
};

export const decodeId = encodeId => {
  const split = encodeId.split('-');
  const result = parseInt(split[5], 10);
  return result;
};
