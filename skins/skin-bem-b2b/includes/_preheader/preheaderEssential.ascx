<!-- Fonts family Priority 1. -->
<dnn:DnnCssInclude Priority="1" ID="googleapis" runat="server"
    FilePath="https://fonts.googleapis.com" PathNameAlias="" />
<dnn:DnnCssInclude Priority="1" ID="googleapisfontsGstatic" runat="server"
    FilePath="https://fonts.gstatic.com" PathNameAlias="" HtmlAttributesAsString="crossorigin" />
<dnn:DnnCssInclude Priority="1" ID="googleFont" runat="server"
    FilePath="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
    PathNameAlias="" HtmlAttributesAsString="rel:stylesheet" />
<dnn:DnnJsInclude Priority="15" ID="iconify" runat="server"
    FilePath="https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"
    ForceProvider="DnnFormBottomProvider" PathNameAlias="" />
<dnn:DnnCssInclude Priority="15" ID="fontawesome" runat="server"
    FilePath="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
    ForceProvider="DnnFormBottomProvider" HtmlAttributesAsString="rel:stylesheet" />

<!-- bootstrap Priority 8. -->
<dnn:DnnCssInclude Priority="8" ID="bootstrapCss__3" runat="server"
    FilePath="/Portals/_default/skins/xcillion/bootstrap/css/bootstrap.min.css" PathNameAlias=""
    HtmlAttributesAsString="rel:stylesheet" />
<dnn:DnnCssInclude Priority="8" ID="utility" runat="server"
    FilePath="assets/css/utilitybootstrap.css" PathNameAlias="SkinPath"
    HtmlAttributesAsString="rel:stylesheet" />
<dnn:DnnCssInclude Priority="8" ID="bxsliderCss" runat="server"
    FilePath="https://dnnprod.s3.amazonaws.com/css/jquery.bxslider.css" PathNameAlias=""
    HtmlAttributesAsString="rel:stylesheet" />

<!-- Skin CSS Priority 15. -->
<dnn:DnnCssInclude Priority="15" ID="skin" runat="server" FilePath="assets/css/skin.css"
    PathNameAlias="SkinPath" HtmlAttributesAsString="rel:stylesheet" />
<!-- //Verify if browser is Internet EXPLORER -->

<!-- Skin JS bootstrap 102. -->
<dnn:DnnJsInclude ID="bootstrapJs__3" runat="server"
    FilePath="/Portals/_default/skins/xcillion/bootstrap/js/bootstrap.min.js" PathNameAlias=""
    ForceProvider="DnnFormBottomProvider" Priority="102" />
<dnn:DnnJsInclude ID="bxsliderJs" runat="server"
    FilePath="https://dnnprod.s3.amazonaws.com/js/jquery.bxslider.min.js" PathNameAlias=""
    ForceProvider="DnnFormBottomProvider" Priority="102" />
<dnn:DnnJsInclude ID="searchForm" runat="server"
    FilePath="/Portals/0/assets_for_all_portals/js/searchForm.js" PathNameAlias=""
    ForceProvider="DnnFormBottomProvider" Priority="102" />
<!-- internetExplorer Validation -->
<script>
    let
    browser=navigator.appName,ver=navigator.appVersion,thestart=parseFloat(ver.indexOf("MSIE"))+1,brow_ver=parseFloat(ver.substring(thestart+4,thestart+7));document.documentMode&&(window.location="/ie");
</script>