import 'alpinejs'

window.execute = function (cmd, data) {
   switch (cmd) {
      case "test":
         test();
         return;
      case "convert":
         const res = handleConversion(data.conversion, data.value);
         return res;
      default:
         console.error("message: invalid function requested")
   }
}

const conversions = {
   'px': {
      'px': 1,
      'rem': 1 / 16,
      'em': 1 / 16,
      'cm': 96.0 / 2.54,
      'mm': 96.0 / 25.4,
      'in': 96,
   },
   'rem': {
      'rem': 1,
      'px': 16,
      'em': 1
   },
   'em': {
      'em': 1,
      'rem': 1,
      'px': 16
   },
   'cm': {
      'px': 2.54 / 96.0,
      'cm': 1,
      'mm': 0.1,
      'in': 2.54,
   },
   'mm': {
      'px': 25.4 / 96.0,
      'cm': 10,
      'mm': 1,
      'in': 25.4,
   },
   'in': {
      'px': 1.0 / 96.0,
      'cm': 1.0 / 2.54,
      'mm': 1.0 / 25.4,
      'in': 1,
   },
}

function test() {
   console.log("it works...")
}

function handleConversion(conversion, val) {
   switch (conversion) {
      case "px to rem":
         return convertUnit('px', 'rem', val);
      case "rem to px":
         return convertUnit('rem', 'px', val);
      default:
         console.error("message: invalid converion type")
   }
}

function convertUnit(from, to, val) {
   const result = (conversions[from][to] * Number(val)).toFixed(2);

   return `${result}${to}`;
}
