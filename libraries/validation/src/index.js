const missing = value => {
    return value === null || value === undefined;
}

// Checks returns errors for use in async functions
const check = ({ name = null, parameters = {} } = {}) => {
    const identifier = name ? `'${name}'` : 'function';
    for (const [key, value] of Object.entries(parameters)) {
        if (missing(value)) return `Invalid '${key}' passed to ${identifier}`;
    }
    return null;
}

// Validate throws errors for use in sync functions
const validate = ({ name = null, parameters = {} } = {}) => {
    const identifier = name ? `'${name}'` : 'function';
    for (const [key, value] of Object.entries(parameters)) {
        if (missing(value)) throw new Error(`Invalid '${key}' passed to ${identifier}`);
    }
    return null;
}

export { check, validate }
