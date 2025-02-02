"""Functions for tracking poker hands and assorted card tasks.

Python list documentation: https://docs.python.org/3/tutorial/datastructures.html
"""


def get_rounds(number):
    rondas = []
    for i in range(number, number+3 ):
        print(i)
        rondas.append(i)
    
    return rondas


def concatenate_rounds(rounds_1, rounds_2):
    return rounds_1 + rounds_2



hand = [ 1, 2, 3, 4]

def approx_average_is_average(hand):
    print("hand=",hand)
    suma = 0
    for i in range(len(hand)):
        print("i= ",i)
        print("hand[i]=",hand[i])
        suma = suma + hand[i]
        print("suma=",suma) 
        promedio = suma/len(hand)
        print("promedio=",promedio)

    return promedio

hand = [ 1, 2, 3, 4, 5]

def average_even_is_average_odd(hand):
    suma_real = sum(hand)
    promedio_real = suma_real / len(hand)
    promedio = hand[0] + hand[-1] // 2
    mediana = hand[len(hand)//2] 
    print("promedio=",promedio)
    print("mediana=",mediana)
    if  promedio == promedio_real or mediana == promedio_real:
        return True
    else:
        return False


