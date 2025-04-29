import { useState, useEffect } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  // ログイン状態を監視する
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/api/todos?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setTodos(data));
    }
  }, [user]);
  

  // サインアップ（新規登録）
  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('ユーザー登録成功！');
    } catch (error) {
      alert(error.message);
    }
  };

  // ログイン
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('ログイン成功！');
    } catch (error) {
      alert(error.message);
    }
  };

  // ログアウト
  const handleLogout = async () => {
    await signOut(auth);
  };

  // タスク追加
  const addTodo = async () => {
    if (text.trim() === '') return;
    const res = await fetch('http://localhost:5000/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: user.email, // ログイン中ユーザーの email をAPIに送る
        text,
      }),
    });
    const newTodo = await res.json();
    setTodos([...todos, newTodo]);
    setText('');
  };
  

  // タスク削除
  const deleteTodo = async(id) => {
    await fetch(`http://localhost:5000/api/todos/${id}?email=${user.email}`, {
      method: 'DELETE',
    });
  
    // ローカル状態からも削除
    setTodos(todos.filter(todo => todo.id !== id));
  };

  if (!user) {
    // ログインしていない場合はログイン画面を表示
    return (
      <div style={{ padding: '20px' }}>
        <h1>ログイン または サインアップ</h1>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="メールアドレス"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="パスワード"
        />
        <div>
          <button onClick={handleSignup}>サインアップ</button>
          <button onClick={handleLogin}>ログイン</button>
        </div>
      </div>
    );
  }

  // ログイン済みの場合はToDoリストを表示
  return (
    <div style={{ padding: '20px' }}>
      <h1>ToDoリスト（ログイン中）</h1>
      <button onClick={handleLogout}>ログアウト</button>
      <br /><br />
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="タスクを入力"
      />
      <button onClick={addTodo}>追加</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );


}

export default App;


