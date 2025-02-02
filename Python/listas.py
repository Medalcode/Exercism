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


def list_contains_round(rounds, number):
    if number in rounds:
        return True
    else:
        return False


def card_average(hand):
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
        

def approx_average_is_average(hand):
    suma_real = sum(hand)
    promedio_real = suma_real / len(hand)
    
    promedio_extremos = (hand[0] + hand[-1]) / 2

    mediana = hand[len(hand) // 2]
    
    return promedio_extremos == promedio_real or mediana == promedio_real

def average_even_is_average_odd(hand):
    contador_par = 0
    suma_par = 0
    contador_impar = 0
    suma_impar = 0

    for i in range(len(hand)):
        if i % 2 == 0:
            contador_par += 1
            suma_par += hand[i]
        else:
            contador_impar += 1
            suma_impar += hand[i]

    promedio_par = suma_par / contador_par if contador_par != 0 else 0
    promedio_impar = suma_impar / contador_impar if contador_impar != 0 else 0

    return promedio_par == promedio_impar


def maybe_double_last(hand):