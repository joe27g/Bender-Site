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
    },
    redirects: async () => [{
        source: '/invite_premium',
        destination: '/invite_pro',
        permanent: true,
    }, {
        source: '/beta_invite',
        destination: '/invite_beta',
        permanent: true,
    }]
}