var data = {};
var data_len = 0;
var data_int_keys = 0;
json_url = 'data.json&callback=?'

//DEBUG
data = {
    'Diameter of the Moon' : 100,
    'Diameter of the Sun' : 1000,
    'Diameter of Earth' : 400,
    };

function prep_data(){
    data_int_keys = new Array();
    id = 0;
    for(key in data){
        data_int_keys[id] = key;
        id++;
    }
}

function get_random_data_key(not_this_one){
    key = Math.floor(Math.random()*1000) % data_int_keys.length;
    if(key==not_this_one && data_int_keys.length > 1){
        return get_random_data_key(not_this_one);
    }
    return key;
}

function display_card(data_key, slot){
    slot = $('.card_slot_' + slot);
    slot.html(''); //clear the card
    card = $('<span class="title">' + data_int_keys[data_key] + '</span>')
//data[data_int_keys[data_key]]
    slot.append(card);
}

function compute_answer(key1, key2){
    return data[data_int_keys[key1]] / data[data_int_keys[key2]];
}

function show_answer(answer){
    answer = $('<span class="answer">' + answer + '</span>');
    $('body').append(answer);
}


//$(document).ready(function(){$.getJSON(json_url, {}, function(retval){
$(document).ready(function(){
    // set up the data
    prep_data();

    // choose a random two
    item1_key = get_random_data_key();
    item2_key = get_random_data_key(item1_key);

    // display them
    display_card(item1_key, 'left');
    display_card(item2_key, 'right');

    //countdown
    $('#countdown').countDown({
        startNumber: 10,
        callBack: function(me) {
            $(me).text('All done! This is where you give the reward!').css('color','#090');
        }
    });

    // compute their relativity
    setTimeout(function(){show_answer(compute_answer(item1_key, item2_key))}, 1000);

});
//});});
