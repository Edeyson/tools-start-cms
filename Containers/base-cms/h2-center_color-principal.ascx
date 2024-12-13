<%@ Control AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Containers.Container" %>
<%@ Register TagPrefix="dnn" TagName="TITLE" Src="~/Admin/Containers/Title.ascx" %>
<%@ Register TagPrefix="dnn" TagName="VISIBILITY" Src="~/Admin/Containers/Visibility.ascx" %>
<div class="cms-flex__title_h2_center mt-3">
    <h2><dnn:TITLE runat="server" id="dnnTITLE" CssClass="titulo" /></h2>
    <div id="ContentPane" runat="server"></div>
	<div class="clear"></div>
</div>

	