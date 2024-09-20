function multiply(a, b, c) {
  return a * b * c;
}

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

let price = 20;

export default function divide(a, b) {
  return a / b;
}

export function navbar() {
  return `
        <navbar>
        </navbar>
    
    `;
}

export { multiply as mul, addition, subtraction as subs, price };

//export -> Named export, default export
