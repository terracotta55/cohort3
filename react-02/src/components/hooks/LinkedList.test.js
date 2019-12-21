import { ListNode, LinkedList } from "./LinkedListFns.js";

test("show details of subject and amount", () => {
  let newNode = new ListNode("oneAccount", 100);
  expect(newNode.showDetails()).toEqual(
    `subject: oneAccount\namount: 100`.trim()
  );
});
