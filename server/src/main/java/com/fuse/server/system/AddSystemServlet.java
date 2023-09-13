package com.fuse.server.system;

import com.fuse.server.DatabaseManager;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import java.util.Date;
import java.text.SimpleDateFormat;
@WebServlet(name = "addSystemInfo", urlPatterns = {"/addSystemInfo"})
public class AddSystemServlet extends HttpServlet {

    private DatabaseManager databaseManager;

    private String query;

    private String systemName;
    private String systemLatinName;
    private int systemNumber;
    private String systemPort;

    private String formattedDateTime;

    public void init() {
        databaseManager = new DatabaseManager();
        query = "INSERT INTO tbl_system (systemName,systemLatinName,systemNumber,systemPort,systemDate,systemUpdateDate) " +
                "VALUES (?,?,?,?,?,?)";

        Date currentDate = new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        formattedDateTime = dateFormat.format(currentDate);
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setCharacterEncoding("UTF-8");

        try {

            systemName = request.getParameter("systemName");
            systemLatinName = request.getParameter("systemLatinName");
            systemNumber = Integer.parseInt(request.getParameter("systemNumber"));
            systemPort = request.getParameter("systemPort");

            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");

            Connection connection = databaseManager.getConnection();

            PreparedStatement preparedStatement = connection.prepareStatement(query);

            preparedStatement.setString(1, systemName);
            preparedStatement.setString(2, systemLatinName);
            preparedStatement.setInt(3, systemNumber);
            preparedStatement.setString(4, systemPort);
            preparedStatement.setString(5, formattedDateTime);
            preparedStatement.setString(6, formattedDateTime);

            int rowsAffected = preparedStatement.executeUpdate();

            if (rowsAffected > 0) {
                response.setStatus(HttpServletResponse.SC_CREATED);
                System.out.println("Saved Successfully!");
            } else {
                response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                System.out.println("There is a problem!");
            }

            databaseManager.closeConnection(connection);

        } catch (SQLException e) {
            e.printStackTrace();
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            PrintWriter out = response.getWriter();
            out.println("There is a problem with connection");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            PrintWriter out = response.getWriter();
            out.println("There is a problem with JDBC driver");
        }

    }

    public void destroy() {
    }
}