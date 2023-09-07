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
        query = "SELECT * FROM tbl_system";
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();

        try {
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");

            Connection connection = databaseManager.getConnection();
            System.out.println("Connected");
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

            databaseManager.closeConnection(connection);

        } catch (SQLException e) {
            System.out.println(e);
            throw new RuntimeException(e);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

}