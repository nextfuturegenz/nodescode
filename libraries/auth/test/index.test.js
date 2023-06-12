import { checkAuthState } from "../src";

describe('Authentication test suite', () => {

    test('check auth state', done => {
        const test = () => {
            checkAuthState({ name: 'test', parameters: { test: true } });
        }

        expect(test());
        done();
    })

})