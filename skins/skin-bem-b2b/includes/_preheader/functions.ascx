<script> let DisplayName="";function ArrowRemove(e){e=document.querySelectorAll("header
    "+e);null!=e&&e[0]&&e.forEach(e=>e.remove())}var fragment;DisplayName=DisplayName.includes("
    ")?DisplayName.split(" ")[0]:DisplayName,document.querySelectorAll("header
    a").forEach(e=>{e.textContent.includes("[User:DisplayName]")&&(e.innerHTML=""!=DisplayName?e.innerHTML.replace("[User:DisplayName]",""+DisplayName):e.innerHTML.replace("[User:DisplayName]","Mi
    Cuenta"))}),window.innerWidth<=1024?ArrowRemove("._navbar__btn-page-desk"):ArrowRemove("._navbar__btn-page-mobile"),window.innerWidth<=1024&&((fragment=document.createDocumentFragment()).appendChild(document.querySelector(".header__menu--top")),document.querySelector(".header__container").appendChild(fragment));
</script>