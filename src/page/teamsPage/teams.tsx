
import { CardComponent } from '../../Components/card'
import { teams } from '../../mockData'
import './teams.css'

export const TeamsPage = () => {
    return (
        <div>
            <div className="textAria">
                2021 - Год СНГ в киберспорте 
            </div>
            <div className='card'>
                {teams.map((team: any) => (
                    <CardComponent data={team}/>
                ))}
            </div>
        </div>
    )
}