import { aboutTeamPage } from "../page/aboutTeam/aboutTeam"
import { FirstPage } from "../page/firstpage"
import { TeamsPage } from "../page/teamsPage/teams"

export type RouteType = {
    path: string
    name: string
    element: () => JSX.Element
}

const routes: RouteType[] = [
    {
        path: '/',
        name: 'Home',
        element: FirstPage
    },
    {
        path: 'teams',
        name: 'Teams',
        element: TeamsPage
    },
    {
        path: 'team/:id',
        name: 'Teams',
        element: aboutTeamPage
    }
]

export { routes }