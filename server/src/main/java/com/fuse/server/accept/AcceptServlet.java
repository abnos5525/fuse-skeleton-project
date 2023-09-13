package com.fuse.server.accept;

import com.fuse.server.DatabaseManager;
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

@WebServlet(name = "acceptInfo", urlPatterns = {"/acceptInfo"})
public class AcceptServlet extends HttpServlet {

    private DatabaseManager databaseManager;

    private String query;

    public void init() {
        databaseManager = new DatabaseManager();
        query = "SELECT A.*, S.systemName, O.organName\n" +
                "FROM tbl_acception AS A\n" +
                "JOIN tbl_system AS S ON A.systemNumber = S.systemNumber\n" +
                "JOIN tbl_organs AS O ON A.organNumber = O.id\n" +
                "ORDER BY A.acceptUpdateDate DESC;\n";
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
                jsonObject.put("id", resultSet.getInt("id"));
                jsonObject.put("organName", resultSet.getString("organName"));
                jsonObject.put("systemName", resultSet.getString("systemName"));
                jsonObject.put("systemAddress", resultSet.getString("systemAddress"));
                jsonObject.put("systemPort", resultSet.getString("systemPort"));
                jsonObject.put("systemMainAddress", resultSet.getString("systemMainAddress"));
                jsonObject.put("systemMainPort", resultSet.getString("systemMainPort"));
                jsonObject.put("status", resultSet.getString("status"));
                jsonObject.put("organNumber", resultSet.getInt("organNumber"));
                jsonObject.put("systemNumber", resultSet.getInt("systemNumber"));
                jsonArray.put(jsonObject);
            }

            out.print(jsonArray.toString());

            System.out.println("Acception-Connected");

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