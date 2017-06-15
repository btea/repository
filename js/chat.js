/**
 * Created by zz on 2017/6/15.
 */
$(".right").click(function(){
    let content = $(".left").text();
    let data = "key=02e9e807348444dc9254c3f4a9eaf9a0";
    data += "&info="+content;
    data += "&userid=1234";
    $.ajax({
        type: "post",
        url: "http://www.tuling123.com/openapi/api",
        data: data,
        dataType: 'json',
        success: function(data){
            xiaoniaoshow(data);
        }
    })
    let blankcon = $(".left").text();
    blankshow(blankcon);
})
function xiaoniaoshow(data){
    let xiao = $($(".xiaoniao")[0]).clone();
    $(xiao[0].children[1]).text(data.text);
    $("#bg").append(xiao);
}
function blankshow(blankcon){
    let blank = $($(".blank")[0]).clone();
    $(blank[0].children[1]).text(blankcon);
    $("#bg").append(blank);
    $(".left").text('');
}
$(window).keyup(function(e){
    if(e.keyCode == 13){
        $(".right").click();
    }
})