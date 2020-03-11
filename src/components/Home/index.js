import { Layout, Menu, Breadcrumb } from 'antd';
import {
  UserAddOutlined,
  HomeOutlined,
  OrderedListOutlined
} from '@ant-design/icons';
import React from 'react';
import { HashRouter as BrowserRouter, Route, Link } from "react-router-dom";
import NewContact from "../Contacto/newContact";
import Option2 from '../Option2';

const { Header, Content, Footer, Sider } = Layout;

class Home extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <BrowserRouter>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
            <Menu.Item key="0"style={{display: "block"}}>
              <Link to="/">
                <HomeOutlined spin="true" style={{margin: "0.5cm"}}/>
                <span>Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Link to="/contacts/new">
                <UserAddOutlined spin="true" style={{margin: "0.5cm"}}/>
                <span>Agregar Contacto</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/option2">
                <OrderedListOutlined style={{margin: "0.5cm"}}/>
                <span>Lista de Contactos</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, backgroundColor: "black" }} />
          <Content style={{ margin: '0 16px' }}>
                <Route exact path="/contacts/new" component={NewContact} />
                <Route exact path="/option2" component={Option2} />
            
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
        </BrowserRouter>
      </Layout>
    );
  }
}

export default Home;
