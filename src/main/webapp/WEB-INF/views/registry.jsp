<%--
  Created by IntelliJ IDEA.
  User: gtarczynski
  Date: 13.07.2024
  Time: 13:39
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <link rel="stylesheet" href="<c:url value="resources/css/style.css"/>"/>
</head>
<body>
<header>
    <%@include file="header.jsp"%>
</header>

<section class="login-page">
    <h2>Załóż konto</h2>
<%--    <form>--%>
<%--        <div class="form-group">--%>
<%--            <input type="email" name="email" placeholder="Email" />--%>
<%--        </div>--%>
<%--        <div class="form-group">--%>
<%--            <input type="password" name="password" placeholder="Hasło" />--%>
<%--        </div>--%>
<%--        <div class="form-group">--%>
<%--            <input type="password" name="password2" placeholder="Powtórz hasło" />--%>
<%--        </div>--%>

<%--        <div class="form-group form-group--buttons">--%>
<%--            <a href="login.html" class="btn btn--without-border">Zaloguj się</a>--%>
<%--            <button class="btn" type="submit">Załóż konto</button>--%>
<%--        </div>--%>
<%--    </form>--%>

<form:form method="post" modelAttribute="user">
    <form:errors path="email"/>
        <div class="form-group">
                <form:input class="form-control" path="email" placeholder="Email"/>
        </div>
        <div class="form-group">
                <form:password class="form-control" path="password" placeholder="Hasło"/>
        </div>
<%--        <div class="form-group">--%>
<%--            <input type="password" name="password2" placeholder="Powtórz hasło" />--%>
<%--        </div>--%>

        <div class="form-group form-group--buttons">
            <a href="login.html" class="btn btn--without-border">Zaloguj się</a>
            <button class="btn" type="submit">Załóż konto</button>
        </div>
</form:form>
</section>


<%@ include file="footer.jsp"%>