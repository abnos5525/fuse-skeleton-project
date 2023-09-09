package com.fuse.server;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

@WebServlet(name = "home", urlPatterns = {"/"})
public class Home extends HttpServlet {


    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        // ایجاد یک اسکریپت جاوااسکریپت برای بستن پنجره مرورگر
        out.println("<html><head><title>بستن مرورگر</title></head><body>");
        out.println("<script type='text/javascript'>");
        out.println("window.close();");
        out.println("</script>");
        out.println("</body></html>");

        out.close();

    }

}