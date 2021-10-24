export const toCurrency = {
    filters: {
        toCurrency(value) {
          let text = Number(value);
          if (Number.isInteger(text)) {
            text = text.toString();
            let reverse = text.split("").reverse().join("");
            let reverseCuAr = reverse.match(/.{1,3}/g);
            let reverseCuSt = reverseCuAr.join(",");
            let currency = reverseCuSt.split("").reverse().join("");
            return currency;
          } else {
            return value;
          }
        },
      },
}