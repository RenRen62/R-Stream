/**
 * Jest設定ファイル
 *
 * @property {string} preset - TypeScript用のプリセット
 * @property {string} testEnvironment - テスト実行環境（Node.js）
 * @property {string[]} testMatch - テスト対象ファイルのパターン（src/logicsディレクトリ配下のみ）
 * @property {string[]} moduleFileExtensions - モジュールとして扱うファイル拡張子
 * @property {Object} transform - ファイル変換の設定（TypeScriptファイルをJestで実行可能に）
 */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/logics/**/*.test.ts'],
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  }
};
