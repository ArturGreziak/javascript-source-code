function isIdentical(s) {
    return s.split('').every(char => char === s[0]);
}

Test.assertEquals(isIdentical("kkkkk"), true)
Test.assertEquals(isIdentical("ckkkk"), false)
Test.assertEquals(isIdentical("kkkkck"), false)
Test.assertEquals(isIdentical("aabc"), false)
Test.assertEquals(isIdentical("ccc"), true)
Test.assertEquals(isIdentical("aabbbb"), false)
Test.assertEquals(isIdentical("bbbbbb"), true)