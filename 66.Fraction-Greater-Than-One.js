function greaterThanOne(frac) {
		if (+frac.split("/")[0] > +frac.split("/")[1] ){
         return true;
     }else {
         return false;
     }
}


// greaterThanOne("1/2") ➞ false

// greaterThanOne("7/4") ➞ true

// greaterThanOne("10/10") ➞ false