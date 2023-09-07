package com.fuse.server.system;

import com.fuse.server.DatabaseManager;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

@WebServlet(name = "addSystemInfo", urlPatterns = {"/addSystemInfo"})
public class AddSystemServlet extends HttpServlet {

    private DatabaseManager databaseManager;

    private String query;

    private String systemName;
    private String systemLatinName;
    private int systemNumber;
    private String systemPort;



    public void init() {
        databaseManager = new DatabaseManager();
        query = "INSERT INTO tbl_system (systemName,systemLatinName,systemNumber,systemPort) VALUES (?,?,?,?)";

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
            System.out.println("POST Connected");

            PreparedStatement preparedStatement = connection.prepareStatement(query);

            preparedStatement.setString(1, systemName);
            preparedStatement.setString(2, systemLatinName);
            preparedStatement.setInt(3, systemNumber);
            preparedStatement.setString(4, systemPort);

            int rowsAffected = preparedStatement.executeUpdate();

            if (rowsAffected > 0) {
                response.setStatus(HttpServletResponse.SC_CREATED);
                System.out.println("اطلاعات با موفقیت ذخیره شد.");
            } else {
                response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                System.out.println("مشکلی در ذخیره‌سازی اطلاعات رخ داد.");
            }

            databaseManager.closeConnection(connection);

        } catch (SQLException e) {
            e.printStackTrace();
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            PrintWriter out = response.getWriter();
            out.println("مشکل در اتصال به پایگاه داده یا اجرای کوئری.");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            PrintWriter out = response.getWriter();
            out.println("مشکل در بارگذاری درایور JDBC.");
        }

    }

    public void destroy() {
    }
}