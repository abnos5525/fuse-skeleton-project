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

@WebServlet(name = "deleteSystemInfo", urlPatterns = {"/deleteSystemInfo"})
public class DeleteSystemServlet extends HttpServlet {

    private DatabaseManager databaseManager;

    private String query;

    private int systemNumber;

    public void init() {
        databaseManager = new DatabaseManager();
        query = "BEGIN TRANSACTION;" +
                "DELETE FROM tbl_log\n" +
                "WHERE systemNumber = ?;\n" +

                "DELETE FROM tbl_acception\n" +
                "WHERE systemNumber = ?;\n" +

                "DELETE FROM tbl_system\n" +
                "WHERE systemNumber = ?;\n" +

                "COMMIT;";
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setCharacterEncoding("UTF-8");

        try {

            systemNumber = Integer.parseInt(request.getParameter("systemNumber"));

            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");

            Connection connection = databaseManager.getConnection();

            PreparedStatement preparedStatement = connection.prepareStatement(query);

            preparedStatement.setInt(1, systemNumber);
            preparedStatement.setInt(2, systemNumber);
            preparedStatement.setInt(3, systemNumber);


            int rowsAffected = preparedStatement.executeUpdate();

            if (rowsAffected > 0) {
                response.setStatus(HttpServletResponse.SC_CREATED);
                System.out.println("Deleted Successfully!");
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