package com.fuse.server.accept;

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
@WebServlet(name = "addAcceptInfo", urlPatterns = {"/addAcceptInfo"})
public class AddAcceptServlet extends HttpServlet {

    private DatabaseManager databaseManager;

    private String query;

    private int organNumber;
    private int systemNumber;

    private String systemAddress;
    private String systemPort;
    private String systemMainAddress;
    private String systemMainPort;
    private String status = "ثبت اولیه";

    private String formattedDateTime;

    public void init() {
        databaseManager = new DatabaseManager();
        query = "INSERT INTO tbl_acception (organNumber,systemNumber,systemAddress,systemPort,systemMainAddress,systemMainPort" +
                ",status,acceptDate,acceptUpdateDate) VALUES (?,?,?,?,?,?,?,?,?)";

        Date currentDate = new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        formattedDateTime = dateFormat.format(currentDate);
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setCharacterEncoding("UTF-8");

        try {

            organNumber = Integer.parseInt(request.getParameter("organName"));
            systemNumber = Integer.parseInt(request.getParameter("systemName"));
            systemAddress = request.getParameter("systemAddress");
            systemPort = request.getParameter("systemPort");
            systemMainAddress = request.getParameter("systemMainAddress");
            systemMainPort = request.getParameter("systemMainPort");

            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");

            Connection connection = databaseManager.getConnection();

            PreparedStatement preparedStatement = connection.prepareStatement(query);

            preparedStatement.setInt(1, organNumber);
            preparedStatement.setInt(2, systemNumber);
            preparedStatement.setString(3, systemAddress);
            preparedStatement.setString(4, systemPort);
            preparedStatement.setString(5, systemMainAddress);
            preparedStatement.setString(6, systemMainPort);
            preparedStatement.setString(7, status);
            preparedStatement.setString(8, formattedDateTime);
            preparedStatement.setString(9, formattedDateTime);

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