USE [db_fuse]
GO
/****** Object:  Table [dbo].[tbl_acception]    Script Date: 9/14/2023 8:15:49 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_acception](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[organNumber] [int] NOT NULL,
	[systemNumber] [int] NOT NULL,
	[systemAddress] [nvarchar](50) NOT NULL,
	[systemPort] [nvarchar](4) NOT NULL,
	[systemMainAddress] [nvarchar](50) NOT NULL,
	[systemMainPort] [nvarchar](4) NOT NULL,
	[status] [nvarchar](50) NOT NULL,
	[acceptDate] [datetime] NOT NULL,
	[acceptUpdateDate] [datetime] NOT NULL,
 CONSTRAINT [PK_tbl_acception] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_log]    Script Date: 9/14/2023 8:15:49 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_log](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[organNumber] [int] NOT NULL,
	[systemNumber] [int] NOT NULL,
	[logGroup] [nvarchar](50) NOT NULL,
	[event] [nvarchar](50) NOT NULL,
	[sensitive] [nvarchar](50) NOT NULL,
	[describtion] [nvarchar](150) NULL,
	[logDate] [datetime] NOT NULL,
	[logUpdateDate] [datetime] NOT NULL,
 CONSTRAINT [PK_tbl_log] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_organs]    Script Date: 9/14/2023 8:15:49 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_organs](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[organName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_organs] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_system]    Script Date: 9/14/2023 8:15:49 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_system](
	[systemName] [nvarchar](50) NOT NULL,
	[systemLatinName] [nvarchar](50) NOT NULL,
	[systemNumber] [int] NOT NULL,
	[systemPort] [nvarchar](4) NOT NULL,
	[systemDate] [datetime] NOT NULL,
	[systemUpdateDate] [datetime] NOT NULL,
 CONSTRAINT [PK_tbl_system] PRIMARY KEY CLUSTERED 
(
	[systemNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tbl_acception] ON 

INSERT [dbo].[tbl_acception] ([id], [organNumber], [systemNumber], [systemAddress], [systemPort], [systemMainAddress], [systemMainPort], [status], [acceptDate], [acceptUpdateDate]) VALUES (7, 3, 64515, N'http//:ssss', N'6592', N'http//:bbbb', N'3266', N'ثبت اولیه', CAST(N'2023-09-14T03:39:57.000' AS DateTime), CAST(N'2023-09-14T03:39:57.000' AS DateTime))
INSERT [dbo].[tbl_acception] ([id], [organNumber], [systemNumber], [systemAddress], [systemPort], [systemMainAddress], [systemMainPort], [status], [acceptDate], [acceptUpdateDate]) VALUES (1009, 4, 9687454, N'nfvgnvbn', N'445', N'bcvngfnfg', N'5652', N'ثبت اولیه', CAST(N'2023-09-14T09:11:50.000' AS DateTime), CAST(N'2023-09-14T09:11:50.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[tbl_acception] OFF
GO
SET IDENTITY_INSERT [dbo].[tbl_log] ON 

INSERT [dbo].[tbl_log] ([id], [organNumber], [systemNumber], [logGroup], [event], [sensitive], [describtion], [logDate], [logUpdateDate]) VALUES (1006, 3, 320, N'دسته بندی دوم', N'ورود', N'نرمال', N'کاربر به سامانه وارد شد', CAST(N'2023-09-14T09:04:15.000' AS DateTime), CAST(N'2023-09-14T09:04:15.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[tbl_log] OFF
GO
SET IDENTITY_INSERT [dbo].[tbl_organs] ON 

INSERT [dbo].[tbl_organs] ([id], [organName]) VALUES (1, N'سازمان اول')
INSERT [dbo].[tbl_organs] ([id], [organName]) VALUES (2, N'سازمان دوم')
INSERT [dbo].[tbl_organs] ([id], [organName]) VALUES (3, N'سازمان سوم')
INSERT [dbo].[tbl_organs] ([id], [organName]) VALUES (4, N'سازمان چهارم')
SET IDENTITY_INSERT [dbo].[tbl_organs] OFF
GO
INSERT [dbo].[tbl_system] ([systemName], [systemLatinName], [systemNumber], [systemPort], [systemDate], [systemUpdateDate]) VALUES (N'تاپ', N'Top', 320, N'3268', CAST(N'2023-09-14T08:25:22.000' AS DateTime), CAST(N'2023-09-14T08:26:57.000' AS DateTime))
INSERT [dbo].[tbl_system] ([systemName], [systemLatinName], [systemNumber], [systemPort], [systemDate], [systemUpdateDate]) VALUES (N'ایرانسل', N'irancell', 64515, N'6582', CAST(N'2023-09-14T03:25:08.000' AS DateTime), CAST(N'2023-09-14T03:38:14.000' AS DateTime))
INSERT [dbo].[tbl_system] ([systemName], [systemLatinName], [systemNumber], [systemPort], [systemDate], [systemUpdateDate]) VALUES (N'سگال', N'segal', 9687454, N'1150', CAST(N'2023-09-14T08:25:22.000' AS DateTime), CAST(N'2023-09-14T09:10:52.000' AS DateTime))
GO
ALTER TABLE [dbo].[tbl_acception]  WITH CHECK ADD  CONSTRAINT [FK_tbl_acception_tbl_organs] FOREIGN KEY([organNumber])
REFERENCES [dbo].[tbl_organs] ([id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[tbl_acception] CHECK CONSTRAINT [FK_tbl_acception_tbl_organs]
GO
ALTER TABLE [dbo].[tbl_acception]  WITH CHECK ADD  CONSTRAINT [FK_tbl_acception_tbl_system] FOREIGN KEY([systemNumber])
REFERENCES [dbo].[tbl_system] ([systemNumber])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[tbl_acception] CHECK CONSTRAINT [FK_tbl_acception_tbl_system]
GO
ALTER TABLE [dbo].[tbl_log]  WITH CHECK ADD  CONSTRAINT [FK_tbl_log_tbl_organs] FOREIGN KEY([organNumber])
REFERENCES [dbo].[tbl_organs] ([id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[tbl_log] CHECK CONSTRAINT [FK_tbl_log_tbl_organs]
GO
ALTER TABLE [dbo].[tbl_log]  WITH CHECK ADD  CONSTRAINT [FK_tbl_log_tbl_system] FOREIGN KEY([systemNumber])
REFERENCES [dbo].[tbl_system] ([systemNumber])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[tbl_log] CHECK CONSTRAINT [FK_tbl_log_tbl_system]
GO
