var data_planets = [
    {
        'name': 'Diameter of the Moon',
        'size': 3474800,
        'img' :
'http://upload.wikimedia.org/wikipedia/commons/d/dd/Full_Moon_Luc_Viatour.jpg',
    },
    {
        'name': 'Distance of the International Space Station from Earth',
        'size': 389461.248,
        'img' :
'https://lh6.googleusercontent.com/-Ah-l8DYh0-M/TtUNHfbr57I/AAAAAAAAANo/EvrcnbQvSTI/s400/iss-sta2.jpg',
    },
    {
        'name': 'Diameter of Earth',
        'size': 6378000,
        'img' :
'https://lh4.googleusercontent.com/-2SQAyRLR7b4/TtU711bJAFI/AAAAAAAAAPU/-rSG1xchhd8/s400/599px-The_Earth_seen_from_Apollo_17.jpg',
    },
    {
        'name': 'Diameter of Mars',
        'size': 3397000,
        'img' :
'https://lh6.googleusercontent.com/-EXDNKI555JM/TtU71kZSl4I/AAAAAAAAAPQ/ZdemAbfPPZc/s400/600px-Mars_Valles_Marineris.jpg',
    },
    {
        'name': 'Diameter of Mercury',
        'size': 2440000,
        'img' :
'https://lh3.googleusercontent.com/-PdXcnVBI5Ks/TtU72BHhGxI/AAAAAAAAAPc/PI7AyZxuHII/s400/605px-Mercury_in_color_-_Prockter07_centered.jpg',
    },
    {
        'name': 'Diameter of Venus',
        'size': 6051000,
        'img' :
'https://lh4.googleusercontent.com/-yU3CYKwvIHI/TtU75FU0KKI/AAAAAAAAAQI/Wci3jvfFgL0/s400/Venus-real.jpg',
    },
    {
        'name': 'Diameter of Jupiter',
        'size': 71492000,
        'img' :
'https://lh5.googleusercontent.com/-KPX2HqWCPyQ/TtU72EbwG5I/AAAAAAAAAPg/W6DsGAmQw9k/s400/622px-Jupiter_by_Cassini-Huygens.jpg',
    },
    {
        'name': 'Diameter of Saturn',
        'size': 60268000,
        'img' :
'https://lh4.googleusercontent.com/-O_KdcLMyHtc/TtU717hRC7I/AAAAAAAAAPY/VMdNq9A9Iuk/s400/800px-Saturn_during_Equinox.jpg',
    },
    {
        'name': 'Diameter of Uranus',
        'size': 25559000,
        'img' :
'https://lh4.googleusercontent.com/-HLsO5RWI0Wc/TtU719P6G7I/AAAAAAAAAP0/jbWftZDiKkI/s400/600px-Uranus2.jpg',
    },
];
var data_other = [
    {
        'name': '1 meter',
        'size': 1,
        'img' :
'https://lh6.googleusercontent.com/-KCSX9QvZJWw/TtUKqR1M5FE/AAAAAAAAANc/yD8om4UA1_0/s0-d/November292011',
        'level': 1,
    },
    /*
    {
        'name': 'Length of a dachshund',
        'size': .41,
        'img' :
'http://www.one4pets.com/pictures/dogs/daschund-running.jpg',
    },
    */
    {
        'name': 'Length of a Porsche ',
        'size': 4.2,
        'img' :
'https://lh4.googleusercontent.com/-X7xdFc9PAGk/TtUKrkfZHBI/AAAAAAAAAMw/FyusJwohPr8/s400/3087741507_c59a6dc4f5_o.jpg',
        'level': 1,
    },
    {
        'name': 'Average human height',
        'size': 1.68,
        'img' :
'https://lh5.googleusercontent.com/-5gEtozymhm4/TtUKtHpjmrI/AAAAAAAAANA/QaICZoa25A4/s400/4861890322_136909aa62_b.jpg',
        'level': 1,
    },
    {
        'name': 'Height of the Sears Tower',
        'size': 442,
        'img' :
'https://lh6.googleusercontent.com/-VFSH5wLgFQA/TtUKtozTVPI/AAAAAAAAANI/3nwyI6gSRs4/s400/sears_tower.jpg',
        'level': 2,
    },
    {
        'name': 'Height of Mt. Moosilauke',
        'size': 1464,
        'img' :
'https://lh3.googleusercontent.com/-UQeEDQ_6iP0/TtU9xsPapwI/AAAAAAAAAQU/BqKrlw-mSoc/s425/ridge-line-in-the-white-mountains.jpg',
        'level': 2,
    },
    /*
    {
        'name': 'Length of the Pan-American Highway',
        'size': 24140000,
        'img' :
'http://upload.wikimedia.org/wikipedia/commons/thumb/1/12/PanAmericanHwy.png/220px-PanAmericanHwy.png',
    },
    */
    {
        'name': 'Length of the Nile',
        'size': 6650000,
        'img' :
'https://lh6.googleusercontent.com/-pm4lBliG7KU/TtUKu8Zd_FI/AAAAAAAAANQ/KEoOgUCVd-U/s400/Nile_River_and_delta_from_orbit.jpg',
        'level': 2,
    },
    {
        'name': 'Length of Blood Vessels in an Adult Human Body (end-to-end)',
        'size': 161000000,
        'img' :
'https://lh3.googleusercontent.com/-2ZxbLEiCq6w/TtUKsRexPiI/AAAAAAAAAM4/Xdoi9NhEKU4/s400/4495939991_b964d38e33_o.jpg',
        'level': 3,
    },
    {
        'name': 'Deepest Point of the Earth\'s Oceans (Mariana Trench)',
        'size': 10924,
        'img' :
'https://lh3.googleusercontent.com/-miUdZ49VY7U/TtU7xt9AcII/AAAAAAAAAPE/z60OWjttJyY/s220/currents_hrov_n2_49158.jpg',
        'level': 3,
    },
    {
        'name': 'Total Length of Paved Road in the US',
        'size': 6300000000,
        'img' :
'https://lh3.googleusercontent.com/-JhmY-ibce-c/TtU74igWzCI/AAAAAAAAAQA/bGSJ_LQaWIY/s400/Picture%2B2.png',
        'level': 3,
    },
];

for(key in data_planets){
    data_planets[key]['level'] = 4;
}

var data_all = data_planets.concat(data_other);
