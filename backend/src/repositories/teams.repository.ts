import Teams from "../models/teams.model";

interface ITutorialRepository {
    retrieveAll(searchParams: { title: string, published: boolean }): Promise<Teams[]>;
    retrieveById(tutorialId: number): Promise<Teams | null>;
}

class TeamRepository implements ITutorialRepository {
    async retrieveAll(): Promise<Teams[]> {
        try {
            return await Teams.findAll();
        } catch (error) {
            throw new Error("Failed to retrieve teams!");
        }
    }

    async retrieveById(teamId: number): Promise<Teams | null> {
        try {
            return await Teams.findByPk(teamId);
        } catch (error) {
            throw new Error("Failed to retrieve teams!");
        }
    }

}

export default new TeamRepository();