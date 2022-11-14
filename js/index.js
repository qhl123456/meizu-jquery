$(function () {
  $("#header-wrap").load("header.html"),
    $("#page-footer").load("footer.html"),
    $(function () {
      new (class {
        constructor(s, i) {
          (this.index = 0),
            s.css({
              backgroundImage: `url(img/index/banner/${this.index}.jpg)`,
            }),
            i.eq(this.index).css({ backgroundColor: "transparent" }),
            (this.box = s),
            (this.lis = i),
            this.clickLis(),
            this.autoPlay();
        }
        setImg() {
          this.box.css({
            backgroundImage: `url(img/index/banner/${this.index}.jpg)`,
          });
        }
        setLiBgc() {
          for (let s = 0; s < this.lis.length; s++)
            s == this.index
              ? this.lis.eq(s).css({ backgroundColor: "transparent" })
              : this.lis.eq(s).css({ backgroundColor: "#fff" });
        }
        clickLis() {
          for (let s = 0; s < this.lis.length; s++)
            this.lis[s].onclick = () => {
              (this.index = s), this.setLiBgc(), this.setImg();
            };
        }
        autoPlay() {
          let s = setInterval(() => {
            this.index++,
              this.index > this.lis.length - 1 && (this.index = 0),
              this.setImg(),
              this.setLiBgc();
          }, 2e3);
          this.box.on("mouseenter", () => {
            clearInterval(s);
          }),
            this.box.on("mouseleave", () => {
              s = setInterval(() => {
                this.index++,
                  this.index > this.lis.length - 1 && (this.index = 0),
                  this.setImg(),
                  this.setLiBgc();
              }, 2e3);
            });
        }
      })($("#banner"), $(".banner-li"));
    }),
    $(".video-list:first").on("click", function () {
      $(".video").show();
    }),
    $(".close").on("click", function () {
      $(".video").css({ display: "none" });
    });
}),
  $(function () {
    $.ajax({
      url: "./index-data/links.json",
      method: "GET",
      success: function (s) {
        !(function (s) {
          let t = s.links;
          for (let i = 0; i < t.length; i++) {
            var e = t[i].img.substring(3);
            let s = $("<li></li>");
            var l = $(".links");
            s.html(
              `
        <a href=""><img src="${e}" />
              <h4> ${t[i].title}</h4>
              <p>${t[i].desc}</p>
            </a>
        `
            ).appendTo(l);
          }
        })(s);
      },
    }),
      $.ajax({
        url: "index-data/flyme.json",
        method: "GET",
        success: function (s) {
          !(function (s) {
            let t = s.flyme;
            for (let i = 0; i < t.length; i++) {
              var e = t[i].img.substring(3);
              let s = $("<li></li>").addClass("small");
              var l = $(".flyme-list");
              0 == i
                ? (s.addClass("firstLi"),
                  s
                    .html(
                      ` 
          <a href="">
        <div class="flyme-box">
                    <img src="${e}"  />
                  </div>
                  </a>
      `
                    )
                    .appendTo(l))
                : s
                    .html(
                      `
          <a href="">
          <div class="flyme-box">
            <img src="${e}" alt="" />
            <p>${t[i].title}</p>
          </div>
        </a>
      `
                    )
                    .appendTo(l),
                (2 != i && 6 != i) || s.addClass("last");
            }
          })(s);
        },
      }),
      $.ajax({
        url: "index-data/video.json",
        method: "GET",
        success: function (s) {
          !(function (s) {
            let t = s.video;
            for (let i = 0; i < t.length; i++) {
              var e = t[i].img.substring(3);
              let s = $("<li></li>").addClass("small");
              var l = $(".video-list");
              s
                .html(
                  `
        <div class="flyme-box">
                    <img src="${e}" alt="" />
                    <p>${t[i].title}</p>
                    <span class="play"></span>
                  </div>
      `
                )
                .appendTo(l),
                (3 != i && 7 != i) || s.addClass("last");
            }
          })(s);
        },
      });
  });
