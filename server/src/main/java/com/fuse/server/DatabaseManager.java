package com.fuse.server;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseManager {
    private String jdbcUrl;
    private String dbUser;
    private String dbPassword;

    public DatabaseManager() {
        // مقادیر اتصال به پایگاه داده را تنظیم کنید
        jdbcUrl = "jdbc:sqlserver://127.0.0.1:1433;databaseName=db_fuse;encrypt=true;trustServerCertificate=true;";
        dbUser = "sa";
        dbPassword = "5525";
    }

    public Connection getConnection() throws SQLException {
        try {
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            return DriverManager.getConnection(jdbcUrl, dbUser, dbPassword);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException("خطا در اتصال به پایگاه داده: " + e.getMessage(), e);
        }
    }

    public void closeConnection(Connection connection) {
        if (connection != null) {
            try {
                connection.close();
            } catch (SQLException e) {
                // مدیریت خطا
            }
        }
    }
}
