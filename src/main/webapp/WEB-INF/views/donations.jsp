<%--
  Created by IntelliJ IDEA.
  User: gtarczynski
  Date: 17.07.2024
  Time: 17:43
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>


<html lang="pl">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>Document</title>
    <link rel="stylesheet" href="<c:url value="resources/css/style.css"/>"/>

</head>
<body>
<header class="header--form-page">
    <%@ include file="header.jsp" %>
    <div class="slogan container container--90">
        <div class="slogan--item">
            <h1>
                Twoje dary<br/>
            </h1>

        </div>
    </div>
</header>

<section class="form--steps">


    <div class="form--steps-container">

        <table class="donations">
            <thead>
            <tr class="table-primary">
                <th scope="col">Instytucja</th>
                <th scope="col">Ilość worków</th>
                <th scope="col">Data oddania</th>
                <th scope="col">Godzina oddania</th>
            </tr>
            </thead>
            <tbody>
            <c:forEach items="${donations}" var="d">
                <tr class="table-secondary">
                    <td>${d.institution.name}</td>
                    <td>${d.quantity}</td>
                    <td>${d.pickUpDate}</td>
                    <td>${d.pickUpTime}</td>
                </tr>
            </c:forEach>

            </tbody>
        </table>


    </div>
</section>

<%@ include file="footer.jsp" %>