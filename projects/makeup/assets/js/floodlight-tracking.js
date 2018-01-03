//- Floodlight tracking of controls
//- 
//- Each Floodlight tag is processed independently, so you can put more than one set of Floodlight tags on a webpage.
//- Also you may use Fire a Floodlight tag on a click (https://support.google.com/dfa/partner/answer/134533?hl=en&ref_topic=28831)

$('.enter-studio, #btnEnter').click(function(){
    console.log('2014 AO Colors Enter Studio Button');
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    $('body').append('<iframe src="https://3576711.fls.doubleclick.net/activityi;src=3576711;type=2014a860;cat=2014a687;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
});
// Desktop only
$('li.select-face:not(.inactive)').click(function(){
    console.log('2014 AO Colors Select Photo Button');
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    $('body').append('<iframe src="https://3576711.fls.doubleclick.net/activityi;src=3576711;type=2014a860;cat=2014a967;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
});
// Desktop only
$('.select-lens:not(.inactive)').click(function(){
    console.log('2014 AO Colors Select Lens Color Tab');
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    $('body').append('<iframe src="https://3576711.fls.doubleclick.net/activityi;src=3576711;type=2014a860;cat=2014a585;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
});
// Desktop only
$('.customize-your-look:not(.inactive)').click(function(){
    console.log('2014 AO Colors Customize Your Look Tab');
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    $('body').append('<iframe src="https://3576711.fls.doubleclick.net/activityi;src=3576711;type=2014a860;cat=2014a211;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
});
// Desktop only
$('.free-trial:not(.inactive)').click(function(){
    console.log('2014 AO Colors Get a Free Trial Tab');
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    $('body').append('<iframe src="https://3576711.fls.doubleclick.net/activityi;src=3576711;type=2014a860;cat=2014a396;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
});
// Mobile only
Alcon.EventDispatcher.on('do:track:tab-changing', function(sRoute){
    var axel = Math.random() + "";
    var a = axel * 10000000000000;

    switch (sRoute) {
        case '#select-face':
            console.log('2014 AO Colors Select Photo Button');
            $('body').append('<iframe src="https://3576711.fls.doubleclick.net/activityi;src=3576711;type=2014a860;cat=2014a967;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
            break;
        case '#select-lens':
            console.log('2014 AO Colors Select Lens Color Tab');
            $('body').append('<iframe src="https://3576711.fls.doubleclick.net/activityi;src=3576711;type=2014a860;cat=2014a585;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
            break;
        case '#customize-your-look':
            console.log('2014 AO Colors Customize Your Look Tab');
            $('body').append('<iframe src="https://3576711.fls.doubleclick.net/activityi;src=3576711;type=2014a860;cat=2014a211;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
            break;
        case '#get-free-trial':
            console.log('2014 AO Colors Get a Free Trial Tab');
            $('body').append('<iframe src="https://3576711.fls.doubleclick.net/activityi;src=3576711;type=2014a860;cat=2014a396;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
            break;
    }
});
$('#upload').change(function(){
    console.log('2014 AO Colors Upload Photo Button');
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    $('body').append('<iframe src="https://3576711.fls.doubleclick.net/activityi;src=3576711;type=2014a860;cat=2014a178;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
});

$('.take-picture').click(function(){
    console.log('2014 AO Colors Take Photo Button');
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    $('body').append('<iframe src="https://3576711.fls.doubleclick.net/activityi;src=3576711;type=2014a860;cat=2014a815;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
});

$('.from-facebook').click(function(){
    console.log('2014 AO Colors From Facebook Button');
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    $('body').append('<iframe src="https://3576711.fls.doubleclick.net/activityi;src=3576711;type=2014a860;cat=2014a543;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
});

$('.user-action-buttons .share .button').click(function(e){
    console.log('2014 AO Colors Share Button');
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    $('body').append('<iframe src="https://3576711.fls.doubleclick.net/activityi;src=3576711;type=2014a860;cat=2014a882;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
});

$('.user-action-buttons .save .button').click(function(){
    console.log('2014 AO Colors Save Button');
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    $('body').append('<iframe src="https://3576711.fls.doubleclick.net/activityi;src=3576711;type=2014a860;cat=2014a999;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
});


$('.register-login .register-link').click(function(){
    console.log('2014 AO Colors Register Link');
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    $('body').append('<iframe src="https://3576711.fls.doubleclick.net/activityi;src=3576711;type=2014a860;cat=2014a347;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
});

$('.register-login .login-link').click(function(){
    console.log('2014 AO Colors Login Link');
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    $('body').append('<iframe src="https://3576711.fls.doubleclick.net/activityi;src=3576711;type=2014a860;cat=2014a798;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
});