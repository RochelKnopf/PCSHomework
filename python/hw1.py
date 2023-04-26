# 2
fruits = ['apple', 'orange', 'pear', 'grapefruit', 'banana']
print(fruits)

# 3
secondToLastFruit = fruits[-2]
slice = secondToLastFruit[2:-2]
print(slice)

# 4
for i in range(1, 11):
    for j in range(1, 11):
        print(i * j, end='\n')
    print()

# 5
pickedNumber = 10
win = False
while win == False:
    try:
        number = int(input('Pick a number'))
    except ValueError:
        print('Enter a number please')

    if (number == pickedNumber):
        win = True
        print('You win!!')
