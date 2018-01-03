$(document).ready(function() {
    // Custom Scroll for the Saved Looks
    $(".saved-looks > #saved-looks-list").slimScroll({
        height: '350px',
        width: '90px',
        size: '26px',
        railVisible: true,
        alwaysVisible: true,
        railColor: 'url("assets/images/bg/scroller.png") 0 50% repeat-y',
        railOpacity: 1,
        wheelStep: 30
    });
    $(".products-block:not(.item)").slimScroll({
        height: "calc(100% - 42px)",
        // width: '90px',
        size: '8px',
        railVisible: true,
        alwaysVisible: true,
        railColor: 'url("assets/images/bg/scroller.png") 0 50% repeat-y',
        railOpacity: 1,
        wheelStep: 30,
        touchScrollStep: 6
    });

    // Custom Scroll for the Lenses list only for desktop
    if(!Alcon.Config.bIsMobile && !Alcon.Config.bIsTablet){
        $("#face-products-view .tab-content,#eyes-products-view .tab-content,#lips-products-view .tab-content,#hairstyles-products-view .tab-content").slimScroll({
            height: '375px',
            width: '472px',
            railVisible: true,
            alwaysVisible: true,
            size: '26px',
            railColor: 'url("assets/images/bg/scroller.png") 0 50% repeat-y',
            railOpacity: 1,
            wheelStep: 30
        });
    }

    // Initialize tooltips, only for desktop layout on non touch devices
    if(!Alcon.Config.bIsMobile && !Alcon.Config.bIsTablet){
        // body as a container to fix the problem with parent overflow setting
        // https://github.com/twbs/bootstrap/issues/5889
        $('[data-toggle="tooltip"]').tooltip({container: 'body'});
    }


    // Expand/collapse a sidebar
    //EXPANDED STATES IN SIDEBAR

    $(".user-action-buttons .save .button").click(function(){
        $(".user-action-buttons .save").addClass("expanded");
        if (!Alcon.Config.bIsMobile) {
            $(".user-action-buttons .share").removeClass("expanded");
        }
    });
    $(".user-action-buttons .share .button").click(function(){
        if (Alcon.Config.bIsMobile) {
            $(".user-action-buttons .share").toggleClass("expanded");
        }
        else {
            $(".user-action-buttons .share").addClass("expanded");
            $(".user-action-buttons .save").removeClass("expanded");
        }
    });

    // Disable hovering on touch devices
    if (_.isTouchDevice()) {
        $('body').addClass('no-hover');
    }

    $(".no-hover")
        .on('click', '.main-nav-block .open-menu, .main-nav-block .main-window-tabs li', function(e){
            e.stopPropagation();
            $('.main-window-tabs').toggle();
            if( $("#what-i-am-wearing .what-i-am-wearing-content").hasClass("active")) {
                $("#what-i-am-wearing .what-i-am-wearing-content").toggleClass('active');
            }
        })
        .on('click', function(){
            $('.main-window-tabs').hide();
        })
    ;

    $('body').on('click', function(event){
        if ($(event.target).parents('#what-i-am-wearing').length == 0 && $("#what-i-am-wearing .what-i-am-wearing-content").hasClass("active")){
            $("#what-i-am-wearing .what-i-am-wearing-content").toggleClass('active')
        }
    });

    $("body").on('click', '#what-i-am-wearing .heading-block',function(event){
        $("#what-i-am-wearing .what-i-am-wearing-content").toggleClass('active');
        event.stopPropagation();
    });

    $('.main-nav .color-studio-navigation li a')
        .on('click', function(e) {
            Alcon.Router.fnUnSetSubroute('select-product');
        })
        .on('click', function(e) {
            var iFeature = $(this).data('trace-mode');
            var featureName = Alcon.Utils.Helpers.fnGetFeatureNameById(parseInt(this.hash.replace("#", "")));
            if(featureName === undefined){
                featureName = this.innerHTML.toLowerCase();
            }
            Alcon.Utils.Helpers.trackPage("/"+featureName, featureName);
            Alcon.Session.set('iTraceModeFeature', iFeature)
        });

    $('.main-window-tabs li').on('click',function(e){
        if ($(this).hasClass('one-click-look')) {
            if( $("#what-i-am-wearing .what-i-am-wearing-content").hasClass("active")) {
                $("#what-i-am-wearing .what-i-am-wearing-content").toggleClass('active');
            }
            Alcon.Router.oRetraceView.fnFinishTrace(e)
        }
    });

    $("#what-i-am-wearing").on('click', '.product.remove', function(e){
        Alcon.Router.oSelectProductView.fnRemoveProduct(e);
        Alcon.Vme._fnUpdateBeforeAfter();
    });

    $("#what-i-am-wearing").on('click', '.buy', function(e) {
        Alcon.Router.oSelectProductView.trackEcommerce(e)
    });

    //commented out for prevent issue of infinite photo increasing size on mobile landscape
    // why this code was added??
    /* if ($("body").hasClass("no-hover")) {

       $(window).on('resize', function(){
            if ($(window).width() >= 375 && $(window).width() <= 630 && $(window).width() < $(window).height()) {
                var height = $(window).height() - 190 - 32;
                $("#vme-wrapper").css("height", height + 'px')
            }
        });
    };*/

    $(window).on('orientationchange', function() {
        $(window).trigger('resize')
    });


    $(".main-nav-block").on('click', '.scroll-button', function() {
        $(".main-nav-block .color-studio-navigation.active").animate({
            scrollLeft: "+=180"
        }, 150,function() {
            Alcon.Utils.Helpers.fnScrollNavBar();
        });
    });
    $(".main-nav-block .color-studio-navigation").on('touchmove','.active', Alcon.Utils.Helpers.fnScrollNavBar);
    $(".main-nav-block .color-studio-navigation").on('scroll','.active', Alcon.Utils.Helpers.fnScrollNavBar);
});

