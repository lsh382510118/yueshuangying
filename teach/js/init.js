/**
 * Created by Dell on 2017/7/24.
 */
var init = {
    asidelocation : function(){
        var index =parseInt( localStorage.getItem('aside_nav_index') );
        // console.info($('.aside-nav-item').eq(index));
        $('.aside-nav-item').eq(index).addClass('active').siblings().removeClass('active');
        init.asideMapping();
    },
    headlocation : function(){
        var index =parseInt( localStorage.getItem('head_nav_index') );
        $('.header-nav-item').eq(index).addClass('active').siblings().removeClass('active');
        init.headMapping();
    },
    headMapping : function(){
        var link = $('.header-nav-item.active').data('link');
        $('#pageView').load(link);
    },
    asideMapping : function(){
        var link = $('.aside-nav-item.active').data('link');
        $('.main-r-item').removeClass('active').siblings('#'+link).addClass('active');
    }
}