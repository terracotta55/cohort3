import syntax
import unittest


class TestSyntax(unittest.TestCase):
    def test_01_test(self):
        # print("ptython unit tests")
        pass

    def test_02_checkType(self):
        # Test that it can check the data type of the parameter
        self.assertEqual("float", syntax.checkType(3.142), "should be 'float'")
        self.assertEqual("str", syntax.checkType("hello"), "should be 'str'")
        self.assertEqual("int", syntax.checkType(15), "should be 'int'")

    def test_03_ifElse(self):
        # Test that it can check the data type of the parameter
        self.assertEqual("Hello Jimmy", syntax.ifElse("Jimmy"))
        self.assertEqual("I don't know you", syntax.ifElse(45))
        self.assertEqual("Hello Jane", syntax.ifElse("Jane"))

    def test_04_paramReturns(self):
        # Test that it can check the data type of the parameter
        self.assertEqual("45, Jones", syntax.paramReturns(45, "Jones"))
        self.assertEqual("hello, goodbye",
                         syntax.paramReturns("hello", "goodbye"))
        self.assertEqual("15, 30", syntax.paramReturns(15, 30))

    def test_05_listAddToFront(self):
        # Test that it can check the data type of the parameter
        self.assertEqual([23, 1, 3, 5, 7], syntax.listAddToFront(
            [1, 3, 5, 7], 23))
        self.assertEqual([45, "baseball", "hello", "today", "tomorrow"], syntax.listAddToFront(
            ["baseball", "hello", "today", "tomorrow"], 45))
        self.assertEqual(["burger", 3, 6, 9, 12, 15],
                         syntax.listAddToFront([3, 6, 9, 12, 15], "burger"))

    def test_05_listAddToEnd(self):
        # Test that it can check the data type of the parameter
        self.assertEqual([1, 3, 5, 7, 23], syntax.listAddToEnd(
            [1, 3, 5, 7], 23))
        self.assertEqual(["baseball", "hello", "today", "tomorrow", 45], syntax.listAddToEnd(
            ["baseball", "hello", "today", "tomorrow"], 45))
        self.assertEqual([3, 6, 9, 12, 15, "burger"],
                         syntax.listAddToEnd([3, 6, 9, 12, 15], "burger"))

    def test_06_listUpdate(self):
        # Test that it can check the data type of the parameter
        self.assertEqual([1, 105, 5, 7, 9], syntax.listUpdate(
            [1, 3, 5, 7, 9], 1, 105))
        self.assertEqual([1, 3, 105, 7, 9], syntax.listUpdate(
            [1, 3, 5, 7, 9], 2, 105))
        self.assertEqual([1, 3, 5, 105, 9], syntax.listUpdate(
            [1, 3, 5, 7, 9], 3, 105))

    def test_07_forLoop(self):
        # Test that it can check the data type of the parameter
        self.assertEqual(155, syntax.forLoop(11, 20))
        self.assertEqual(255, syntax.forLoop(21, 30))
        self.assertEqual(355, syntax.forLoop(31, 40))

    def test_08_reverseStrSlicing(self):
        # Test that it can check the data type of the parameter
        self.assertEqual("float", syntax.checkType(3.142))
        self.assertEqual("str", syntax.checkType("hello"))
        self.assertEqual("int", syntax.checkType(15))

    def test_09_reverseStrJoin(self):
        # Test that it can check the data type of the parameter
        self.assertEqual("float", syntax.checkType(3.142))
        self.assertEqual("str", syntax.checkType("hello"))
        self.assertEqual("int", syntax.checkType(15))

    def test_10_forInDict(self):
        # Test that it can check the data type of the parameter
        self.assertEqual("float", syntax.checkType(3.142))
        self.assertEqual("str", syntax.checkType("hello"))
        self.assertEqual("int", syntax.checkType(15))

    def test_11_doubleNumberList(self):
        # Test that it can check the data type of the parameter
        self.assertEqual("float", syntax.checkType(3.142))
        self.assertEqual("str", syntax.checkType("hello"))
        self.assertEqual("int", syntax.checkType(15))

    def test_12_doubleNumberList_2(self):
        # Test that it can check the data type of the parameter
        self.assertEqual("float", syntax.checkType(3.142))
        self.assertEqual("str", syntax.checkType("hello"))
        self.assertEqual("int", syntax.checkType(15))

    def test_13_whileLoopDemo(self):
        # Test that it can check the data type of the parameter
        self.assertEqual("float", syntax.checkType(3.142))
        self.assertEqual("str", syntax.checkType("hello"))
        self.assertEqual("int", syntax.checkType(15))

    def test_14_dictValue(self):
        # Test that it can check the data type of the parameter
        self.assertEqual("float", syntax.checkType(3.142))
        self.assertEqual("str", syntax.checkType("hello"))
        self.assertEqual("int", syntax.checkType(15))


if __name__ == '__main__':
    unittest.main(verbosity=2)
