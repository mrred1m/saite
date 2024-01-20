import { apiClient } from "./axiosConfig";

class TeamsService {

    async getTeams() {
        return apiClient.get<any[]>(`/teams`).then((res) => res.data || [])
    }

    async getTeamById(id: number) {
        return apiClient.get<any>(`/teams/${id}`).then((res) => res.data || {})
    }
}

export default new TeamsService();