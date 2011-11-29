//data = $.makeArray(data);
//var data = data_all;
var data = data_all;
var old_key = 0;
var new_key = 1;
var smaller_key = 0;
var larger_key = 1;
var old_card = $('');
var new_card = $('');
var countdown_length = 5;
var level = 1;
var turn = 1;
var idle = true; // true between turns
var started = false;
var sig_figs = 3;
json_url = 'data.json&callback=?'

function preload_images() {
    list_of_images = $.map(data, function(){return this['img']});
    $(list_of_images).each(function(){
        (new Image()).src = this;
    });
}


// round to nearest tenth
function round(num){
    return parseFloat(num.toPrecision(sig_figs))
    //return Math.round(num*10)/10;
}

// thanks, http://www.mredkj.com/javascript/nfbasic.html
function add_commas(nStr){
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function get_random_data_key(not_these_ones, must_be_level){
    //get the list of possible keys
    possible_keys = [];
    for(key in data){
        if($.inArray(key, not_these_ones) == -1 && data[key]['level'] <= level){
            if(must_be_level){
                if(data[key]['level'] == must_be_level){
                    possible_keys.push(key);
                }
            }
            else{
                possible_keys.push(key);
            }
        }
    }
    console.log(possible_keys);
    seed = Math.floor(Math.random()*1000)
    key = possible_keys[seed % possible_keys.length];
    if(!key){
        key = 1;
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
    return add_commas(round(data[larger_key]['size']/data[smaller_key]['size']));
}

function show_answer(answer){
    answer = $('<span id="answer">' + answer + '</span>');
    answer_text = $('<span id="answer_text">' + data[smaller_key]['name'] + ' in a ' + data[larger_key]['name'] + '</span>');
    $('#countdown').text('');
    $('#countdown').append(answer);
    //$('#countdown').append(answer_text);
}

function count_down_then_show_answer(){
    $('#countdown').countDown({
        startNumber: countdown_length,
        callBack: function(me) {
            show_answer(compute_answer());
            $('#next_button').show();
        }
    });
}

function new_level(){
    level++;
    alert('Level ' + level + '. Let\'s get it started');
}

function new_turn_if_idle(){
    if(idle){
        idle = false;
        new_turn();
        idle = true;
    }
}

function new_turn(){
    var new_level_this_turn = turn%5 == 0;
    var get_from_level = undefined;
    if(new_level_this_turn){
        new_level();
        get_from_level = level;
    }
    turn++;
    // keep the more recent one, and get a new one
    old_old_key = old_key;
    old_key = new_key;
    new_key = get_random_data_key([old_key, old_old_key], get_from_level);

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
    $('#next_button').click(function(evt){
        evt.preventDefault();
        new_turn_if_idle();
        $(evt.target).hide();
        return false;
    });
    $('#start_button').click(function(evt){
        evt.preventDefault();
        started = true;
        $('#pre_game').fadeOut(function(){
            $('#pre_game').hide();
            $('#during_game').fadeIn(function(){
                new_turn_if_idle();
            });
        });
        return false;
    });
    $(document).keypress(function(e){
        //space and enter
        next_keys = [32, 13];
        var code = (e.keyCode ? e.keyCode : e.which);
        if(next_keys.indexOf(code) != -1){
            if(started){
                $('#next_button').click();
            }
            else{
                $('#start_button').click();
            }
        }
    });
    preload_images();
});
//});});
