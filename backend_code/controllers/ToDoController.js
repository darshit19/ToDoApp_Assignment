const ToDoModel = require("../models/ToDoModel");

module.exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await ToDoModel.find();
    res.send(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.saveTask = (req, res) => {
  const { taskText } = req.body;

  ToDoModel.create({ text: taskText })
    .then((data) => {
      console.log("Task Added Successfully...");
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
};

module.exports.deleteTask = (req, res) => {
  const { taskId } = req.body;

  console.log('Task ID ---> ', taskId);

  ToDoModel.findByIdAndDelete(taskId)
    .then(() => res.status(201).send("Task Deleted Successfully..."))
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
};

module.exports.updateTask = (req, res) => {
  const { taskId, taskText } = req.body;

  ToDoModel.findByIdAndUpdate(taskId, { text: taskText })
    .then(() => res.status(201).send("Task Updated Successfully..."))
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
};
