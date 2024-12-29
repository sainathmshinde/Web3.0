//DeeplClone using recursive function

function deepClone(obj) {
  if (obj === null || typeof obj !== "Object") return obj;

  const copy = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    copy[key] = deepClone(obj[key]);
  }
  return copy;
}

const copy = deepClone(original);
