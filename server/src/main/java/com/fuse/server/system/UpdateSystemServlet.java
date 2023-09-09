package com.fuse.server.system;

import com.fuse.server.DatabaseManager;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;

@WebServlet(name = "updateSystemInfo", urlPatterns = {"/updateSystemInfo"})
public class UpdateSystemServlet extends HttpServlet {

    private DatabaseManager databaseManager;

    private String query;

    private String systemName;
    private String systemLatinName;
    private int systemNumber;
    private int oldSystemNumber;
    private String systemPort;

    private String formattedDateTime;

    public void init() {
        databaseManager = new DatabaseManager();
        query = "UPDATE tbl_system SET systemName=?,systemLatinName=?,systemNumber=?,systemPort=?, systemUpdateDate=? WHERE systemNumber=?";

        Date currentDate = new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        formattedDateTime = dateFormat.format(currentDate);
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();
        try {

            systemName = request.getParameter("systemName");
            systemLatinName = request.getParameter("systemLatinName");
            systemNumber = Integer.parseInt(request.getParameter("systemNumber"));

            oldSystemNumber = Integer.parseInt(request.getParameter("oldSystemNumber"));
            systemPort = request.getParameter("systemPort");

            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");

            Connection connection = databaseManager.getConnection();
            System.out.println("POST Updated");

            PreparedStatement preparedStatement = connection.prepareStatement(query);

            preparedStatement.setString(1, systemName);
            preparedStatement.setString(2, systemLatinName);
            preparedStatement.setInt(3, systemNumber);
            preparedStatement.setString(4, systemPort);
            preparedStatement.setString(5, formattedDateTime);
            preparedStatement.setInt(6, oldSystemNumber);

            int rowsAffected = preparedStatement.executeUpdate();

            if (rowsAffected > 0) {
                response.setStatus(HttpServletResponse.SC_CREATED);
                System.out.println("Updated Successfully!");
            } else {
                response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                System.out.println("There is a problem!");
            }

            databaseManager.closeConnection(connection);

        } catch (SQLException e) {
            e.printStackTrace();
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            out.println("There is a problem with connection");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            out.println("There is a problem with JDBC driver");
        }

    }

    public void destroy() {
    }
}