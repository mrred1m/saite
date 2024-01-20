import { Card } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

export const CardComponent = ({data}: any) => {
    const navigate = useNavigate();
    
    const handleNavigate = (id: number) => {
        navigate(`/team/${id}`)
    }

  return (
    <Card
      key={data.teamsName}
      hoverable
      style={{ width: 440 }}
      cover={<img alt={data.teamsName} src={data.photo} />}
      onClick={() => handleNavigate(data.id)}
    >
      <Meta title={data.teamsName} style={{
      }}/>
    </Card>
  );
};
