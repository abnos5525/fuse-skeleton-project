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
@WebServlet(name = "addLogInfo", urlPatterns = {"/addLogInfo"})
public class AddLogServlet extends HttpServlet {

    private DatabaseManager databaseManager;

    private String query;

    private int organNumber;
    private int systemNumber;

    private String logGroup;
    private String event;
    private String sensitive;
    private String describtions;

    private String formattedDateTime;

    public void init() {
        databaseManager = new DatabaseManager();
        query = "INSERT INTO tbl_log (organNumber,systemNumber,logGroup,event,sensitive,describtion" +
                ",logDate,logUpdateDate) VALUES (?,?,?,?,?,?,?,?)";

        Date currentDate = new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        formattedDateTime = dateFormat.format(currentDate);
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setCharacterEncoding("UTF-8");

        try {

            organNumber = Integer.parseInt(request.getParameter("organName"));
            systemNumber = Integer.parseInt(request.getParameter("systemName"));
            logGroup = request.getParameter("group");
            event = request.getParameter("event");
            sensitive = request.getParameter("sensitive");
            describtions = request.getParameter("describtion");

            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");

            Connection connection = databaseManager.getConnection();

            PreparedStatement preparedStatement = connection.prepareStatement(query);

            preparedStatement.setInt(1, organNumber);
            preparedStatement.setInt(2, systemNumber);
            preparedStatement.setString(3, logGroup);
            preparedStatement.setString(4, event);
            preparedStatement.setString(5, sensitive);
            preparedStatement.setString(6, describtions);
            preparedStatement.setString(7, formattedDateTime);
            preparedStatement.setString(8, formattedDateTime);

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