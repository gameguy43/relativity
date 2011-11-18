var data = {};
var data_len = 0;
var data_int_keys = 0;
json_url = 'data.json&callback=?'

//DEBUG
data = {
    'moon' : 100,
    'sun' : 1000,
    'earth' : 400,
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
    card = data[data_int_keys[data_key]];
    slot.append(card);
}


//$(document).ready(function(){$.getJSON(json_url, {}, function(retval){
$(document).ready(function(){
    // set up the data
    prep_data();

    // choose a random two
    item1_key = get_random_data_key();
    item2_key = get_random_data_key(item1_key);
    console.log(item1_key);
    console.log(item2_key);

    // display them
    display_card(item1_key, 'left');
    display_card(item2_key, 'right');

    // compute their relativity

});
//});});
