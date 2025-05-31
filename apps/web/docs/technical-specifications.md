# 🔧 R-Stream 技術仕様書

## 📋 目次

1. [システムアーキテクチャ](#システムアーキテクチャ)
2. [データベース設計](#データベース設計)
3. [API仕様](#api仕様)
4. [セキュリティ要件](#セキュリティ要件)
5. [パフォーマンス要件](#パフォーマンス要件)
6. [スケーラビリティ設計](#スケーラビリティ設計)
7. [バックアップ/リカバリー計画](#バックアップリカバリー計画)
8. [監査ログ設計](#監査ログ設計)

## システムアーキテクチャ

### 全体構成

- フロントエンド: React + TypeScript
- バックエンド: Node.js + Express
- データベース: PostgreSQL
- キャッシュ: Redis
- メッセージング: WebSocket
- ストレージ: AWS S3

### コンポーネント構成

1. Webアプリケーション

   - スピーカー/リスナーインターフェース
   - リアルタイム理解度表示
   - 質問管理システム
   - アーカイブ管理

2. バックエンドサービス

   - 認証/認可サービス
   - リアルタイム通信サービス
   - データ同期サービス
   - アーカイブサービス
   - 録画サービス

3. インフラストラクチャ
   - ロードバランサー
   - アプリケーションサーバー
   - データベースサーバー
   - キャッシュサーバー
   - ストレージサーバー

## データベース設計

### スキーマ設計

1. ユーザー管理

   ```sql
   CREATE TABLE users (
     id UUID PRIMARY KEY,
     username VARCHAR(50) NOT NULL,
     email VARCHAR(255) UNIQUE NOT NULL,
     password_hash VARCHAR(255) NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
     updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
   );
   ```

2. セッション管理

   ```sql
   CREATE TABLE sessions (
     id UUID PRIMARY KEY,
     user_id UUID REFERENCES users(id),
     title VARCHAR(255) NOT NULL,
     status VARCHAR(20) NOT NULL,
     started_at TIMESTAMP WITH TIME ZONE,
     ended_at TIMESTAMP WITH TIME ZONE,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
   );
   ```

3. 理解度データ

   ```sql
   CREATE TABLE understanding_data (
     id UUID PRIMARY KEY,
     session_id UUID REFERENCES sessions(id),
     user_id UUID REFERENCES users(id),
     understanding_level INTEGER NOT NULL,
     timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
   );
   ```

4. 質問管理
   ```sql
   CREATE TABLE questions (
     id UUID PRIMARY KEY,
     session_id UUID REFERENCES sessions(id),
     user_id UUID REFERENCES users(id),
     content TEXT NOT NULL,
     status VARCHAR(20) NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
     answered_at TIMESTAMP WITH TIME ZONE
   );
   ```

## API仕様

### RESTful API

1. 認証API

   - POST /api/auth/login
   - POST /api/auth/logout
   - POST /api/auth/refresh

2. セッションAPI

   - GET /api/sessions
   - POST /api/sessions
   - GET /api/sessions/:id
   - PUT /api/sessions/:id
   - DELETE /api/sessions/:id

3. 理解度API

   - POST /api/sessions/:id/understanding
   - GET /api/sessions/:id/understanding

4. 質問API
   - POST /api/sessions/:id/questions
   - GET /api/sessions/:id/questions
   - PUT /api/sessions/:id/questions/:questionId

### WebSocket API

1. セッション接続

   - ws://api.example.com/sessions/:id

2. イベント
   - understanding:update
   - question:new
   - question:answered
   - session:status

## セキュリティ要件

### 認証/認可

1. ユーザー認証

   - JWTベースの認証
   - リフレッシュトークンによる認証維持
   - パスワードハッシュ化（bcrypt）

2. アクセス制御
   - ロールベースのアクセス制御（RBAC）
   - セッション単位の権限管理
   - APIエンドポイントの認可

### データ保護

1. 暗号化

   - 通信: TLS 1.3
   - 保存データ: AES-256-GCM
   - 鍵管理: AWS KMS

2. セキュアな設定
   - セキュアなHTTPヘッダー
   - CORS設定
   - CSP設定

## パフォーマンス要件

### レスポンス時間

1. 画面更新

   - 平均: 500ms以内
   - 最大: 1秒以内
   - 95パーセンタイル: 800ms以内

2. API応答
   - 平均: 200ms以内
   - 最大: 500ms以内
   - 95パーセンタイル: 300ms以内

### スループット

1. 同時接続

   - 最小: 10ユーザー
   - 推奨: 50ユーザー
   - 最大: 100ユーザー
   - スケールアウト: 200ユーザーまで自動スケール

2. リクエスト処理
   - 秒間100リクエスト
   - バースト時: 秒間500リクエスト

## スケーラビリティ設計

### 水平スケーリング

1. アプリケーションサーバー

   - オートスケーリング
   - 最小: 2インスタンス
   - 最大: 10インスタンス
   - スケールアウト条件: CPU使用率70%以上

2. データベース
   - レプリケーション
   - 読み取り専用レプリカ
   - シャーディング（必要に応じて）

### 垂直スケーリング

1. サーバーリソース

   - CPU: 4コア以上
   - メモリ: 16GB以上
   - ストレージ: SSD 100GB以上

2. データベース
   - CPU: 8コア以上
   - メモリ: 32GB以上
   - ストレージ: SSD 500GB以上

## バックアップ/リカバリー計画

### バックアップ

1. データベース

   - フルバックアップ: 日次
   - 増分バックアップ: 1時間ごと
   - 保持期間: 30日

2. ファイル
   - アーカイブデータ: 日次
   - 録画データ: リアルタイム
   - 保持期間: 1年

### リカバリー

1. 障害復旧

   - RTO: 4時間以内
   - RPO: 1時間以内

2. リカバリー手順
   - 自動フェイルオーバー
   - 手動リカバリー手順
   - テスト手順

## 監査ログ設計

### ログ収集

1. アプリケーションログ

   - アクセスログ
   - エラーログ
   - パフォーマンスログ

2. セキュリティログ
   - 認証ログ
   - 認可ログ
   - セキュリティイベント

### ログ管理

1. 保存期間

   - アクセスログ: 90日
   - エラーログ: 180日
   - セキュリティログ: 365日

2. ログ分析
   - リアルタイム監視
   - 定期的な分析
   - アラート設定

## 🔄 更新履歴

| 日付       | 更新内容 | 更新者 |
| ---------- | -------- | ------ |
| 2025-05-31 | 初版作成 | -      |
