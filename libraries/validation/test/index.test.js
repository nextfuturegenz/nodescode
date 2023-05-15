import { validate, check } from "../src";

describe('validation test suite', () => {

    test('Validation Succeeds', done => {
        const test = () => {
            validate({ name: 'test', parameters: { test: true } });
        }

        expect(test());
        done();
    })

    test('Validation Throw Error on missing', done => {
        const test = () => {
            validate({ name: 'test', parameters: { test: null } });
        }
        console.log("inside vt2")
        expect(test).toThrow();
        done();
    })

    test('check returns the missing value', done => {
        const missingItem = check({ name: 'test', parameters: { itemA: true, itemB: null } });

        expect(missingItem.includes('itemB')).toBe(true);
        done();
    })

})