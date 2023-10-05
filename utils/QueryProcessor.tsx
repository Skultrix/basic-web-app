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
