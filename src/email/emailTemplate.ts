
export const emailTemplate = `
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <!-- NAME: 1 COLUMN -->
    <!--[if gte mso 15]>
    <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>*|MC:SUBJECT|*</title>

    <style type="text/css">
        p {
            margin: 10px 0;
            padding: 0;
        }

        table {
            border-collapse: collapse;
        }

        h1, h2, h3, h4, h5, h6 {
            display: block;
            margin: 0;
            padding: 0;
        }

        img, a img {
            border: 0;
            height: auto;
            outline: none;
            text-decoration: none;
        }

        body, #bodyTable, #bodyCell {
            height: 100%;
            margin: 0;
            padding: 0;
            width: 100%;
        }

        .mcnPreviewText {
            display: none !important;
        }

        #outlook a {
            padding: 0;
        }

        img {
            -ms-interpolation-mode: bicubic;
        }

        table {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        .ReadMsgBody {
            width: 100%;
        }

        .ExternalClass {
            width: 100%;
        }

        p, a, li, td, blockquote {
            mso-line-height-rule: exactly;
        }

        a[href^=tel], a[href^=sms] {
            color: inherit;
            cursor: default;
            text-decoration: none;
        }

        p, a, li, td, body, table, blockquote {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }

        .ExternalClass, .ExternalClass p, .ExternalClass td, .ExternalClass div, .ExternalClass span, .ExternalClass font {
            line-height: 100%;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        #bodyCell {
            padding: 10px;
        }

        .templateContainer {
            max-width: 600px !important;
        }

        a.mcnButton {
            display: block;
        }

        .mcnImage, .mcnRetinaImage {
            vertical-align: bottom;
        }

        .mcnTextContent {
            word-break: break-word;
        }

        .mcnTextContent img {
            height: auto !important;
        }

        .mcnDividerBlock {
            table-layout: fixed !important;
        }

        body, #bodyTable {
            background-color: #ffffff;
        }

        #bodyCell {
            border-top: 0;
        }

        .templateContainer {
            border: 0;
        }

        h1 {
            color: #ffffff;
            font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-size: 48px;
            font-style: normal;
            font-weight: normal;
            line-height: 150%;
            letter-spacing: normal;
            text-align: center;
        }

        h2 {
            color: #06a146;
            font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-size: 22px;
            font-style: normal;
            font-weight: normal;
            line-height: 125%;
            letter-spacing: normal;
            text-align: left;
        }

        h3 {
            color: #202020;
            font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-size: 16px;
            font-style: normal;
            font-weight: normal;
            line-height: 150%;
            letter-spacing: normal;
            text-align: center;
        }

        h4 {
            color: #202020;
            font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-size: 30px;
            font-style: normal;
            font-weight: normal;
            line-height: 125%;
            letter-spacing: normal;
            text-align: center;
        }

        #templatePreheader {
            background-color: #transparent;
            background-image: none;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            border-top: 0;
            border-bottom: 0;
            padding-top: 0px;
            padding-bottom: 0px;
        }

        #templatePreheader .mcnTextContent, #templatePreheader .mcnTextContent p {
            color: #656565;
            font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-size: 9px;
            line-height: 100%;
            text-align: left;
        }

        #templatePreheader .mcnTextContent a, #templatePreheader .mcnTextContent p a {
            color: #656565;
            font-weight: normal;
            text-decoration: none;
        }

        #templateHeader {
            background-color: #ffffff;
            background-image: none;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            border-top: 0;
            border-bottom: 0;
            padding-top: 0px;
            padding-bottom: 0;
        }

        #templateHeader .mcnTextContent, #templateHeader .mcnTextContent p {
            color: #202020;
            font-family: Helvetica;
            font-size: 16px;
            line-height: 150%;
            text-align: center;
        }

        #templateHeader .mcnTextContent a, #templateHeader .mcnTextContent p a {
            color: #06a146;
            font-weight: normal;
            text-decoration: none;
        }

        #templateBody {
            background-color: #ffffff;
            background-image: none;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            border-top: 0;
            border-bottom: 0;
            padding-top: 0;
            padding-bottom: 0px;
        }

        #templateBody .mcnTextContent, #templateBody .mcnTextContent p {
            color: #727272;
            font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-size: 13px;
            line-height: 150%;
            text-align: left;
        }

        #templateBody .mcnTextContent a, #templateBody .mcnTextContent p a {
            color: #06a146;
            font-weight: normal;
            text-decoration: none;
        }

        #templateFooter {
            background-color: #transparent;
            background-image: none;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            border-top: 0;
            border-bottom: 0;
            padding-top: 0px;
            padding-bottom: 0px;
        }

        #templateFooter .mcnTextContent, #templateFooter .mcnTextContent p {
            color: #222222;
            font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-size: 10px;
            line-height: 150%;
            text-align: center;
        }

        #templateFooter .mcnTextContent a, #templateFooter .mcnTextContent p a {
            color: #656565;
            font-weight: normal;
            text-decoration: underline;
        }

        @media only screen and (min-width: 768px) {
            .templateContainer {
                width: 600px !important;
            }

        }

        @media only screen and (max-width: 480px) {
            body, table, td, p, a, li, blockquote {
                -webkit-text-size-adjust: none !important;
            }

        }

        @media only screen and (max-width: 480px) {
            body {
                width: 100% !important;
                min-width: 100% !important;
            }

        }

        @media only screen and (max-width: 480px) {
            #bodyCell {
                padding-top: 10px !important;
            }

        }

        @media only screen and (max-width: 480px) {
            .mcnRetinaImage {
                max-width: 100% !important;
            }

        }

        @media only screen and (max-width: 480px) {
            .mcnImage {
                width: 100% !important;
            }

        }

        @media only screen and (max-width: 480px) {
            .mcnCartContainer, .mcnCaptionTopContent, .mcnRecContentContainer, .mcnCaptionBottomContent, .mcnTextContentContainer, .mcnBoxedTextContentContainer, .mcnImageGroupContentContainer, .mcnCaptionLeftTextContentContainer, .mcnCaptionRightTextContentContainer, .mcnCaptionLeftImageContentContainer, .mcnCaptionRightImageContentContainer, .mcnImageCardLeftTextContentContainer, .mcnImageCardRightTextContentContainer, .mcnImageCardLeftImageContentContainer, .mcnImageCardRightImageContentContainer {
                max-width: 100% !important;
                width: 100% !important;
            }

        }

        @media only screen and (max-width: 480px) {
            .mcnBoxedTextContentContainer {
                min-width: 100% !important;
            }

        }

        @media only screen and (max-width: 480px) {
            .mcnImageGroupContent {
                padding: 9px !important;
            }

        }

        @media only screen and (max-width: 480px) {
            .mcnCaptionLeftContentOuter .mcnTextContent, .mcnCaptionRightContentOuter .mcnTextContent {
                padding-top: 9px !important;
            }

        }

        @media only screen and (max-width: 480px) {
            .mcnImageCardTopImageContent, .mcnCaptionBottomContent:last-child .mcnCaptionBottomImageContent, .mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent {
                padding-top: 18px !important;
            }

        }

        @media only screen and (max-width: 480px) {
            .mcnImageCardBottomImageContent {
                padding-bottom: 9px !important;
            }

        }

        @media only screen and (max-width: 480px) {
            .mcnImageGroupBlockInner {
                padding-top: 0 !important;
                padding-bottom: 0 !important;
            }

        }

        @media only screen and (max-width: 480px) {
            .mcnImageGroupBlockOuter {
                padding-top: 9px !important;
                padding-bottom: 9px !important;
            }

        }

        @media only screen and (max-width: 480px) {
            .mcnTextContent, .mcnBoxedTextContentColumn {
                padding-right: 18px !important;
                padding-left: 18px !important;
            }

        }

        @media only screen and (max-width: 480px) {
            .mcnImageCardLeftImageContent, .mcnImageCardRightImageContent {
                padding-right: 18px !important;
                padding-bottom: 0 !important;
                padding-left: 18px !important;
            }

        }

        @media only screen and (max-width: 480px) {
            .mcpreview-image-uploader {
                display: none !important;
                width: 100% !important;
            }

        }

        @media only screen and (max-width: 480px) {
            h1 {
                font-size: 22px !important;
                line-height: 125% !important;
            }

        }

        @media only screen and (max-width: 480px) {
            h2 {
                font-size: 20px !important;
                line-height: 125% !important;
            }

        }

        @media only screen and (max-width: 480px) {
            h3 {
                font-size: 18px !important;
                line-height: 125% !important;
            }

        }

        @media only screen and (max-width: 480px) {
            h4 {
                font-size: 16px !important;
                line-height: 150% !important;
            }

        }

        @media only screen and (max-width: 480px) {
            .mcnBoxedTextContentContainer .mcnTextContent, .mcnBoxedTextContentContainer .mcnTextContent p {
                font-size: 14px !important;
                line-height: 150% !important;
            }

        }

        @media only screen and (max-width: 480px) {
            #templatePreheader {
                display: block !important;
            }

        }

        @media only screen and (max-width: 480px) {
            #templatePreheader .mcnTextContent, #templatePreheader .mcnTextContent p {
                font-size: 14px !important;
                line-height: 150% !important;
            }

        }

        @media only screen and (max-width: 480px) {
            #templateHeader .mcnTextContent, #templateHeader .mcnTextContent p {
                font-size: 16px !important;
                line-height: 150% !important;
            }

        }

        @media only screen and (max-width: 480px) {
            #templateBody .mcnTextContent, #templateBody .mcnTextContent p {
                font-size: 16px !important;
                line-height: 150% !important;
            }

        }

        @media only screen and (max-width: 480px) {
            #templateFooter .mcnTextContent, #templateFooter .mcnTextContent p {
                font-size: 14px !important;
                line-height: 150% !important;
            }

        }</style><!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet"><!--<![endif]-->
</head>
<body style="height: 100%;margin: 0;padding: 0;width: 100%;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #ffffff;">
<center>
    <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable"
           style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;height: 100%;margin: 0;padding: 0;width: 100%;background-color: #ffffff;">
        <tr>
            <td align="center" valign="top" id="bodyCell"
                style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;height: 100%;margin: 0;padding: 10px;width: 100%;border-top: 0;">
                <!-- BEGIN TEMPLATE // -->
                <!--[if (gte mso 9)|(IE)]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                    <tr>
                        <td align="center" valign="top" width="600" style="width:600px;">
                <![endif]-->
                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer"
                       style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;border: 0;max-width: 600px !important;">
                    <tr>
                        <td valign="top" id="templatePreheader"
                            style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #transparent none no-repeat center;background-size: cover;border-top: 0;border-bottom: 0;padding-top: 0px;padding-bottom: 0px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock"
                                   style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                <tbody class="mcnTextBlockOuter">
                                <tr>
                                    <td valign="top" class="mcnTextBlockInner"
                                        style="padding-top: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                        <!--[if mso]>
                                        <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%"
                                               style="width:100%;">
                                            <tr>
                                        <![endif]-->

                                        <!--[if mso]>
                                        <td valign="top" width="600" style="width:600px;">
                                        <![endif]-->
                                        <table align="left" border="0" cellpadding="0" cellspacing="0"
                                               style="max-width: 100%;min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
                                               width="100%" class="mcnTextContentContainer">
                                            <tbody>
                                            <tr>

                                                <td valign="top" class="mcnTextContent"
                                                    style="padding: 0px 18px 9px;text-align: center;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #656565;font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 9px;line-height: 100%;">


                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <!--[if mso]>
                                        </td>
                                        <![endif]-->

                                        <!--[if mso]>
                                        </tr>
                                        </table>
                                        <![endif]-->
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td valign="top" id="templateHeader"
                            style="background:#ffffff none no-repeat center/cover;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #ffffff;background-image: none;background-repeat: no-repeat;background-position: center;background-size: cover;border-top: 0;border-bottom: 0;padding-top: 0px;padding-bottom: 0;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock"
                                   style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                <tbody class="mcnImageBlockOuter">
                                <tr>
                                    <td valign="top"
                                        style="padding: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
                                        class="mcnImageBlockInner">
                                        <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0"
                                               class="mcnImageContentContainer"
                                               style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                            <tbody>
                                            <tr>
                                                <td class="mcnImageContent" valign="top"
                                                    style="padding-right: 0px;padding-left: 0px;padding-top: 0;padding-bottom: 0;text-align: center;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">


                                                    <img align="center" alt=""
                                                         src="https://gallery.mailchimp.com/af9680e06765bfe07890311e5/images/59ee9ca2-0193-492e-a969-e1344d463248.png"
                                                         width="600"
                                                         style="max-width: 1200px;padding-bottom: 0;display: inline !important;vertical-align: bottom;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;"
                                                         class="mcnRetinaImage">


                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock"
                                   style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;table-layout: fixed !important;">
                                <tbody class="mcnDividerBlockOuter">
                                <tr>
                                    <td class="mcnDividerBlockInner"
                                        style="min-width: 100%;padding: 10px 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                        <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0"
                                               width="100%"
                                               style="min-width: 100%;border-top: 2px none #EAEAEA;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                            <tbody>
                                            <tr>
                                                <td style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                    <span></span>
                                                </td>
                                            </tr>
                                            
                                            
                                            <tr>
                                                <td class="mcnTextContent" valign="top"
                                                    style="padding: 18px 18px 0px;color: #F2F2F2;font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;font-size: 48px;font-weight: normal;text-align: center;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;line-height: 150%;"
                                                    width="546">
                                                    <span style="font-size:36px">Property Value&nbsp;<strong>Estimations</strong></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="mcnImageCardTopImageContent" align="left" valign="top"
                                                    style="padding-top: 9px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">


                                                    <img alt=""
                                                         src="https://gallery.mailchimp.com/af9680e06765bfe07890311e5/images/01173848-4b53-4cc8-9eac-59f591158c28.jpg"
                                                         width="564"
                                                         style="max-width: 1500px;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;vertical-align: bottom;"
                                                         class="mcnImage">


                                                </td>
                                            </tr>
                                            
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock"
                                   style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                <tbody class="mcnTextBlockOuter">
                                <tr>
                                    <td valign="top" class="mcnTextBlockInner"
                                        style="padding-top: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                        <!--[if mso]>
                                        <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%"
                                               style="width:100%;">
                                            <tr>
                                        <![endif]-->

                                        <!--[if mso]>
                                        <td valign="top" width="600" style="width:600px;">
                                        <![endif]-->
                                        <table align="left" border="0" cellpadding="0" cellspacing="0"
                                               style="max-width: 100%;min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
                                               width="100%" class="mcnTextContentContainer">
                                            <tbody>
                                            <tr>
                                                <td valign="top" class="mcnTextContent"
                                                    style="padding-top: 0;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #202020;font-family: Helvetica;font-size: 16px;line-height: 150%;text-align: center;">

                                                    <h3 class="null"
                                                        style="text-align: left;display: block;margin: 0;padding: 0;color: #202020;font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 16px;font-style: normal;font-weight: normal;line-height: 150%;letter-spacing: normal;">
                                                        Dear Jock,</h3>

                                                    <h3 class="null"
                                                        style="text-align: left;display: block;margin: 0;padding: 0;color: #202020;font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 16px;font-style: normal;font-weight: normal;line-height: 150%;letter-spacing: normal;">
                                                        <br>
                                                        Your market overview and property value estimates for the
                                                        financial year ending 30&nbsp;June, 2018 are available for
                                                        viewing.<br>
                                                        <br>
                                                        Please access the overview and appraisal via the links
                                                        below.<br>
                                                        <br>
                                                        Should you wish to discuss your property portfolio further
                                                        please either&nbsp;reply to this email or call our office.
                                                    </h3>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td valign="top" class="mcnTextContent"
                                                    style="padding-top: 0;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #727272;font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 13px;line-height: 150%;text-align: left;">
                                                    <br>
                                                    <span style="font-size:14px">
                                                <a href="https://portfolioms-my.sharepoint.com/:b:/g/personal/valuations_portfolioms_com_au/EXZA0TuEmAZJgLC-kCLJjGsBQbnfaWzCXcXwZ7na0jaTDQ"
                                                   style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #06a146;font-weight: normal;text-decoration: none;">Click here to view your valuation report</a>
                                                <br>
                                                <br>
                                                <a href="https://portfolioms-my.sharepoint.com/:b:/g/personal/valuations_portfolioms_com_au/EectJUKYt9tGs3kXhoXgPUUB_uGxo9wFqkHSHQhcHbMPdA?e=dgTE4C"
                                                   style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #06a146;font-weight: normal;text-decoration: none;">Click here to view your Portfolio Management Services market overview</a></span>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td valign="top" class="mcnTextContent"
                                                    style="padding-top: 0;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #727272;font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 13px;line-height: 150%;text-align: left;">

                                                    <p style="margin: 10px 0;padding: 0;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #727272;font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 13px;line-height: 150%;text-align: left;">
                                                        <em>We estimate the value of your property&nbsp;by carefully
                                                            assessing&nbsp;the market,&nbsp; yield, location and&nbsp;asset
                                                            maturity overlaid with demographics,&nbsp;infrastructure and
                                                            current economic tide.&nbsp;<br>
                                                            <br>
                                                            The comparative suburb medians are&nbsp;sought from the REIV
                                                            March Quarter median price data, and CoreLogic.</em></p>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="mcnDividerBlockInner"
                                                    style="min-width: 100%;padding: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                    <table class="mcnDividerContent" border="0" cellpadding="0"
                                                           cellspacing="0"
                                                           width="100%"
                                                           style="min-width: 100%;border-top: 2px solid #EAEAEA;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                        <tbody>
                                                        <tr>
                                                            <td style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                <span></span>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td valign="top" class="mcnTextContent"
                                                    style="padding-top: 0;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #727272;font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 13px;line-height: 150%;text-align: left;">

                                                    <h4 class="null"
                                                        style="display: block;margin: 0;padding: 0;color: #202020;font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 30px;font-style: normal;font-weight: normal;line-height: 125%;letter-spacing: normal;text-align: center;">
                                                        OUR <strong>APPROACH</strong></h4>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="mcnImageContent" valign="top"
                                                    style="padding-right: 0px;padding-left: 0px;padding-top: 0;padding-bottom: 0;text-align: center;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">


                                                    <img align="center" alt=""
                                                         src="https://gallery.mailchimp.com/af9680e06765bfe07890311e5/images/9287abca-6dc4-468e-a503-71d826f9b935.png"
                                                         width="600"
                                                         style="max-width: 1200px;padding-bottom: 0;display: inline !important;vertical-align: bottom;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;"
                                                         class="mcnRetinaImage">


                                                </td>
                                            </tr>
                                            <tr>

                                                <td valign="top" class="mcnTextContent"
                                                    style="padding-top: 0;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #727272;font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 13px;line-height: 150%;text-align: left;">

                                                    <p style="text-align: center;margin: 10px 0;padding: 0;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #727272;font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 13px;line-height: 150%;">
                                                        <strong>For a confidential discussion on our approach and<br>
                                                            how it’s helped our clients since the early 1970’s,<br>
                                                            call us on 03 9621 1044.</strong></p>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td valign="top" class="mcnBoxedTextBlockInner"
                                                    style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">

                                                    <!--[if gte mso 9]>
                                                    <td align="center" valign="top" ">
                                                    <![endif]-->
                                                    <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                           width="100%"
                                                           style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
                                                           class="mcnBoxedTextContentContainer">
                                                        <tbody>
                                                        <tr>

                                                            <td style="padding-top: 9px;padding-left: 18px;padding-bottom: 9px;padding-right: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">

                                                                <table border="0" cellspacing="0"
                                                                       class="mcnTextContentContainer"
                                                                       width="100%"
                                                                       style="min-width: 100% !important;background-color: #BBCC2C;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                    <tbody>
                                                                    <tr>
                                                                        <td valign="top" class="mcnTextContent"
                                                                            style="padding: 18px;color: #222222;font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;font-size: 14px;font-weight: normal;line-height: 125%;text-align: center;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;">
                                                                            <p style="color: #222222;font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;font-size: 14px;font-weight: normal;line-height: 125%;text-align: center;margin: 10px 0;padding: 0;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                                Suite 15, 150 Chestnut St, Richmond 3121<br>
                                                                                <strong>t:</strong> 03 9621 1044&nbsp;
                                                                                <strong>e:</strong> <a
                                                                                    href="mailto:investment@portfolioms.com.au"
                                                                                    target="_blank"
                                                                                    style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #06a146;font-weight: normal;text-decoration: none;"><span
                                                                                    style="color:#000000">investment@portfolioms.com.au</span></a>
                                                                            </p>

                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    <!--[if gte mso 9]>
                                                    </td>
                                                    <![endif]-->

                                                    <!--[if gte mso 9]>
                                                    </tr>
                                                    </table>
                                                    <![endif]-->
                                                </td>
                                            </tr>

                                            </tbody>
                                        </table>
                                        <!--[if mso]>
                                        </td>
                                        <![endif]-->

                                        <!--[if mso]>
                                        </tr>
                                        </table>
                                        <![endif]-->
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]>
                </td>
                </tr>
                </table>
                <![endif]-->
                <!-- // END TEMPLATE -->
            </td>
        </tr>
    </table>
</center>
</body>
</html>
`;
