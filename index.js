const arr = require('./data.json');

exports.districts = function () {
  let c = [];
  arr.forEach(
    ({ districts }) =>
      c = c.concat(districts)
  );
  return c;
}();

// DOM Manipulation

let province = document.querySelector('.province');
let district = document.querySelector('.district');

function optionNode(text) {
  let d = document.createElement('option');
  d.innerHTML = text;
  return d;
};

arr.forEach(function (text, i) {
  province.appendChild(optionNode('Province no. ' + (i + 1)));
  optionGen(0);
});

const optionGen = function (index) {
  if (index !== null) {
    arr[index].districts.forEach(function (el) {
      district.appendChild(optionNode(el));
    });
  } else {
    district.innerHTML = null;
  }
};

function optionChange(e) {
  optionGen(null);
  optionGen(province.options.selectedIndex);
}