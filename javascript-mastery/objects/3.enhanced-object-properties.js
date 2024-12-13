// Enhanced Object Properties

const brandProp = "BRAND";
const calculator = (brand, price) => {
  return {
    [brandProp.toLocaleLowerCase()]: brand,
    price,
    // here we declare a function
    getDiscount: function () {
      return this.price - this.price * 0.3;
    },

    // here is the simpler version of declaring a function inner an object
    // we do not need the 'function' this keyword
    getDiscountV2() {
      return this.getDiscount();
    },
  };
};

const casio = calculator("casio", 10);
console.log(casio);
console.log(casio.getDiscount());
console.log(casio.getDiscountV2());
