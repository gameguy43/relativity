var old_key = 0;
var new_key = 1;
var smaller_key = 0;
var larger_key = 1;
var old_card = $('');
var new_card = $('');
json_url = 'data.json&callback=?'

// round to nearest tenth
function round(num){
    return Math.round(num*10)/10;
}

function get_random_data_key(not_this_one){
    key = Math.floor(Math.random()*1000) % data.length;
    if(key==not_this_one){
        return get_random_data_key(not_this_one);
    }
    return key;
}

function populate_card(data_key, slot){
    slot.html(''); //clear the card
    title = $('<span class="title">' + data[data_key]['name'] + '</span>');
    slot.append(title);
    img = $('<img src="' + data[data_key]['img'] + '" />');
    slot.append(img);
}

function compute_answer(){
    return round(data[larger_key]['size']/data[smaller_key]['size']);
}

function show_answer(answer){
    answer = $('<span id="answer">' + answer + '</span>');
    answer_text = $('<span id="answer_text">' + data[smaller_key]['name'] + ' in a ' + data[larger_key]['name'] + '</span>');
    $('#countdown').text('');
    $('#countdown').append(answer); $('#countdown').append(answer_text);
}

function count_down_then_show_answer(){
    $('#countdown').countDown({
        startNumber: 5,
        callBack: function(me) {
            show_answer(compute_answer());
            $('#next_button').show();
        }
    });
}

function new_turn(){
    // keep the more recent one, and get a new one
    old_key = new_key;
    new_key = get_random_data_key(old_key);

    //swap the card pointers
    var tmp = old_card;
    old_card = new_card;
    new_card = tmp;

    // figure out which one is smaller
    smaller_key = data[new_key]['size'] < data[old_key]['size'] ? new_key: old_key;
    larger_key = smaller_key == new_key ? old_key: new_key;


    // fade out the new one
    new_card.fadeOut(function(){
        // hide and remove it from the dom
        new_card.hide().detach();
        // populate its new contents
        populate_card(new_key, new_card);
        // put it in the right part of the dom (prepend or append)
        new_key == smaller_key ? function(){old_card.detach(); $('#cards').append(new_card).append(old_card)}() : $('#cards').append(new_card)
        // fade it back in
        new_card.fadeIn();
    });

    // count down and then show answer
    count_down_then_show_answer();
}


//$(document).ready(function(){$.getJSON(json_url, {}, function(retval){
$(document).ready(function(){
    new_key = get_random_data_key();
    new_card = $('#card_slot_one');
    populate_card(new_key, new_card);
    old_card = $('#card_slot_two');
    new_turn();
    $('#next_button').click(function(evt){
        evt.preventDefault();
        new_turn();
        $(evt.target).hide();
        return false;
    });
});
//});});
