function getHeaderData(e){let a=e.navphone;for(let t=0;t<a.length;t++){var i=a[t].img.substring(3);let e=$("<li></li>");var s=$(".phone");e.html(`
        <a href="detail.html?goodsId=${a[t].id}">
                <img src="${i}" />
                <p>${a[t].title}</p>
                <p>￥${a[t].price}</p>
              </a>
        `).appendTo(s)}let o=e.navlipro;for(let t=0;t<o.length;t++){var r=o[t].img.substring(3);let e=$("<li></li>");var n=$(".lipro");e.html(`
        <a href="detail.html?goodsId=${o[t].id}">
                <img src="${r}" />
                <p>${o[t].title}</p>
                <p>￥${o[t].price}</p>
              </a>
        `).appendTo(n)}let l=e.navvoice;for(let t=0;t<l.length;t++){var h=l[t].img.substring(3);let e=$("<li></li>");var d=$(".voice");e.html(`
        <a href="detail.html?goodsId=${l[t].id}">
                <img src="${h}" />
                <p>${l[t].title}</p>
                <p>￥${l[t].price}</p>
              </a>
        `).appendTo(d)}let p=e.navparts;for(let t=0;t<p.length;t++){var g=p[t].img.substring(3);let e=$("<li></li>");var c=$(".parts");e.html(`
        <a href="detail.html?goodsId=${p[t].id}">
                <img src="${g}" />
                <p>${p[t].title}</p>
                <p>￥${p[t].price}</p>
              </a>
        `).appendTo(c)}let u=e.navpandaer;for(let t=0;t<u.length;t++){var m=u[t].img.substring(3);let e=$("<li></li>");var f=$(".pandaer");e.html(`
        <a href="detail.html?goodsId=${u[t].id}">
                <img src="${m}" />
                <p>${u[t].title}</p>
                <p>￥${u[t].price}</p>
              </a>
        `).appendTo(f)}}$.ajax({url:"./index-data/nav-data.json",method:"GET",success:function(e){getHeaderData(e)}}),$(function(){$("#header-nav ul li a").mouseenter(function(){$(this).css({color:"#008cff"}),$(this).parent().siblings().find("a").css({color:"#333"});let e=$(this).parent().index();e<5?($("#bg-show").stop().slideDown(200,()=>{$(".header-sub").eq(e).stop().fadeIn(200).siblings().hide()}),$(".header-sub ul li").mouseenter(function(){$(this).stop().animate({opacity:1},100).siblings().stop().animate({opacity:.5},200)}),$("#logo").attr("src","./img/header/logo_b.png")):9==e?($("#bg-show").stop().css({display:"block"}).animate({height:410},200),$(".header-sub:last").stop().fadeIn(300).siblings().hide(),$("#logo").attr("src","./img/header/logo_b.png")):($("#bg-show").stop().hide(),$("#bg-show").css({height:257}),$(".header-sub").hide())}),$("#header-search").mouseenter(()=>{$(".header-sub:last").stop().hide()}),$("#header-nav").mouseleave(function(){$("#header-nav").find("a").css({color:"#333"})}),$.extend({enterShow:function(e,t){e.mouseenter(function(){t.show()}).mouseleave(function(){t.mouseenter(function(){$(this).show()}),t.hide()}),t.mouseleave(function(){$(this).hide()})},changeLogo:function(){$("#logo").attr("src","./img/header/logo_w.png")},BorderColorGray:function(){$("#header-search").addClass("header-search-bright")}}),$.enterShow($("#header-user a:first"),$(".header-user-info")),$.enterShow($("#header-user a:eq(1)"),$(".header-user-cart")),$("#bg-show").mouseleave(function(){$(".header-sub ul li").animate({opacity:1}),$(this).stop().hide(),$(".header-sub").hide(),$("#bg-show").css({height:257}),$("#page_index")[0]&&$.changeLogo()})});