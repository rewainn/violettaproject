export function reduceTo22(num: number): number {
    while (num > 22) {
        let s = 0;
        const str = num.toString();
        for (let i = 0; i < str.length; i++) {
            s += parseInt(str[i], 10);
        }
        num = s;
    }
    return num;
}

export function calculateMatrixOfDestiny(d: number, m: number, y: number) {
    const p: Record<number, number> = {};
    const yStr = y.toString();
    let sumY = 0;
    for (let i = 0; i < yStr.length; i++) {
        sumY += parseInt(yStr[i], 10);
    }

    p[1] = reduceTo22(d);
    p[2] = reduceTo22(m);
    p[3] = reduceTo22(sumY);
    p[4] = reduceTo22(p[1] + p[2] + p[3]);
    p[5] = reduceTo22(p[1] + p[2] + p[3] + p[4]);
    p[6] = reduceTo22(p[1] + p[2]);
    p[7] = reduceTo22(p[2] + p[3]);
    p[8] = reduceTo22(p[3] + p[4]);
    p[9] = reduceTo22(p[4] + p[1]);
    p[10] = reduceTo22(p[1] + p[5]);
    p[11] = reduceTo22(p[6] + p[5]);
    p[12] = reduceTo22(p[2] + p[5]);
    p[13] = reduceTo22(p[7] + p[5]);
    p[14] = reduceTo22(p[3] + p[5]);
    p[15] = reduceTo22(p[8] + p[5]);
    p[16] = reduceTo22(p[4] + p[5]);
    p[17] = reduceTo22(p[9] + p[5]);
    p[18] = reduceTo22(p[1] + p[10]);
    p[19] = reduceTo22(p[6] + p[11]);
    p[20] = reduceTo22(p[2] + p[12]);
    p[21] = reduceTo22(p[7] + p[13]);
    p[22] = reduceTo22(p[3] + p[14]);
    p[23] = reduceTo22(p[8] + p[15]);
    p[24] = reduceTo22(p[4] + p[16]);
    p[25] = reduceTo22(p[9] + p[17]);
    p[26] = reduceTo22(p[10] + p[5]);
    p[27] = reduceTo22(p[12] + p[5]);
    p[28] = reduceTo22(p[16] + p[14]);
    p[29] = reduceTo22(p[28] + p[14]);
    p[30] = reduceTo22(p[28] + p[16]);
    return p;
}

export function calculateMatrixOfYear(basePoints: Record<number, number>, targetYear: number) {
    let sumYear = 0;
    const yStr = targetYear.toString();
    for (let i = 0; i < yStr.length; i++) {
        sumYear += parseInt(yStr[i], 10);
    }
    const sumYearReduced = reduceTo22(sumYear);
    const y: Record<number, number> = {};
    y[1] = reduceTo22(basePoints[1] + sumYearReduced);
    y[2] = reduceTo22(basePoints[2] + sumYearReduced);
    y[3] = reduceTo22(basePoints[3] + sumYearReduced);
    y[4] = reduceTo22(basePoints[4] + sumYearReduced);
    y[5] = reduceTo22(y[1] + y[2] + y[3] + y[4]);
    return y;
}

export function calculateCompatibilityMatrix(p1: Record<number, number>, p2: Record<number, number>) {
    const c: Record<number, number> = {};
    c[1] = reduceTo22(p1[1] + p2[1]);
    c[2] = reduceTo22(p1[2] + p2[2]);
    c[3] = reduceTo22(p1[3] + p2[3]);
    c[4] = reduceTo22(p1[4] + p2[4]);
    c[5] = reduceTo22(p1[5] + p2[5]);
    c[6] = reduceTo22(p1[6] + p2[6]);
    c[7] = reduceTo22(p1[7] + p2[7]);
    c[8] = reduceTo22(p1[8] + p2[8]);
    c[9] = reduceTo22(p1[9] + p2[9]);
    c[16] = reduceTo22(c[4] + c[5]);
    c[10] = reduceTo22(c[1] + c[5]);
    c[12] = reduceTo22(c[2] + c[5]);
    c[14] = reduceTo22(c[3] + c[5]);
    c[18] = reduceTo22(c[1] + c[10]);
    c[20] = reduceTo22(c[2] + c[12]);
    c[22] = reduceTo22(c[3] + c[14]);
    c[24] = reduceTo22(c[4] + c[16]);
    c[26] = reduceTo22(c[10] + c[5]);
    c[27] = reduceTo22(c[12] + c[5]);
    c[28] = reduceTo22(p1[28] + p2[28]);
    c[29] = reduceTo22(c[28] + c[14]);
    c[30] = reduceTo22(c[28] + c[16]);
    return c;
}

export const outlineColorsByPoint: Record<number, string> = {
    1: "#AE8FBE", 2: "#AE8FBE", 3: "#C75A5A", 4: "#C75A5A", 5: "#FFFEBC",
    10: "#A3B0E0", 12: "#A3B0E0", 14: "#F2B57D", 16: "#F2B57D",
    18: "#5A70C7", 20: "#5A70C7", 26: "#89B897", 27: "#89B897"
};

export const defaultOutlineColor = "#DFC4C9";

export const destinyPositions: Record<number, { x: number, y: number }> = {
    1: { x: 36, y: 400 }, 2: { x: 400, y: 36 }, 3: { x: 764, y: 400 }, 4: { x: 400, y: 764 }, 5: { x: 400, y: 400 },
    6: { x: 142, y: 142 }, 7: { x: 658, y: 142 }, 8: { x: 658, y: 658 }, 9: { x: 142, y: 658 },
    10: { x: 142, y: 400 }, 11: { x: 217, y: 217 }, 12: { x: 400, y: 142 }, 13: { x: 583, y: 217 },
    14: { x: 658, y: 400 }, 15: { x: 583, y: 583 }, 16: { x: 400, y: 658 }, 17: { x: 217, y: 583 },
    18: { x: 92, y: 400 }, 19: { x: 182, y: 182 }, 20: { x: 400, y: 92 }, 21: { x: 617, y: 182 },
    22: { x: 707, y: 400 }, 23: { x: 617, y: 617 }, 24: { x: 400, y: 707 }, 25: { x: 182, y: 617 },
    26: { x: 264, y: 400 }, 27: { x: 400, y: 264 }, 28: { x: 496, y: 496 }, 29: { x: 576, y: 464 }, 30: { x: 464, y: 576 }
};

export const yearPositions: Record<number, { x: number, y: number }> = {
    1: { x: 56, y: 400 },
    2: { x: 400, y: 56 },
    3: { x: 744, y: 400 },
    4: { x: 400, y: 744 },
    5: { x: 400, y: 400 }
};

export const destinyConnections: [number, number][] = [
    [1, 2], [2, 3], [3, 4], [4, 1],
    [1, 5], [2, 5], [3, 5], [4, 5],
    [1, 6], [6, 2], [2, 7], [7, 3],
    [3, 8], [8, 4], [4, 9], [9, 1],
    [6, 7], [7, 8], [8, 9], [6, 9],
    [6, 8], [7, 9]
];

export const yearConnections: [number, number][] = [
    [1, 2], [2, 3], [3, 4], [4, 1],
    [1, 5], [2, 5], [3, 5], [4, 5]
];
