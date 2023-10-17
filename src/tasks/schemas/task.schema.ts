import * as mongoose from "mongoose";

export const taskSchema = new mongoose.Schema({
  task: String,
  complet: Boolean,
});
