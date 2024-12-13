<%@ Control AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Containers.Container" %>
<%@ Register TagPrefix="dnn" TagName="TITLE" Src="~/Admin/Containers/Title.ascx" %>
<%@ Register TagPrefix="dnn" TagName="VISIBILITY" Src="~/Admin/Containers/Visibility.ascx" %>
<div class="contact">
<h2 class="contact-title"><dnn:TITLE runat="server" id="dnnTITLE" CssClass="titulo" /></h2>

<div class="contact-container">
<div class="contact-info">
<div id="ContentPane" runat="server"></div>
</div>

<div class="contact-form">
<h1 class="contact-form__title">Formulario de Contacto</h1>
<div id="contactPanels" runat="server"></div>
</div>
</div>
</div>

<style type="text/css">.contact{
            padding: 50px;
            background-color: #a7c3e4;
            background-image: url('portals/0/assets_for_all_portals/images/contactUswpper.webp');
            background-size: cover;
            background-repeat: no-repeat;
        }
 
        .contact-container {
          display: grid;
          gap: 5px;
          grid-template-columns: 40% 1fr;
          width: 90%;
          margin: 0;
          padding: 30px;
          background: #fff;
          border-radius: 5px;
          margin: auto;
        }
        
        .contact-info__title, .contact-form__title {
            margin-bottom: 20px;
            font-size: 1.3rem;
        }
        
        .contact-info__details {
          margin-bottom: 10px;
        }
        .contact-form__label {
          display: block;
          margin-bottom: 10px;
        }
        
        .contact-form__input,
        .contact-form__textarea {
          width: 100%;
          padding: 5px;
          margin-bottom: 10px;
        }
        
        .contact-form__submit {
          background-color: #4CAF50;
          color: white;
          border: none;
          padding: 10px 20px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin-bottom: 20px;
          cursor: pointer;
        }
        .contact-title {
            text-align: center;
            margin: 20px;
            font-size: 1.7rem;
            color: #fff;
        }
</style>