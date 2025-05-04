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

### セットアップ手順

#### 1. リポジトリをクローン

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

#### 2. 依存パッケージのインストール

**フロントエンド：**

```bash
cd client
npm install
```

**バックエンド：**

```bash
cd ../server
npm install
```

---

#### 3. Firebaseの設定

1. [Firebase コンソール](https://console.firebase.google.com/) にアクセスして新しいプロジェクトを作成
2. 「Authentication」→「サインイン方法」で「メール/パスワード」を有効化
3. プロジェクトの構成情報をコピーし、`client/src/firebase.js` に貼り付け

例：

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

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
