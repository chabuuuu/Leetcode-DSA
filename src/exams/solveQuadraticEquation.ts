export function solveQuadraticEquation(a: number, b: number, c: number): void {
    const delta: number = b * b - 4 * a * c;
    if (delta < 0) {
        console.log('Phuong trinh vo nghiem');
        return;
    }
    if (delta === 0) {
        const x = (-b / 2) * a;
        console.log('Phuong trinh co nghiem kep: ' + 'x1 = x2 = ' + x);
        return;
    }
    if (delta > 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        console.log(x1);

        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(
            'Phuong trinh co 2 nghiem phan biet: ' +
                'x1 = ' +
                x1 +
                ' x2 = ' +
                x2,
        );
        return;
    }
}
