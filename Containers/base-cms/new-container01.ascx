<%@ Control AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Containers.Container" %>
<%@ Register TagPrefix="dnn" TagName="TITLE" Src="~/Admin/Containers/Title.ascx" %>
<%@ Register TagPrefix="dnn" TagName="VISIBILITY" Src="~/Admin/Containers/Visibility.ascx" %>
<div class="Container01 bg-cont-1 mt-3">
    <div class="dnntitle"><dnn:TITLE runat="server" id="dnnTITLE" CssClass="titulo" /></div>
    <div id="ContentPane" class="contentpane" runat="server"></div>
	<div class="clear"></div>
</div>