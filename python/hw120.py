#1
import random

class Die:
    sides = 0
    def __init__(self, sides):
        self.sides = sides
    def roll(self):
         return random.randint(1, self.sides)


#2
class SixSidedDie(Die):
    def __init__(self):
        super().__init__(6)


#3
die1 = Die(10)
result1 = die1.roll()
print(result1)

die2 = SixSidedDie()
result2 = die2.roll()
print(result2)
