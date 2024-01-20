import { useQuery } from "@tanstack/react-query";
import { CardComponent } from '../../Components/card'
// import { teams } from '../../mockData'
import teamsService from "../../services/teams.service";
import './teams.css'

export const TeamsPage = () => {

    const { data: teams } = useQuery({
        queryKey: ["teams"],
        queryFn: () => teamsService.getTeams()
      });

    return (
        <div>
            <div className="textAria">
                2021 - Год СНГ в киберспорте 
            </div>
            <div className='card'>
                {teams?.map((team: any) => (
                    <CardComponent data={team}/>
                ))}
            </div>
        </div>
    )
}