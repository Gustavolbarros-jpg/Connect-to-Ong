import { Mongo } from "../database/mongo.js"; 
import { ObjectId } from "mongodb";

const collectionName ='project'

export default class ProjectExtension {


    async createProject(ProjectData) {
        const result = await Mongo.db
        .collection(collectionName)
        .insertOne(ProjectData)

        return result


    }

    




    async getProject() {

    }

    async deleteProject() {

    }



}



