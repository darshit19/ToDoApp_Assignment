import axios from 'axios';

const apiBaseUrl = "http://localhost:5000";

const fetchAllTasks = (setTasks) => {
  axios
    .get(apiBaseUrl)
    .then(({ data }) => {
      console.log('data ---> ', data);
      setTasks(data);
    })
    .catch((error) => console.log(error));
};

const addTask = (text, setText, setTasks) => {
  axios
    .post(`${apiBaseUrl}/save`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      fetchAllTasks(setTasks);
    })
    .catch((error) => console.log(error));
};

const updateTask = (taskId, text, setTasks, setText, setIsUpdating) => {
  axios
    .post(`${apiBaseUrl}/update`, { _id: taskId, text })
    .then((data) => {
      setText("");
      setIsUpdating(false);
      fetchAllTasks(setTasks);
    })
    .catch((error) => console.log(error));
};

const deleteTask = (taskId, setTasks) => {
  axios
    .post(`${apiBaseUrl}/delete`, { _id: taskId })
    .then((data) => {
      console.log(data);
      fetchAllTasks(setTasks);
    })
    .catch((error) => console.log(error));
};

export { fetchAllTasks, addTask, updateTask, deleteTask };
