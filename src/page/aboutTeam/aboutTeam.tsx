import { Button, Image, Col, Row } from "antd";
import { RollbackOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { teams } from "../../mockData";
import "./aboutTeam.css";
import TextArea from "antd/es/input/TextArea";

export const aboutTeamPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const team = id ? teams[parseInt(id, 10) - 1] : null;

  return (
    <div>
      <div className="exitButton">
        <Button
          icon={<RollbackOutlined />}
          onClick={() => {
            navigate("/teams");
          }}
        />
      </div>
      {team && (
        <>
          <Image width={200} src={`../../../public/${team.logo}`} />
          <Row gutter={{ xs: 16, sm: 16, md: 24, lg: 32 }}>
            <Col md={24} lg={12}>
              <TextArea
                value={team.description}
                contentEditable={false}
                style={{
                  height: "330px",
                  width: "100%",
                }}
              />
            </Col>
            <Col md={6} lg={12}>
              <Image width={910} src={`../../../public/${team.photo}`} preview/>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};
