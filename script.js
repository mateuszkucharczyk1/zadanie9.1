var getTriangleArea = function getTriangleArea(a, h) {
    if (a<=0 || h <=0 ) {
      return("Dane nieprawidłowe");
    }
    else {
      return(a*h/2);
    }
};
console.log(getTriangleArea(10,6));

var getTriangle1Area = getTriangleArea(3, 7);
console.log(getTriangle1Area);

var getTriangle2Area = getTriangleArea(2, 4);
console.log(getTriangle2Area);

var getTriangle3Area = getTriangleArea(4, 10);
console.log(getTriangle3Area);

var getTriangle4Area = getTriangleArea(0, 4);
console.log(getTriangle4Area);

var getTriangle5Area = getTriangleArea(6, 2);
console.log(getTriangle5Area);

var getTrapezeArea = function getTrapezeArea(a, b, h) {
  if (a<=0 || h <= 0 || b <= 0 ) {
    return("Dane nieprawidłowe");
  }
  else {
    return(1/2*(Number(a) + Number(b))*h);
  }
};

console.log(getTrapezeArea(10, 6, 4));

var getTrapeze1Area = getTrapezeArea(7, 2, 3);
console.log(getTrapeze1Area);

var getTrapeze2Area = getTrapezeArea(8, 4, 2);
console.log(getTrapeze2Area);

var getTrapeze3Area = getTrapezeArea(10, 6, 8);
console.log(getTrapeze3Area);

var getTrapeze4Area = getTrapezeArea(0, 4, 2);
console.log(getTrapeze4Area);

var getTrapeze5Area = getTrapezeArea(7, 2, 5);
console.log(getTrapeze5Area);
