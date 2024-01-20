export function findOutlier(integers: number[]): number {
    const parity = integers.reduce((acc, num) => acc + (num % 2), 0);

    const isParityMaj = parity < integers.length / 2;

    return integers.find((num) => (num % 2 === 0) !== isParityMaj) || 0;
}