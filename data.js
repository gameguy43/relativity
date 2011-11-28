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
'http://chview.nova.org/station/iss-sta2.jpg',
    },
    {
        'name': 'Diameter of Earth',
        'size': 6378000,
        'img' :
'http://www.windows2universe.org/earth/images/earth_apollo17.jpg',
    },
    {
        'name': 'Diameter of Mars',
        'size': 3397000,
        'img' :
'http://1.bp.blogspot.com/-rhiOFYMxBFU/TbrUZrxYADI/AAAAAAAAAz4/ZMsKAPshEeU/s1600/mars.gif',
    },
    {
        'name': 'Diameter of Mercury',
        'size': 2440000,
        'img' :
'http://home.honolulu.hawaii.edu/~pine/images/Ganymede.gif',
    },
    {
        'name': 'Diameter of Venus',
        'size': 6051000,
        'img' :
'http://solarsystemquick.com/images/planet_venus_1.jpg',
    },
    {
        'name': 'Diameter of Jupiter',
        'size': 71492000,
        'img' :
'http://www.gearthblog.com/images/images2006/jupiter.jpg',
    },
    {
        'name': 'Diameter of Saturn',
        'size': 60268000,
        'img' :
'http://scienceblogs.com/startswithabang/upload/2009/10/all_the_junk_in_our_solar_syst/saturn_generic_600.jpg',
    },
    {
        'name': 'Diameter of Uranus',
        'size': 25559000,
        'img' :
'http://www.windows2universe.org/uranus/images/uranus_med.jpg',
    },
];
var data_other = [
    {
        'name': '1 meter',
        'size': 1,
        'img' :
'http://upload.wikimedia.org/wikipedia/commons/0/03/Metre_pliant_500px.png',
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
'http://www.carsrevolution.com/wp-content/uploads/2011/07/New-Porsche-911-with-Old-One-by-Singer-looks-very-elegant-with-green-appearance.jpg',
        'level': 1,
    },
    {
        'name': 'Average human height',
        'size': 1.68,
        'img' :
'http://gregcarver.com/blog/wp-content/uploads/2011/02/eur-vitruvian_man.jpg',
        'level': 1,
    },
    {
        'name': 'Height of the Sears Tower',
        'size': 442,
        'img' :
'http://3.bp.blogspot.com/_zJpnTu57Koc/TT2OAtGBR5I/AAAAAAAAabE/rWbjSRRca1s/s1600/LensImpressions-03-94.jpg',
        'level': 2,
    },
    {
        'name': 'Height of Mt. Moosilauke',
        'size': 1464,
        'img' :
'http://www.dartmouth.edu/~linguist/images/darthikemtmoosilauke.jpg',
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
'http://upload.wikimedia.org/wikipedia/commons/d/de/Nile_River_and_delta_from_orbit.jpg',
        'level': 2,
    },
    {
        'name': 'Length of Blood Vessels in an Adult Human Body (end-to-end)',
        'size': 161000000,
        'img' :
'http://www.healthline.com/images/gale/big/gec_01_img0005.jpg',
        'level': 3,
    },
    {
        'name': 'Deepest Point of the Earth\'s Oceans (Mariana Trench)',
        'size': 10924,
        'img' :
'http://upload.wikimedia.org/wikipedia/commons/1/1b/Marianatrenchmap.png',
        'level': 3,
    },
    {
        'name': 'Total Length of Paved Road in the US',
        'size': 6300000000,
        'img' :
'http://frjamescoles.files.wordpress.com/2009/12/southwest-desert-road.jpg',
        'level': 3,
    },
];

for(key in data_planets){
    data_planets[key]['level'] = 4;
}

var data_all = data_planets.concat(data_other);
