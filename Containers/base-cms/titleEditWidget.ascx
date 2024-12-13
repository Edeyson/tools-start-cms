<%@ Control AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Containers.Container" %>
<%@ Register TagPrefix="dnn" TagName="TITLE" Src="~/Admin/Containers/Title.ascx" %>
<%@ Register TagPrefix="dnn" TagName="VISIBILITY" Src="~/Admin/Containers/Visibility.ascx" %>
<div>
    <h2 style="display:none"><dnn:TITLE runat="server" id="dnnTITLE" CssClass="textSearch" /></h2>
    <div id="ContentPane" runat="server"></div>
	<div class="clear"></div>
</div>
<script>
document.querySelector('.product-title-container>h3').innerText = document.querySelector('.textSearch').innerText;
</script>