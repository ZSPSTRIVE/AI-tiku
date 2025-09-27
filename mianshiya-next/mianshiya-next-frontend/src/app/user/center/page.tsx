"use client";
import {Avatar, Card, Col, Row, Segmented, Tag} from "antd";
import {useSelector} from "react-redux";
import {RootState} from "@/stores";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import {useState} from "react";
import CalendarChart from "@/app/user/center/components/CalendarChart";
import "./index.css";
import UserInfo from "@/app/user/center/components/UserInfo";
import UserInfoEditForm from "@/app/user/center/components/UserInfoEditForm";
import {USER_ROLE_ENUM, USER_ROLE_TEXT_MAP} from "@/constants/user";
import dayjs from "dayjs";

/**
 * 用户中心页面
 * @constructor
 */
export default function UserCenterPage() {
  // 获取登录用户信息
  const loginUser = useSelector((state: RootState) => state.loginUser);
  // 便于复用，新起一个变量
  const user = loginUser;
  // 控制菜单栏的 Tab 高亮
  const [activeTabKey, setActiveTabKey] = useState<string>("info");
  // 控制用户资料编辑状态的切换
  const [currentEditState, setCurrentEditState] = useState<string>("查看信息");

  return (
    <div id="userCenterPage" className="max-width-content">
      <Row gutter={[16, 16]}>
        <Col xs={24} md={6}>
          <Card style={{ textAlign: "center" }}>
            <Avatar src={user.userAvatar} size={72} />
            <div style={{ marginBottom: 16 }} />
            <Card.Meta
              title={
                <Title level={4} style={{ marginBottom: 0 }}>
                  {user.userName}
                </Title>
              }
              description={
                <Paragraph type="secondary">{user.userProfile}</Paragraph>
              }
            />
            <Tag
              color={user.userRole === USER_ROLE_ENUM.ADMIN ? "gold" : "grey"}
            >
              {USER_ROLE_TEXT_MAP[user.userRole]}
            </Tag>
            <Paragraph type="secondary" style={{ marginTop: 8 }}>
              注册日期：{dayjs(user.createTime).format("YYYY-MM-DD")}
            </Paragraph>
            <Paragraph type="secondary" style={{ marginTop: 8 }} copyable={{
              text: user.id
            }}>
              我的 id：{user.id}
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={18}>
          <Card
            tabList={[
              {
                key: "info",
                label: "我的信息",
              },
              {
                key: "record",
                label: "刷题记录",
              },
              {
                key: "others",
                label: "其他",
              },
            ]}
            activeTabKey={activeTabKey}
            onTabChange={(key: string) => {
              setActiveTabKey(key);
            }}
          >
            {activeTabKey === "info" && (
              <>
                <Segmented<string>
                  options={["查看信息", "修改信息"]}
                  value={currentEditState}
                  onChange={setCurrentEditState}
                />
                {currentEditState === "查看信息" && <UserInfo user={user} />}
                {currentEditState === "修改信息" && (
                  <UserInfoEditForm user={user} />
                )}
              </>
            )}
            {activeTabKey === "record" && (
              <>
                <CalendarChart />
              </>
            )}
            {activeTabKey === "others" && <>bbb</>}
          </Card>
        </Col>
      </Row>
    </div>
  );
}
