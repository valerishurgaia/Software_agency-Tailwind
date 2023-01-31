module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                'pinkTree': "url('./img/lateNight.jpg')",
                'Square-blue': "url(./img/Square-blue.jpg)",
                'Blue-Nature': "url(./img/Blue-Nature.jpg)",
                'Neon-Blue': "url(./img/Neon-Blue.jpg)",
                'night-lake': "url(./img/night-lake.jpg)"
                },
                height: {
                    '800': '50rem',
                    '740': '46.25rem',
                    '485': '30.25rem',
                    '600': '37.5rem',
                },
                colors: {
                    'dark-blue': '#0C1741',
                    'almost-grey':'#555151',
                    'light-blue': "#4A72FF",
                    'light-black': "#373636",
                    'very-dark-blue :)': '#001F23',
                    'darkest-blue :D':'#020A28'
                },
                width: {
                    '600': '40rem',
                    '688': '44rem'
                }
        },
    },
    plugins: [],
}