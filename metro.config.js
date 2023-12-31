// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const withNativewind = require("nativewind/metro")

/** @type {import('expo/metro-config').MetroConfig} */

module.exports = withNativewind(getDefaultConfig(__dirname));
