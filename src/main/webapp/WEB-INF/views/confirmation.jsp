<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>
<html lang="pl">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <link rel="stylesheet" href="<c:url value="resources/css/style.css"/>"/>

</head>
<body>
<header class="header--form-page">
    <%@include file="header.jsp"%>

    <div class="slogan container container--90">
        <h2>
            Dziękujemy za przesłanie formularza. W zakładce moje zbiórki znajdziesz potwierdzenia przekazanych dotacji.
        </h2>
    </div>
</header>

<%@ include file="footer.jsp"%>