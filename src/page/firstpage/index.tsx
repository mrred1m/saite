import { Button } from "antd";
import './firstpage.css'
import { useNavigate } from "react-router-dom";

export const FirstPage = () => {
    const navigate = useNavigate();

    const handlerLink = () => {
        navigate('/teams')
    }

  return (
    <div className="button">
      <Button type="text" className="extaButton" size="large" onClick={handlerLink}>
        Вперед
      </Button>
    </div>
  );
};
