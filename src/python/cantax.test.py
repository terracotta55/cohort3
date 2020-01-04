import cantax
import unittest


class TestCantax(unittest.TestCase):
    def test_01_test(self):
        pass

    def test_02_cantax(self):
        self.assertEqual(0, cantax.calc_tax(-100))
        self.assertEqual(0, cantax.calc_tax(0))
        self.assertEqual(0.15, cantax.calc_tax(1))
        self.assertEqual(1.50, cantax.calc_tax(10))
        self.assertEqual(15.00, cantax.calc_tax(100))
        self.assertEqual(7630.35, cantax.calc_tax(50000))
        self.assertEqual(18141.10, cantax.calc_tax(100000))
        self.assertEqual(31211.10, cantax.calc_tax(150000))
        self.assertEqual(61796.25, cantax.calc_tax(250000))
        self.assertEqual(804296.26, cantax.calc_tax(2500000))


if __name__ == '__main__':
    unittest.main(verbosity=2)
