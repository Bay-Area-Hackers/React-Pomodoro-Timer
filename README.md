# 環境構築

1. 各々の VSCode に clone

```
$ git clone https://github.com/Bay-Area-Hackers/react-pomodoro-timer.git
```

2. npm の[インストール](https://hirooooo-lab.com/development/install-node/)（npm 既に使える人は不要）

3. ホームディレクトリで以下のコマンド実行

```
$ npm i
```

# storybook 使用

```
$ npm run storybook
```

URL を叩く http://localhost:6006/

# プレビュー

```
$ npm start
```

URL を叩く http://localhost:3000/

# 使用技術

- React (TypeScript/JavaScript のフレームワーク)
- TypeScript (JavaScript の上位互換)
- [TailwindCSS](https://tailwindcss.com/) (CSS ライブラリ)
- npm (パッケージ管理ツール)
- storybook (UI 構築ライブラリ)
- Redux (状態管理ツール)
- [react-countdown-circle-timer](https://www.npmjs.com/package/react-countdown-circle-timer) (タイマー UI)
- [react-confetti](https://qiita.com/mkin/items/f51fcfd7970be3c3bf3f) (紙吹雪アニメーション)

```
ブランチ戦略
- main
    - develop
        - feature/text_button
        - feature/icon_button
```

``` tsx
/** components/atoms/IconButton.tsx
 * image: string
 * onClick: () => void
 * height: number
 * width: number
**/

/** components/atoms/TextButton.tsx
 * IsYes: boolean
 * onClick: () => void
**/

/** components/atoms/Clock.tsx
 * duration: number // 
 * colors: string|string[]
 * isPlaying: boolean // アニメーション
 * size: number
 * trailColor: string
 * onComplete: 指定時間が終わってからの処理
**/
* children: 時間を分に帰る

/** components/atoms/Modal.tsx
 * setter: State  //
 * onClick: () => void
 * children: JSX.Element
**/

/** components/atoms/SelectBox.tsx
 * isTimer: boolean
 * setter: State // セレクトボックスの更新ステート
 * initNum : number // isTimer ? 時間(s) : Pomo個数
 */

-------------------------------------
/** components/molecules/SettingTimer.tsx
 * text: string
 * 


```
