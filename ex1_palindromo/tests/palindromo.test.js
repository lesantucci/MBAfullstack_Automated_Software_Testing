const { isPalindromo } = require("../src/palindromo");

describe('Devem ser verdadeiros', () => {
    
    test('bob', () => {
        const resultado = isPalindromo('Rotator');
        expect(resultado).toBeTruthy();
    });

    test('madam', () => {
        const resultado = isPalindromo('madam');
        expect(resultado).toBeTruthy();
    });

    test('1', () => {
        const resultado = isPalindromo('1');
        expect(resultado).toBeTruthy();
    });

    test('Able was I, ere I saw Elba', () => {
        const resultado = isPalindromo('Able was I, ere I saw Elba');
        expect(resultado).toBeTruthy();
    });

    test('Madam I´m Adam', () => {
        const resultado = isPalindromo('Madam I´m Adam');
        expect(resultado).toBeTruthy();
    });

    test('Step on no pets.', () => {
        const resultado = isPalindromo('Step on no pets.');
        expect(resultado).toBeTruthy();
    });

    test('Top spot!', () => {
        const resultado = isPalindromo('Top spot!');
        expect(resultado).toBeTruthy();
    });

    test('02/02/2020', () => {
        const resultado = isPalindromo('02/02/2020');
        expect(resultado).toBeTruthy();
    });

    test('Socorram-me subi no ônibus em marrocos', () => {
        const resultado = isPalindromo('Socorram-me subi no ônibus em marrocos');
        expect(resultado).toBeTruthy();
    });
});

describe('Devem ser falsos', () => {
    test('xyz', () => {
        const resultado = isPalindromo('xyz');
        expect(resultado).toBeFalsy();
    });

    test('elephant', () => {
        const resultado = isPalindromo('elephant');
        expect(resultado).toBeFalsy();
    });

    test('Country', () => {
        const resultado = isPalindromo('Country');
        expect(resultado).toBeFalsy();
    });

    test('Top . post!', () => {
        const resultado = isPalindromo('Top . post!');
        expect(resultado).toBeFalsy();
    });

    test('Wonderful-fool', () => {
        const resultado = isPalindromo('Wonderful-fool');
        expect(resultado).toBeFalsy();
    });

    test('Wild imagination!', () => {
        const resultado = isPalindromo('Wild imagination!');
        expect(resultado).toBeFalsy();
    });
});