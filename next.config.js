/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'cdn.discordapp.com',
            port: '',
            pathname: '/avatars/**',
        }, {
            protocol: 'https',
            hostname: 'cdn.discordapp.com',
            port: '',
            pathname: '/embed/avatars/**',
        }]
    }
}