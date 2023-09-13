package com.fuse.server.system;

import java.io.*;
import java.sql.*;

import com.fuse.server.DatabaseManager;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import org.json.JSONArray;
import org.json.JSONObject;

@WebServlet(name = "systemInfo", urlPatterns = {"/systemInfo"})
public class SystemServlet extends HttpServlet {

    private DatabaseManager databaseManager;

    private String query;

    public void init() {
        databaseManager = new DatabaseManager();
        query = "SELECT * FROM tbl_system ORDER BY systemUpdateDate DESC";
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();

        try {
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");

            Connection connection = databaseManager.getConnection();
            Statement statement = connection.createStatement();

            ResultSet resultSet = statement.executeQuery(query);

            JSONArray jsonArray = new JSONArray();

            while (resultSet.next()) {
                JSONObject jsonObject = new JSONObject();
                jsonObject.put("systemName", resultSet.getString("systemName"));
                jsonObject.put("systemLatinName", resultSet.getString("systemLatinName"));
                jsonObject.put("systemNumber", resultSet.getString("systemNumber"));
                jsonObject.put("systemPort", resultSet.getString("systemPort"));
                jsonArray.put(jsonObject);
            }

            out.print(jsonArray.toString());

            System.out.println("System-Connected");

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

}