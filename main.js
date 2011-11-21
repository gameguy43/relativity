var left_key = 0;
var right_key = 1;
json_url = 'data.json&callback=?'

function get_random_data_key(not_this_one){
    key = Math.floor(Math.random()*1000) % data.length;
    if(key==not_this_one){
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

function count_down_then_show_answer(){
    $('#countdown').countDown({
        startNumber: 5,
        callBack: function(me) {
            show_answer(compute_answer(left_key, right_key));
            $('#next_button').show();
        }
    });

}

function new_turn(){
    // choose a random two
    left_key = right_key;
    right_key = get_random_data_key(left_key);

    // display them
    display_card(left_key, 'left');
    display_card(right_key, 'right');

    // count down and then show answer
    count_down_then_show_answer();
}


//$(document).ready(function(){$.getJSON(json_url, {}, function(retval){
$(document).ready(function(){
    left_key = get_random_data_key();
    new_turn();
    $('#next_button').click(function(evt){
        evt.preventDefault();
        new_turn();
        $(evt.target).hide();
        return false;
    });
});
//});});
