# 💻 R-Stream 💻

## 使用技術一覧

<p style="display: inline">
<img src="https://img.shields.io/badge/Node.js-5FA04E?logo=nodedotjs&logoColor=fff&style=for-the-badge" alt="Node.js Badge">
<img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=for-the-badge" alt="TypeScript Badge">
<img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=for-the-badge" alt="Tailwind CSS Badge">
<img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=for-the-badge" alt="React Badge">
<img src="https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff&style=for-the-badge" alt="Docker Badge">
<img src="https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=githubactions&logoColor=fff&style=for-the-badge" alt="GitHub Actions Badge">
<img src="https://img.shields.io/badge/Amazon%20Web%20Services-F90?logo=amazonwebservices&logoColor=fff&style=for-the-badge" alt="Amazon Web Services Badge">
<img src="https://img.shields.io/badge/Terraform-844FBA?logo=terraform&logoColor=fff&style=for-the-badge" alt="Terraform Badge">
</p>

## 目次

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [リポジトリ構成](#%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA%E6%A7%8B%E6%88%90)
  - [@r-stream/web](#r-streamweb)
  - [@r-stream/server](#r-streamserver)
- [環境構築](#%E7%92%B0%E5%A2%83%E6%A7%8B%E7%AF%89)
  - [node 22.13.0 のインストール](#node-22130-%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)
  - [pnpm のインストール](#pnpm-%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)
  - [依存パッケージのインストール](#%E4%BE%9D%E5%AD%98%E3%83%91%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B8%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)
  - [サブプロジェクト(@r-stream/web)にパッケージを追加したい場合](#%E3%82%B5%E3%83%96%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88r-streamweb%E3%81%AB%E3%83%91%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B8%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%97%E3%81%9F%E3%81%84%E5%A0%B4%E5%90%88)
- [開発ルール](#%E9%96%8B%E7%99%BA%E3%83%AB%E3%83%BC%E3%83%AB)
  - [コードフォーマット](#%E3%82%B3%E3%83%BC%E3%83%89%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88)
  - [TypeScript設定](#typescript%E8%A8%AD%E5%AE%9A)
  - [ESLintルール](#eslint%E3%83%AB%E3%83%BC%E3%83%AB)
  - [ディレクトリ構造](#%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA%E6%A7%8B%E9%80%A0)
  - [命名規則](#%E5%91%BD%E5%90%8D%E8%A6%8F%E5%89%87)
  - [Git運用ルール](#git%E9%81%8B%E7%94%A8%E3%83%AB%E3%83%BC%E3%83%AB)
    - [ブランチ命名規則](#%E3%83%96%E3%83%A9%E3%83%B3%E3%83%81%E5%91%BD%E5%90%8D%E8%A6%8F%E5%89%87)
    - [コミットメッセージ形式](#%E3%82%B3%E3%83%9F%E3%83%83%E3%83%88%E3%83%A1%E3%83%83%E3%82%BB%E3%83%BC%E3%82%B8%E5%BD%A2%E5%BC%8F)
- [便利コマンド](#%E4%BE%BF%E5%88%A9%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89)
  - [npkill](#npkill)
  - [doctoc](#doctoc)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## リポジトリ構成

このプロジェクトはモノレポの構成を採用しています。

すべて TypeScript で作られています。

```
.
└── apps/
    └── web     (@r-stream/web)
    └── server  (@r-stream/server)


```
### [@r-stream/web](./apps/web)
webアプリのサブプロジェクトです。
React で作られています。

### [@r-stream/server](./apps/server)
サーバー側のサブプロジェクトです。
フレームワークに Fastify を使用しています。

## 環境構築
### node 22.13.0 のインストール

```
$ nodenv install 22.13.0
```

> [!TIP]
>
> [nodenv](https://github.com/nodenv/nodenv) のインストールが済んでいない場合は、Homebrew でインストールできます。
> 
> ```
> $ brew install nodenv
> ```
> 
> Windows 環境の方は[こちら](https://qiita.com/ryotaro76/items/ee305b3a3628464f190b)を参考に nodenv をインストールしてください。

### pnpm のインストール

```shell
$ npm i -g pnpm@10.10.0
```
### 依存パッケージのインストール

```shell
# プロジェクトのルートで
$ pnpm i
```

### サブプロジェクト(@r-stream/web)にパッケージを追加したい場合

```
# プロジェクトのルートで
$ pnpm --filter @r-stream/web i <PACKAGE_NAME>
```

## 開発ルール

### コードフォーマット
```json
{
  "printWidth": 100,          // 1行の最大文字数
  "tabWidth": 2,             // インデントのスペース数
  "useTabs": false,          // タブの代わりにスペースを使用
  "semi": true,              // 文末のセミコロンを強制
  "singleQuote": true,       // シングルクォートを使用
  "trailingComma": "es5",    // 末尾のカンマを強制（ES5互換）
  "bracketSpacing": true,    // オブジェクトリテラルの中括弧の周りにスペース
  "jsxBracketSameLine": false, // JSXの閉じタグを改行
  "arrowParens": "always"    // アロー関数の引数は常に括弧
}
```

### TypeScript設定
```json
{
  "strict": true,                // 厳格なタイプチェック
  "noImplicitAny": true,        // any型の暗黙的な使用を禁止
  "strictNullChecks": true,     // null/undefinedのチェックを厳格に
  "noUnusedLocals": true,       // 未使用のローカル変数を禁止
  "noUnusedParameters": true,   // 未使用のパラメータを禁止
  "noImplicitReturns": true,    // 関数内の全てのコードパスでreturnが必要
  "noFallthroughCasesInSwitch": true  // switch文のフォールスルーを禁止
}
```

### ESLintルール
```json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "rules": {
    // React関連
    "react/prop-types": "off",  // TypeScriptを使用するため不要
    "react/react-in-jsx-scope": "off",  // React 17以降は不要
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // TypeScript関連
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "prefix": ["I"]
      },
      {
        "selector": "typeAlias",
        "format": ["PascalCase"]
      }
    ],

    // その他
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "eqeqeq": "error",  // 厳密等価演算子を強制
    "no-var": "error",  // varの使用を禁止
    "prefer-const": "error"  // 再代入がない変数はconstを使用
  }
}
```

### ディレクトリ構造
```
src/
  ├── assets/          # 画像やフォントなどの静的ファイル
  ├── components/      # 共通コンポーネント
  │   ├── common/     # 汎用的なコンポーネント
  │   └── layouts/    # レイアウト関連のコンポーネント
  ├── features/        # 機能ごとのコンポーネントと関連ファイル
  ├── hooks/          # カスタムフック
  ├── types/          # 型定義ファイル
  ├── utils/          # ユーティリティ関数
  ├── constants/      # 定数定義
  └── styles/         # グローバルスタイルやテーマ設定
```

### 命名規則
- コンポーネント: PascalCase（例: `UserProfile.tsx`）
- フック: camelCaseで`use`プレフィックス（例: `useAuth.ts`）
- 型定義: PascalCaseで`Type`サフィックス（例: `UserType`）
- インターフェース: PascalCaseで`I`プレフィックス（例: `IUserProps`）
- 定数: SCREAMING_SNAKE_CASE（例: `MAX_RETRY_COUNT`）

### Git運用ルール

#### ブランチ命名規則
- `feat/[内容]`     : 機能追加やドキュメント追加時
- `hotfix/[内容]`   : バグ修正時

#### コミットメッセージ形式
```
[プレフィックス]: [変更内容の具体的な説明]
```

プレフィックス:
- `feat`: 新機能追加（例: "feat: ユーザー認証機能の実装"）
- `fix`: バグ修正（例: "fix: ログイン時のバリデーションエラーを修正"）
- `docs`: ドキュメント関連（例: "docs: プロジェクト概要をREADMEに追加"）
- `style`: コードスタイルの変更（例: "style: インデントの修正"）
- `refactor`: リファクタリング（例: "refactor: ユーザー処理のロジックを整理"）
- `perf`: パフォーマンス改善（例: "perf: 画像読み込みの最適化"）
- `test`: テスト関連（例: "test: ユーザー登録のテストケース追加"）
- `chore`: ビルド・ツール関連（例: "chore: パッケージの更新"）

コミットメッセージ例:
❌ "docs: READMEの更新"
⭕ "docs: プロジェクトの技術スタックと開発ルールをREADMEに追加"

## 便利コマンド
### npkill

[npkill](https://github.com/voidcosmos/npkill) は、ディレクトリ配下の node_modules を削除するためのツールです。

深くネストしている node_modules も検索し、削除候補に表示してくれます。

これにより、モノレポでもコマンド一つで すべての node_modules を削除することが可能です。

```shell
$ npx npkill
```

### doctoc

[doctoc](https://github.com/thlorenz/doctoc) は、README に自動で目次を生成してくれるツールです。

まず、目次を入れたい箇所に下記のコードを追加します。

```md
<!-- START doctoc -->
<!-- END doctoc -->
```

その後、下記のコマンド実行すると、目次が自動生成されます。

```shell
$ pnpm doctoc --github README.md
```
