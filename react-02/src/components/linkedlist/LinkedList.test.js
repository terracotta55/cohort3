import { ListNode, LinkedList } from "./LinkedListFns.js";

test("show details of subject and amount", () => {
  let newNode = new LinkedList();
  newNode.insertAtFirstNode("oneAccount", 100);
  expect(newNode.showDetails()).toEqual(
    `subject: oneAccount\namount: 100`.trim()
  );

  expect(newNode.first.showDetails()).toEqual(
    `subject is "b" and amount is "2"`
  );
  expect(newNode.current.showDetails()).toEqual(
    `subject is "b" and amount is "2"`
  );
  expect(newNode.last.showDetails()).toEqual(
    `subject is "b" and amount is "2"`
  );
  newNode.insertAtFirstNode("a", 1);
  expect(newNode.first.showDetails()).toEqual(
    `subject is "a" and amount is "1"`
  );
  expect(newNode.current.showDetails()).toEqual(
    `subject is "b" and amount is "2"`
  );
  expect(newNode.last.showDetails()).toEqual(
    `subject is "b" and amount is "2"`
  );
  expect(newNode.first.next.showDetails()).toEqual(
    `subject is "b" and amount is "2"`
  );
  expect(newNode.last.prev.showDetails()).toEqual(
    `subject is "a" and amount is "1"`
  );
  newNode.insertAtLastNode(`d`, 4);
  expect(newNode.last.showDetails()).toEqual(
    `subject is "d" and amount is "4"`
  );
  newNode.insertAtLastNode(`z`, 28);
  expect(newNode.last.showDetails()).toEqual(
    `subject is "z" and amount is "28"`
  );
  expect(newNode.last.prev.showDetails()).toEqual(
    `subject is "d" and amount is "4"`
  );
  newNode.insertAfterCurrent(`c`, 3);
  expect(newNode.current.next.showDetails()).toEqual(
    `subject is "c" and amount is "3"`
  );
  newNode.deleteCurrent();
  expect(newNode.current.showDetails()).toEqual(
    `subject is "c" and amount is "3"`
  );
  expect(newNode.current.prev.showDetails()).toEqual(
    `subject is "a" and amount is "1"`
  );
  expect(newNode.current.next.showDetails()).toEqual(
    `subject is "d" and amount is "4"`
  );
  newNode.current = newNode.current.prev;
  newNode.insertAfterCurrent(`b`, 2);
  expect(newNode.first.showDetails()).toEqual(
    `subject is "a" and amount is "1"`
  );
  expect(newNode.current.showDetails()).toEqual(
    `subject is "a" and amount is "1"`
  );
  expect(newNode.last.showDetails()).toEqual(
    `subject is "z" and amount is "28"`
  );
  newNode.deleteCurrent();
  expect(newNode.first.showDetails()).toEqual(
    `subject is "b" and amount is "2"`
  );
  expect(newNode.current.showDetails()).toEqual(
    `subject is "b" and amount is "2"`
  );
  expect(newNode.current.next.showDetails()).toEqual(
    `subject is "c" and amount is "3"`
  );
  newNode.insertAtFirstNode("a", 1);
  newNode.current = newNode.last;
  newNode.deleteCurrent();
  expect(newNode.last.showDetails()).toEqual(
    `subject is "d" and amount is "4"`
  );
});
