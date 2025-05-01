import { Router } from "express";
import { getTasks, createTask, deleteTask, updateTask } from "../controllers/toDoControllers";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Task:
 *          type: object
 *          required:
 *              -title
 *          properties:
 *              _id:
 *                  type: integer
 *                  description: The auto-generated id of the Task
 *              title:
 *                  type: string
 *                  description: The task name
 *              completed:
 *                  type: boolean
 *                  description: Boolean value whether the task is completed or not
            example:
                _id: 1
                title: Practice guitar
                completed: false

 */


/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: task managing API
 */

/**
 * @swagger
 * /:
 *  get:
 *      summary: Return the list of all Tasks
 *      tags: [Tasks]
 *      responses:
 *          200:
 *              description: The list of Tasks
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                          $ref: "#/components/schemas/Task"
 */

router.get("/", getTasks);
router.post("/", createTask);
router.delete("/:id", deleteTask);
router.patch("/:id", updateTask);

export default router;