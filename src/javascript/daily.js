/*	
	Write the function that will create this output:

*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/

// Write the function after this comment ---

function assertEquals(a, b) {
  if (a === b) {
    console.log(`*** the two values are the same`);
    return true;
  } else {
    console.log(`*** the two values are NOT the same
      p1--> ${a} (parameter 1)
      p2--> ${b} (parameter 2)`);
    return false;
  }
}

export { assertEquals };
// and before this comment ---

assertEquals("a", "b");
assertEquals("a", "a");
assertEquals(1, 2);
assertEquals(2, 2);
assertEquals("2", 2);
assertEquals("This value", "This value");
