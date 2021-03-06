$(document).ready(function() {
    $.fn.fullpage({
        slidesColor: ["#f18101", "#ebb440", "#48d684", "#35b5d2", "#8e6cd3"],
        anchors: ["page1", "page2", "page3", "page4", "page5"],
        loopBottom: true,
        navigation: true,
        resize: true,
        navigationTooltips: ["首页", "发展历程", "招兵买马", "企业文化", "联系我们"],
        afterLoad: function(b, a) {
            $(".section_tit").animate({
                opacity: "1"
            },
            500);
            $(".section_tit").addClass("current");
            if (a == 2) {
                $(".ss-container .ss_border").animate({
                    opacity: "1"
                },
                300);
                $("#ss-container .circle_left").each(function(c, d) {
                    $("#ss-container .circle_left").eq(c).delay(c * 200).animate({
                        left: "0",
                        opacity: "1"
                    },
                    1000)
                });
                $("#ss-container .text_right").each(function(c, d) {
                    $("#ss-container .text_right").eq(c).delay(c * 200 + 100).animate({
                        right: "40px",
                        opacity: "1"
                    },
                    1000)
                });
                $("#ss-container .circle_right").each(function(c, d) {
                    $("#ss-container .circle_right").eq(c).delay(c * 200 + 100).animate({
                        right: "0",
                        opacity: "1"
                    },
                    1000)
                });
                $("#ss-container .text_left").each(function(c, d) {
                    $("#ss-container .text_left").eq(c).delay(c * 200).animate({
                        left: "40px",
                        opacity: "1"
                    },
                    1000)
                })
            }
            if (a == 3) {
                $("#tab .tab_btn a").delay(300).animate({
                    opacity: "1"
                },
                800);
                $("#tab .tab_nr").slideDown(1000);
                $("#tab .boult").fadeIn()
            }
            if (a == 4) {
                $(".section4 .pic img").eq(0).animate({
                    left: "0",
                    top: "0",
                    opacity: "1"
                },
                1000);
                $(".section4 .pic img").eq(4).animate({
                    left: "0",
                    bottom: "0",
                    opacity: "1"
                },
                1000);
                $(".section4 .pic img").eq(1).delay(300).animate({
                    top: "0",
                    opacity: "1"
                },
                1000);
                $(".section4 .pic img").eq(2).animate({
                    top: "220px",
                    opacity: "1"
                },
                1000);
                $(".section4 .pic img").eq(3).animate({
                    right: "0",
                    top: "0",
                    opacity: "1"
                },
                1000);
                $(".section4 .pic img").eq(5).animate({
                    bottom: "0",
                    opacity: "1"
                },
                1000);
                $(".section4 .pic img").eq(6).animate({
                    right: "0",
                    bottom: "0",
                    opacity: "1"
                },
                1000)
            }
            if (a == 5) {
                $(".section5 .mod_left").animate({
                    left: "160px",
                    opacity: "1"
                });
                $(".section5 .mod_bj").animate({
                    bottom: "0"
                });
                $(".section5 .mod_art").animate({
                    right: "204px",
                    opacity: "1"
                },
                1000)
            }
        },
        onLeave: function(a, b) {
            $(".section_tit").animate({
                opacity: "0"
            },
            500);
            $(".section_tit").removeClass("current");
            if (a != "2") {
                $(".ss-container .ss_border").css({
                    opacity: "0"
                });
                $("#ss-container .circle_left").css({
                    left: "-416px",
                    opacity: "0"
                });
                $("#ss-container .text_right").css({
                    right: "416px",
                    opacity: "0"
                });
                $("#ss-container .circle_right").css({
                    right: "-416px",
                    opacity: "0"
                });
                $("#ss-container .text_left").css({
                    left: "416px",
                    opacity: "0"
                })
            }
            if (a == "3") {
                $("#tab .tab_btn a").delay(100).animate({
                    opacity: "0"
                },
                800);
                $("#tab .tab_nr").slideUp(function() {
                    $("#tab .boult").css("display", "none")
                })
            }
            if (a != 4) {
                $(".section4 .pic img").eq(0).css({
                    left: "-400px",
                    top: "-400px",
                    opacity: "0"
                });
                $(".section4 .pic img").eq(4).css({
                    left: "-400px",
                    bottom: "-400px",
                    opacity: "0"
                });
                $(".section4 .pic img").eq(1).css({
                    top: "-400px",
                    opacity: "0"
                });
                $(".section4 .pic img").eq(2).css({
                    top: "-400px",
                    opacity: "0"
                });
                $(".section4 .pic img").eq(3).css({
                    right: "-400px",
                    top: "-400px",
                    opacity: "0"
                });
                $(".section4 .pic img").eq(5).css({
                    bottom: "-400px",
                    opacity: "0"
                });
                $(".section4 .pic img").eq(6).css({
                    right: "-400px",
                    bottom: "-400px",
                    opacity: "0"
                })
            }
            if (a == 5) {
                $(".section5 .mod_left").animate({
                    left: "-300px",
                    opacity: "0"
                });
                $(".section5 .mod_bj").animate({
                    bottom: "-400px"
                });
                $(".section5 .mod_art").animate({
                    right: "-400px",
                    opacity: "0"
                },
                1000)
            }
        }
    })
});
$(function() {
    e();
    setInterval(e, 2000);
    function e() {
        $("a.godown").animate({
            bottom: "50px"
        },
        200).animate({
            bottom: "20px"
        },
        200).animate({
            bottom: "30px"
        },
        200).animate({
            bottom: "20px"
        },
        200).animate({
            bottom: "25px"
        },
        200).animate({
            bottom: "20px"
        },
        200).animate({
            bottom: "22px"
        },
        200).animate({
            bottom: "20px"
        },
        200)
    }
    var c = 0;
    $("#tab .tab_main").eq(c).css("display", "block");
    var f = 0;
    var d = 2;
    var h, i, a;
    g();
    b();
    $("#tab .tab_btn a").mouseover(function() {
        c = $(this).index();
        $("#tab .tab_main").eq(c).css("z-index", d);
        d++;
        $("#tab .tab_main").eq(c).siblings(".tab_main").slideUp(500,
        function() {
            $("#tab .tab_main").eq(c).slideDown()
        });
        $("#tab .tab_main").eq(c).css("top", "0");
        $("#tab .scrol span").css("top", "0");
        g();
        b();
        $("#tab .boult").stop().animate({
            left: c * 290 + 172 + "px"
        })
    });
    $("a.logo").animate({
        top: "0px"
    },
    500);
    function g() {
        $("#tab .tab_left").eq(c).find("a").click(function() {
            $("#tab .tab_main").eq(c).css("top", "0");
            $("#tab .scrol span").css("top", "0");
            f = $(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            $(this).parent().next().children(".tab_art").hide();
            $(this).parent().next().children(".tab_art").eq(f).show();
            if ($("#tab .tab_wrap").height() < $("#tab .tab_main").eq(c).height()) {
                $("#tab .scrol").fadeIn(500);
                var j = $("#tab .tab_wrap").height() * $("#tab .scrol").height() / $("#tab .tab_main").eq(c).height();
                $("#tab .scrol span").height(j)
            } else {
                $("#tab .scrol").hide()
            }
        })
    }
    function b() {
        $("#tab .scrol span").mousedown(function(k) {
            h = k.pageY - parseInt($(this).css("top"));
            var j = $("#tab .tab_main").eq(c).height() - $("#tab .tab_wrap").height();
            $(document).mousemove(function(m) {
                i = m.pageY - h;
                if (i < 0) {
                    i = 0
                } else {
                    if (i >= parseInt($("#tab .scrol").height()) - parseInt($("#tab .scrol span").height()) - 6) {
                        i = parseInt($("#tab .scrol").height()) - parseInt($("#tab .scrol span").height()) - 6
                    }
                }
                $("#tab .scrol span").css({
                    top: i + "px"
                });
                var l = parseInt($("#tab .scrol").height()) - parseInt($("#tab .scrol span").height());
                a = -(i / l) * j;
                $("#tab .tab_main").css("top", a + "px");
                if (parseInt($("#tab .tab_main").css("top")) > 0) {
                    $("#tab .tab_main").css("top", "0px")
                }
                return false
            });
            $(document).mouseup(function() {
                $(document).unbind()
            })
        })
    }
    $("#tab .tab_nr").hover(function() {
        if ($("#tab .tab_wrap").height() < $("#tab .tab_main").eq(c).height()) {
            $("#tab .scrol").fadeIn(500);
            var j = $("#tab .tab_wrap").height() * $("#tab .scrol").height() / $("#tab .tab_main").eq(c).height();
            $("#tab .scrol span").height(j)
        }
    },
    function() {
        $("#tab .scrol").fadeOut()
    })
});