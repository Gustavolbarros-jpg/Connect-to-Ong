import { Mongo } from "../database/mongo.js"; 
import { ObjectId } from "mongodb";

const collectionName ='project'

export default class ProjectDataAccess {

    async createProject(projectData) {
        const result = await Mongo.db
        .collection(collectionName)
        .insertOne(projectData)

    return result.insertedId
    }

    async getProjectById(projectId) {
        const project = await Mongo.db
        .collection(collectionName)
        .findOne({ _id: new ObjectId(projectId) })

        return project
    }

    async getAllProjects() {
        const projects = await Mongo.db
        .collection(collectionName)
        .find({})
        .toArray()

        return projects
    }

    async deleteProject(projectId) {
        const result = await Mongo.db
            .collection(collectionName)
            .deleteOne({ _id: new ObjectId(projectId) })

        return result
    }

    async updateProject(projectId, updateData) {
        const result = await Mongo.db
            .collection(collectionName)
            .updateOne(
                { _id: new ObjectId(projectId) }, 
                { $set: updateData }              
            )

        return result
    }

}



