class GeneticAlgorithm {
    constructor() {
        this.random = Math.random;
    }

    generate(length) {
        return Array.from({ length }, () => (this.random() < 0.5 ? "0" : "1")).join("");
    }

    crossover(chromosome1, chromosome2, probability) {
        if (this.random() > probability) return [chromosome1, chromosome2];
        const point = Math.floor(this.random() * chromosome1.length);
        const offspring1 = chromosome1.slice(0, point) + chromosome2.slice(point);
        const offspring2 = chromosome2.slice(0, point) + chromosome1.slice(point);
        return [offspring1, offspring2];
    }

    mutate(chromosome, probability) {
        return chromosome
            .split("")
            .map((gene) => (this.random() < probability ? (gene === "0" ? "1" : "0") : gene))
            .join("");
    }

    select(population, fitnesses) {
        const totalFitness = fitnesses.reduce((sum, fitness) => sum + fitness, 0);
        const selectOne = () => {
            const threshold = this.random() * totalFitness;
            let runningSum = 0;
            for (let i = 0; i < population.length; i++) {
                runningSum += fitnesses[i];
                if (runningSum >= threshold) return population[i];
            }
        };
        return [selectOne(), selectOne()];
    }

    run(fitnessFunction, chromosomeLength, crossoverProbability, mutationProbability, iterations = 100) {
        let population = Array.from({ length: 100 }, () => this.generate(chromosomeLength));
        for (let i = 0; i < iterations; i++) {
            const fitnesses = population.map(fitnessFunction);
            const newPopulation = [];
            while (newPopulation.length < population.length) {
                const [parent1, parent2] = this.select(population, fitnesses);
                const [child1, child2] = this.crossover(parent1, parent2, crossoverProbability);
                newPopulation.push(this.mutate(child1, mutationProbability));
                if (newPopulation.length < population.length) {
                    newPopulation.push(this.mutate(child2, mutationProbability));
                }
            }
            population = newPopulation;
        }
        const fitnesses = population.map(fitnessFunction);
        const maxFitnessIndex = fitnesses.indexOf(Math.max(...fitnesses));
        return population[maxFitnessIndex];
    }
}