var data = {};
var data_len = 0;
var data_int_keys = 0;
json_url = 'data.json&callback=?'

//DEBUG
data = [
    {
        'name': 'Diameter of Earth',
        'size': 100,
        'img' : 'http://www.windows2universe.org/earth/images/earth_apollo17.jpg',
    },
    {
        'name': 'Diameter of Sun',
        'size': 10000,
        'img' : 'http://www.windows2universe.org/earth/images/earth_apollo17.jpg',
    },
    {
        'name': 'Diameter of Moon',
        'size': 10,
        'img' : 'http://www.windows2universe.org/earth/images/earth_apollo17.jpg',
    },
    ];

function get_random_data_key(not_this_one){
    key = Math.floor(Math.random()*1000) % data.length;
    if(key==not_this_one && data_int_keys.length > 1){
        return get_random_data_key(not_this_one);
    }
    return key;
}

function display_card(data_key, slot){
    slot = $('#card_slot_' + slot);
    slot.html(''); //clear the card
    title = $('<span class="title">' + data[data_key]['name'] + '</span>');
    slot.append(title);
    img = $('<img src="' + data[data_key]['img'] + '" />');
    console.log(img);
    slot.append(img);
}

function compute_answer(key1, key2){
    return data[key1]['size'] / data[key2]['size'];
}

function show_answer(answer){
    answer = $('<span id="answer">' + answer + '</span>');
    $('#countdown').text('');
    $('#countdown').append(answer);
}


//$(document).ready(function(){$.getJSON(json_url, {}, function(retval){
$(document).ready(function(){
    // set up the data
    //prep_data();

    // choose a random two
    item1_key = get_random_data_key();
    item2_key = get_random_data_key(item1_key);

    // display them
    display_card(item1_key, 'left');
    display_card(item2_key, 'right');

    //countdown
    $('#countdown').countDown({
        startNumber: 5,
        callBack: function(me) {
            show_answer(compute_answer(item1_key, item2_key));
        }
    });

    // compute their relativity
    setTimeout(function(){}, 1000);

});
//});});
