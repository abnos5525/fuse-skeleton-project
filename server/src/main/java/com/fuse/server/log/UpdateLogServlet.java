package com.fuse.server.log;

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

@WebServlet(name = "updateLogInfo", urlPatterns = {"/updateLogInfo"})
public class UpdateLogServlet extends HttpServlet {

    private DatabaseManager databaseManager;

    private String query;

    private int logId;
    private int organName;
    private int systemName;
    private String group;
    private String event;
    private String sensitive;
    private String describtion;

    private String formattedDateTime;

    public void init() {
        databaseManager = new DatabaseManager();
        query = "UPDATE tbl_log SET organNumber=?,systemNumber=?,logGroup=?,event=?, sensitive=? " +
                ",describtion=?,logUpdateDate=? WHERE id=?";

        Date currentDate = new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        formattedDateTime = dateFormat.format(currentDate);
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();
        try {

            logId = Integer.parseInt(request.getParameter("logId"));

            organName = Integer.parseInt(request.getParameter("organName"));

            systemName = Integer.parseInt(request.getParameter("systemName"));

            group = request.getParameter("group");

            event = request.getParameter("event");

            sensitive = request.getParameter("sensitive");
            describtion = request.getParameter("describtion");

            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");

            Connection connection = databaseManager.getConnection();

            PreparedStatement preparedStatement = connection.prepareStatement(query);

            preparedStatement.setInt(1, organName);
            preparedStatement.setInt(2, systemName);
            preparedStatement.setString(3, group);
            preparedStatement.setString(4, event);
            preparedStatement.setString(5, sensitive);
            preparedStatement.setString(6, describtion);
            preparedStatement.setString(7, formattedDateTime);
            preparedStatement.setInt(8, logId);

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