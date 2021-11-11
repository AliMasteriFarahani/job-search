export const toCurrency = {
  filters: {
    toCurrency(value) {
      let text = Number(value);
      if (Number.isInteger(text)) {
        text = text.toString();
        let reverse = text
          .split("")
          .reverse()
          .join("");
        let reverseCuAr = reverse.match(/.{1,3}/g);
        let reverseCuSt = reverseCuAr.join(",");
        let currency = reverseCuSt
          .split("")
          .reverse()
          .join("");
        return currency;
      } else {
        return value;
      }
    },
  },
};

// export const isPersian = {
//   methods: {
//     persianText(val) {
//       if (val === "") {
//         return true;
//       }
//       // eslint-disable-next-line no-misleading-character-class
//       let pattern = /(^[\u0621-\u0628\u062A-\u063A\u0641-\u0642\u0644-\u0648\u064E-\u0651\u0655\u067E\u0686\u0698\u0020\u2000-\u200F\u2028-\u202F\u06A9\u06AF\u06BE\u06CC\u0629\u0643\u0649-\u064B\u064D\u06D5]+$)/gim;
//       return pattern.test(val);
//     },
//   },
// };

// export const dateFormat = {
//   methods: {
//     dashedDate(val) {
//       if (val === "") {
//         return true;
//       }
//       let pattern = /^[1][3|4][0-9]{2}-([0][1-9]|[1][0-2])-([0][0-9]|[1-2][0-9]|[3][0-1])$/gim;
//       return pattern.test(val);
//     },
//   },
// };
// export const mobile = {
//   methods: {
//     isMobile(val) {
//       if (val === "") {
//         return true;
//       }
//       let pattern = /^\d[09][0-9]{9}$/gim;
//       return pattern.test(val);
//     },
//   },
// };
// export const imageType = {
//   methods: {
//     imageType(val) {
//       let fileType = val.type;
//       let accept = ["image/png", "image/jpg", "image/jpeg"];
//       if (!accept.includes(fileType)) {
//         return false;
//       }
//      return true;
//     },
//   },
// };
// export const fileSize = {
//   methods: {
//     fileSize(val) {  
//       let maxSize = 2;
//       let fileSize = val.size;
//       let sizeInByte = maxSize*1048576; // MB to Byte
//       if (fileSize > sizeInByte) {
//         return false;
//       }
//       return true;
//     },
//   },
// };
