export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } else if (query.toLowerCase().includes("andrew id")) {
    return (
      "My andrew ID is aabdalla"
    );
  }
  else if (query.toLowerCase().includes("plus") ) {
    const words = query.split(" ");
    const first = parseInt(words[2]);
    const second = parseInt(words[4]);
    const sum = first + second;
    const res = sum.toString();
    return res;
  }
  else if (query.toLowerCase().includes("largest") ) {
    const words = query.split(" ");
    const first = parseInt(words[8].split(",")[0]);
    const second = parseInt(words[8].split(",")[0]);
    const third = parseInt(words[8].split("?")[0]);

    const sum = findLargest(first, second, third);
    const res = sum.toString();
    return res;
  }
  else if (query.toLowerCase().includes("square and a cube") ) {
    const words = query.split(" ");
    const first = parseInt(words[8].split(",")[12]);
    const x2 = parseInt(words[8].split(",")[13]);
    const x3 = parseInt(words[8].split(",")[14]);
    const x4 = parseInt(words[8].split(",")[15]);
    const x5 = parseInt(words[8].split(",")[16]);
    const x6 = parseInt(words[8].split(",")[17]);
    const x7 = parseInt(words[8].split("?")[18]);

    let sum = 0;

    if (isPerfectSquareAndCube(first)) {
      sum = first;
    } else if (isPerfectSquareAndCube(x2)) {
sum = x2;
    } else if (isPerfectSquareAndCube(x3)) {
      sum = x3;
    }else if (isPerfectSquareAndCube(x4)) {
      sum = x4;
    }else if (isPerfectSquareAndCube(x5)) {
      sum = x5;
    } else if (isPerfectSquareAndCube(x6)) {
      sum = x6;
    } else if (isPerfectSquareAndCube(x7)) {
      sum = x7;
    }
    
    const res = sum.toString();
    return res;
  }


  return "";
}

function findLargest(a: number, b: number, c: number): number {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

function isPerfectSquareAndCube(number: number): boolean {
  // Check if the square root is an integer
  const sqrt = Math.sqrt(number);
  if (Number.isInteger(sqrt)) {
    // Check if the cube root is an integer
    const cbrt = Math.cbrt(number);
    if (Number.isInteger(cbrt)) {
      return true;
    }
  }
  return false;
}