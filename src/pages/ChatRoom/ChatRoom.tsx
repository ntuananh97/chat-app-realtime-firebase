import { Col, Row } from "antd"
import Sidebar from "./Sidebar"
import ChatWindow from "../../components/ChatWindow"

const ChatRoom = () => {
  return (
    <Row className="chatroom" style={{height: '100vh', }}>
      <Col span={6} style={{background: '#611F69', padding: '15px 0'}}>
        <Sidebar />
      </Col>
      <Col span={18}>
        <ChatWindow />
      </Col>
    </Row>
  )
}

export default ChatRoom