const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let todosByUser = {}; // emailごとに分ける
 // メモリ上に保存するタスクリスト

// タスク一覧を返す
app.get('/api/todos', (req, res) => {
  const { email } = req.query;
  if (!email) return res.status(400).json({ message: 'Email required' });

  if (!todosByUser[email]) {
    todosByUser[email] = [];
  }
  res.json(todosByUser[email]);
});


// 新しいタスクを追加
app.post('/api/todos', (req, res) => {
  const { email, text } = req.body;
  if (!email || !text) return res.status(400).json({ message: 'Missing email or text' });

  if (!todosByUser[email]) {
    todosByUser[email] = [];
  }

  const newTodo = { id: Date.now(), text };
  todosByUser[email].push(newTodo);
  res.json(newTodo);
});


// タスクを削除
app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { email } = req.query;
  if (!email || !todosByUser[email]) return res.status(400).json({ message: 'Invalid email' });

  todosByUser[email] = todosByUser[email].filter(todo => todo.id !== id);
  res.json({ message: 'Deleted' });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
