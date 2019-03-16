import React, { Component } from 'react';
import request from '@/constants/fetchRequest';
import {Layout, Menu, Icon,} from 'antd';
const { SubMenu } = Menu;
const { Sider } = Layout;
import MainHeader from './MainHeader';

export default class MainLayout extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
    let params = {
      page:1,
      rows:10,
      group_name:"",
      name:"",
      group_type:"",
      is_enable:""
    };
    let data = request('/nbproperty/group/user-list', params);
    //console.log(data,'fetch')
  }
  render(){
    return (
      <Layout>
        <MainHeader />
        {/* <Sider style={{ minHeight: document.body.scrollHeight - 64 }}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider> */}
        {/* <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            Content
          </Content>
        </Layout> */}
      </Layout>
    );
  }
}