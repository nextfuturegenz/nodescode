import { createMachine } from 'xstate';

export const authMachine = createMachine({
    id: 'authMachine',
    initial: 'loading',
    schema: {
        // services: {} as {

        // }
    },
    states: {
        "LOADING": {
            actions: "generateRequestBody",
            invoke: {
                src: "checkAuth",
                onDone: [{
                    target: "SUCESS"
                }],
                onError: [{
                    target: "ERROR"
                }]
            }
        },
        "SUCESS": {

        },
        "ERROR": {

        }
    }
},{
    actions : {
        generateRequestBody : (context, event) => {

        }
    }
})