import email_function
import unittest


class TestEmail(unittest.TestCase):
    def test_01_test(self):
        pass

    def test_02_email(self):
        self.assertEqual("roman.mirakhmedov@evolveu.ca",
                         email_function.email("Roman", "Mirakhmedov"))
        self.assertEqual("larry.shumlich@evolveu.ca",
                         email_function.email("Larry", "Shumlich"))
        self.assertEqual("please use strings", email_function.email(23, True))


if __name__ == '__main__':
    unittest.main(verbosity=2)
