<%-- 
    Document   : register
    Created on : Feb 17, 2022, 4:25:59 AM
    Author     : Jehyun Kim
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Register</h1>
        <form action="ShoppingList" method="post">
            <label for = "name">Name:</label>
            <input type="text" name="name" id="name">
            <button type="submit">Register Name</button>
        </form>
    </body>
</html>
