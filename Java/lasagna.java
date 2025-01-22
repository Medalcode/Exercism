class Lasagna {

    // Método que devuelve el tiempo esperado en el horno
    public int expectedMinutesInOven() {
        return 40;
    }

    // Método que calcula los minutos restantes en el horno
    public int remainingMinutesInOven(int actualMinutesInOven) {
        return expectedMinutesInOven() - actualMinutesInOven;
    }

    // Método que calcula el tiempo de preparación en minutos
    public int preparationTimeInMinutes(int numberOfLayers) {
        return numberOfLayers * 2;
    }

    // Método que calcula el tiempo total en minutos
    public int totalTimeInMinutes(int numberOfLayers, int actualMinutesInOven) {
        return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
    }
}