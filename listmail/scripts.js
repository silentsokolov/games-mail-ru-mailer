(function($) {
    $(document).ready(function () {
        var SLOT = 1;
        var SLOT_G = 1;
        var INSERT_IN = 5;

        // function add slot
        function add_slot(){
            var INPUT_SLOT = '<span id="input_slot_' + SLOT_G + '">\
            <p>Слот ' + SLOT_G + '</p> \
            <p>\
                <input placeholder="Картинка" id="fimg.' + SLOT + '" type="text">\
                <input placeholder="Ссылка" id="furl.' + SLOT + '" type="text">\
                <input placeholder="Заголовок" id="ftext.' + SLOT + '" type="text">\
            </p>\
            <p>\
                <input placeholder="Картинка" id="fimg.' + (SLOT + 1) + '" type="text">\
                <input placeholder="Ссылка" id="furl.' + (SLOT + 1) + '" type="text">\
                <input placeholder="Заголовок" id="ftext.' + (SLOT + 1) + '" type="text">\
            </p>\
            <p class="remote_slot link" data-number-slot="' + SLOT_G + '">- Remote this slot</p>\
            <hr />\
            </span>\
            ';

            var TABLE_SLOT = '\
        <tr id="table_slot_' + SLOT_G + '">\
            <td align="center" style="height:37px; padding:13px 20px; ">\
                <table border="0" cellpadding="0" cellspacing="0" >\
                    <tr>\
                        <td align="left" width="228" style="padding-bottom:5px;">\
                            <a id="url.' + SLOT + '" style="width:220px; display:block;padding:3px; -webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px; border:1px solid #e0e0e0; height:130px;" href="http://r.mail.ru/cln5757/games.mail.ru/pc/articles/review/igra_prestolov/" target="_blank">\
                                <img id="img.' + SLOT + '" src="http://games.mail.ru/pre_big_crop/pic/pc/gallery/ef/a5/afede004.jpeg"  />\
                            </a>\
                        </td>\
                        <td align="right" width="228" style="padding-left:20px;padding-bottom:5px;">\
                            <a id="url.' + (SLOT + 1) + '" style="width:220px;display:block;padding:3px; -webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px; border:1px solid #e0e0e0;" href="http://r.mail.ru/cln5757/games.mail.ru/pc/articles/preview/assassin_s_creed_3/" target="_blank">\
                                <img id="img.' + (SLOT + 1) + '" src="http://games.mail.ru/pre_big_crop/pic/pc/gallery/ef/a5/2a0d8b7e.jpeg"  />\
                            </a>\
                        </td>\
                    </tr>\
                        <td align="left" width="228" style="vertical-align:top;">\
                            <a id="text.' + SLOT + '" href="http://r.mail.ru/cln5757/games.mail.ru/pc/articles/review/igra_prestolov/" target="_blank" style="text-decoration:none;margin:0px 0px 0px 0px;color:#168de2; text-align:left; font-size:13px;font-weight:bold; font-family:Verdana;word-wrap:break-word;width:224px; padding-left:4px; display:block; padding-bottom:13px;">\
                                Заголовок\
                            </a>\
                        </td>\
                        <td align="right" style="padding-left:20px; width:228px; vertical-align:top;">\
                            <a id="text.' + (SLOT + 1) + '" href="http://r.mail.ru/cln5757/games.mail.ru/pc/articles/preview/assassin_s_creed_3/" target="_blank" style="text-decoration:none;margin:5px 0px 0px 0px;float: left;padding: 0px 0px 0px 25px;color:#2876b7; text-align:left; font-size:13px;font-weight:bold; font-family:Verdana;">\
                                Заголовок\
                            </a>\
                        </td>\
                    </tr>\
                </table>\
            </td>\
        </tr>';

            $('.input-block').append(INPUT_SLOT);
            $('table:eq(2)').append(TABLE_SLOT);
        }

        // function replace
        function rep(slot_int){
            // img
            // replace bad url to good url
            var re = /(.*)(\/pic\/pc\/.*jpeg$)/;
            var v = $('input[id=fimg\\.'+slot_int+']').val();
            var s = v.replace(re, "$2");

            $('#img\\.'+slot_int).attr('src', 'http://games.mail.ru/pre_big_crop' + s);
            // url
            $('#url\\.'+slot_int).attr('href', $('input[id=furl\\.'+slot_int+']').val().replace('http://games.mail.ru/', 'http://r.mail.ru/cln5757/games.mail.ru/'));
            // text
            $('#text\\.'+slot_int).attr('href', $('input[id=furl\\.'+slot_int+']').val().replace('http://games.mail.ru/', 'http://r.mail.ru/cln5757/games.mail.ru/'));
            $('#text\\.'+slot_int).text($('input[id=ftext\\.'+slot_int+']').val());
        }

        function rep_m(){
            // text main
            $('#start').html($('textarea#table_1').val());
            $('#end').text($('textarea#table_2').val());
            $('#month_m').text($('input[id=fmonth_m]').val());
            // img
            // replace bad url to good url
            var re = /(.*)(\/pic\/pc\/.*jpeg$)/;
            var v = $('input[id=fimg_m]').val();
            var s = v.replace(re, "$2");
            $('#img_m').attr('src', 'http://games.mail.ru/pre_xl_resize/' + s);
            // url
            $('#url_m').attr('href', $('input[id=furl_m]').val().replace('http://games.mail.ru/', 'http://r.mail.ru/cln5757/games.mail.ru/'));
            // text
            $('#text_m').attr('href', $('input[id=furl_m]').val().replace('http://games.mail.ru/', 'http://r.mail.ru/cln5757/games.mail.ru/'));
            $('#text_m').text($('input[id=ftext_m]').val());
        }

        // button add slot
        $('.add_slot').live('click',function(e) {
            SLOT_G += 1;
            SLOT += 1;
            add_slot();
            SLOT += 1;
            INSERT_IN += 1;
        });

        // button remote slot
        $('.remote_slot').live('click',function(e) {
            var slot_id = $(this).attr("data-number-slot");
            $('#table_slot_'+slot_id).remove();
            $('#input_slot_'+slot_id).remove();
        });

        $(':input').live('change', function() {
            console.log(SLOT);
            for (var i = 0; i <= SLOT; i++) {
                // replace slots
                rep(i);
                // replace main
                rep_m();
                // RETURN LISTMAIL
                $('textarea[id=table_3]').text($('.mane').html());
            }
        });

    });
})(jQuery);
