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
