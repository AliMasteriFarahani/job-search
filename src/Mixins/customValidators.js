import { helpers } from "vuelidate/lib/validators";
export const fileSize = (maxSize) => (val) => {
  let fileSize = val.size;
  let sizeInByte = maxSize * 1048576; // MB to Byte
  if (fileSize > sizeInByte) {
    return !helpers.req(val) || false;
  }
  return true;
};

export const imageType = (val) => {
  let fileType = val.type;
  let accept = ["image/png", "image/jpg", "image/jpeg"];
  if (!accept.includes(fileType)) {
    return false;
  }
  return true;
};

export const docType = (type) => (val) => {
  let fileType = val.type;
  let pdf = "application/pdf";
  if (type == "pdf") {
    type = pdf;
  }
  // let accept = ["image/png", "image/jpg", "image/jpeg"];
  if (fileType != type) {
    return false;
  }
  return true;
};

export const persianText = (val) => {
  if (val === "") {
    return true;
  }
  // eslint-disable-next-line no-misleading-character-class
  let pattern = /(^[\u0621-\u0628\u062A-\u063A\u0641-\u0642\u0644-\u0648\u064E-\u0651\u0655\u067E\u0686\u0698\u0020\u2000-\u200F\u2028-\u202F\u06A9\u06AF\u06BE\u06CC\u0629\u0643\u0649-\u064B\u064D\u06D5]+$)/gim;
  return pattern.test(val);
};

export const dashedDate = (val) => {
  if (val === "") {
    return true;
  }
  let pattern = /^[1][3|4][0-9]{2}-([0][1-9]|[1][0-2])-([0][0-9]|[1-2][0-9]|[3][0-1])$/gim;
  return pattern.test(val);
};

export const mobileFormat = (val) => {
  if (val === "") {
    return true;
  }
  let pattern = /^\d[09][0-9]{9}$/gim;
  return pattern.test(val);
};
