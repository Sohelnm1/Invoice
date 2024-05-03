import React, { useState } from "react";
import { Layout, Menu, theme } from "antd";
import {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
} from "@ant-design/icons";
import {
    Option1Content,
    Option2Content,
    UserContent,
    TeamContent,
    FilesContent,
} from "../components/ContentComponents";

const { Header, Sider, Content } = Layout;

const Home = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const handleMenuClick = ({ key }) => {
        setSelectedItem(key);
    };

    const renderContent = () => {
        switch (selectedItem) {
            case "1":
                return <Option1Content />;
            case "2":
                return <Option2Content />;
            case "3":
            case "4":
            case "5":
                return <UserContent userName={`User ${selectedItem}`} />;
            case "6":
            case "8":
                return <TeamContent teamName={`Team ${selectedItem}`} />;
            case "9":
                return <FilesContent />;
            default:
                return <div>No content selected</div>;
        }
    };

    const items = [
        { key: "1", label: "Option 1", icon: <PieChartOutlined /> },
        { key: "2", label: "Option 2", icon: <DesktopOutlined /> },
        {
            key: "sub1",
            label: "User",
            icon: <UserOutlined />,
            children: [
                { key: "3", label: "Tom" },
                { key: "4", label: "Bill" },
                { key: "5", label: "Alex" },
            ],
        },
        {
            key: "sub2",
            label: "Team",
            icon: <TeamOutlined />,
            children: [
                { key: "6", label: "Team 1" },
                { key: "8", label: "Team 2" },
            ],
        },
        { key: "9", label: "Files", icon: <FileOutlined /> },
    ];

    return (
        <Layout style={{ width: "100vw", height: "100vh", margin: 0 }}>
            <Sider
                collapsible
                collapsed={collapsed}
                theme="light"
                onCollapse={(value) => setCollapsed(value)}
            >
                <div className="demo-logo-vertical" />
                <Menu
                    theme="light"
                    defaultSelectedKeys={["1"]}
                    mode="inline"
                    onClick={handleMenuClick}
                    selectedKeys={[selectedItem]}
                >
                    {items.map((item) =>
                        item.children ? (
                            <Menu.SubMenu
                                key={item.key}
                                title={
                                    <span>
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </span>
                                }
                            >
                                {item.children.map((child) => (
                                    <Menu.Item key={child.key}>
                                        {child.label}
                                    </Menu.Item>
                                ))}
                            </Menu.SubMenu>
                        ) : (
                            <Menu.Item key={item.key}>
                                {item.icon}
                                <span>{item.label}</span>
                            </Menu.Item>
                        )
                    )}
                </Menu>
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    Header
                </Header>
                <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {renderContent()}
                </Content>
            </Layout>
        </Layout>
    );
};

export default Home;
