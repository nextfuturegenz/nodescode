/* eslint-disable */

var replace = require('@rollup/plugin-replace');

module.exports = {
    rollup(config, opts) {
        config.plugins = config.plugins.map(plugin =>
            plugin.name === 'replace' ? replace({
                'process.env.NODE_ENV': JSON.stringify(opts.env),
                preventAssignment: true,
            }) : plugin,
        );
        return config; // must return config
    }
}