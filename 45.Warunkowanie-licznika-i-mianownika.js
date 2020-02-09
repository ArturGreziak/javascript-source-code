function greaterThanOne(frac) {
       
     if (+frac.split("/")[0] > +frac.split("/")[1] ){
         return true;
     }else {
         return false;
     }
}
console.log(greaterThanOne("1/2"));
console.log(greaterThanOne("7/4"));
console.log(greaterThanOne("10/10"));
console.log(greaterThanOne("28/3"));