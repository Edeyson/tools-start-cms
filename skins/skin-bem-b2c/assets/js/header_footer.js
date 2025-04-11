$(document).ready(function () {
    setTimeout(() => {
        let e = document.querySelector(".header__burger"),
            a = document.querySelector(".header"),
            t = a.querySelector(".header__container");
        var r = 1024 < window.innerWidth;
        function n() {
            e.classList.toggle("header__burger--active"),
                a.classList.toggle("header--fixed"),
                t.classList.toggle("header__container--active"),
                document.body.classList.toggle("overflow-disabled");
        }
        r ||
            (e.addEventListener("click", () => n()),
                a.addEventListener("click", (a) => {
                    {
                        let e;
                        var t = a.target;
                        console.log("elementEvent", t.tagName),
                            "SPAN" == t.tagName && "sub-page" == t.id
                                ? ((e = a.composedPath()[2].querySelector("ul")),
                                    a
                                        .composedPath()[0]
                                        .classList.toggle("_navbar__btn-page--active"))
                                : "I" == t.tagName && "SPAN" == t.parentElement.tagName
                                    ? ((e = a.composedPath()[3].querySelector("ul")),
                                        a
                                            .composedPath()[1]
                                            .classList.toggle("_navbar__btn-page--active"))
                                    : "ICONIFY-ICON" == t.tagName
                                        ? ((e = a.composedPath()[5].querySelector("ul")),
                                            a
                                                .composedPath()[3]
                                                .classList.toggle("_navbar__btn-page--active"))
                                        : "LI" == t.tagName &&
                                            -1 != t.className.indexOf("_navbar__item--children")
                                            ? ((e = a
                                                .composedPath()[0]
                                                .querySelector(
                                                    "._navbar__item--children > ._navbar__submenu"
                                                )),
                                                a
                                                    .composedPath()[0]
                                                    .querySelector("._navbar__item--children > span")
                                                    .classList.toggle("_navbar__btn-page--active"))
                                            : "A" == t.tagName &&
                                            "DIV" == t.parentElement.tagName &&
                                            ((e = a
                                                .composedPath()[2]
                                                .querySelector("._navbar__item--children ._navbar__submenu")),
                                                a
                                                    .composedPath()[1]
                                                    .querySelector("._navbar__container-link-submenu #sub-page")
                                                    .classList.toggle("_navbar__btn-page--active")),
                            e && e.classList.toggle("_navbar__submenu--active"),
                            t.classList.value.includes("header__container") && n();
                    }
                }));
        const c = document.querySelector("#headerTransparent");
        if (
            (c &&
                r &&
                (window.onscroll = () => {
                    5 <= window.pageYOffset
                        ? c.classList.add("header-container--transparent")
                        : c.classList.remove("header-container--transparent");
                }),
                r ||
                document.addEventListener("click", (e) => {
                    document.querySelector(".header__burger--active") &&
                        !e.target.className.includes("header__bar") &&
                        e.target.innerHTML.includes("header__container--active") &&
                        document.querySelector(".header__burger").click();
                }),
                !r)
        ) {
            var r = document.querySelector(".header__logo img"),
                o = document.querySelector(".header__container"),
                s = () => document.createElement("div"),
                l = s(),
                s = s();
            const e = document.querySelector(".header__burger");
            (l.classList.value = "header__menu header__menu--logo"),
                (logoImg = document.createElement("img"),
                    logoImg.id = "dnn_dnnLOGO_imgLogo",
                    logoImg.src = r.src || "",
                    logoImg.alt = r.alt || "",
                    l.appendChild(logoImg))
            o.prepend(l),
                (s.classList.value = "header__burger header__burger--active"),
                (s.innerHTML = e.innerHTML),
                s.addEventListener("click", () => e.click()),
                o.append(s);
        }
    }, 2e3);
});
