## Firebase認証付きToDoアプリ

このアプリは、React（Vite）とNode.js（Express）、Firebase認証を使って構築されたフルスタックのToDoアプリです。
ユーザーはメールアドレスとパスワードでサインアップ・ログインし、自分専用のタスクリストを管理できます。

---

### 主な機能

* Firebaseによるユーザー認証（メールアドレス＋パスワード）
* タスクの追加・削除機能
* ログインユーザーごとにタスクを分離して保存
* フロントエンド：React（Vite使用）
* バックエンド：Node.js（Express使用、メモリ保存）

---

### 使用技術

* React（Vite）
* Firebase Authentication
* Node.js / Express
* Fetch API

---

### DEMO
1. Sign up または Loginをする。
![image](https://github.com/user-attachments/assets/63c1554b-92a8-42d4-9d9e-3b64b930cad1)

2. ログインが成功したらOKを押す。
![image](https://github.com/user-attachments/assets/daf11b12-f7ad-42b6-adb3-732c60fb86db)

3. タスクを追加していく。
![image](https://github.com/user-attachments/assets/3fea067f-275a-47f2-90a7-d3853de011df)



---

### ローカルでの実行

#### バックエンドの起動（Expressサーバー）

```bash
cd server
node index.js
```

→ `http://localhost:5000` で待機

#### フロントエンドの起動（Vite）

```bash
cd ../client
npm run dev
```

→ ブラウザで `http://localhost:5173` を開く

---

### 補足

* タスクデータはサーバーのメモリに保存されているため、**サーバーを再起動すると消えます**。
* Firebaseは「認証のみ」を担当し、タスクのデータ自体はExpressサーバー側で扱っています。

---

### ライセンス

このプロジェクトは MITライセンス のもとで公開されています。
