<%-- 
    Document   : Home
    Created on : Feb. 7, 2022, 9:45:46 p.m.
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
        <h1>Home Page</h1>
        
        <div>
            <strong>Hello ${username}.</strong>
        </div>
        <br>
        <div>
            <a href="login?logout">Logout</a>
        </div>
        
        
    </body>
</html>
