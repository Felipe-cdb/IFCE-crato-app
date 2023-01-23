const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.transformer.minifierPath = 'metro-minify-terser';
config.transformer.minifierConfig = {
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json'],
};

module.exports = config;