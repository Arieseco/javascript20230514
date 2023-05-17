import React from 'react'
import AppContext from '../../context/AppContext';
import Layout from '../../components/Layout';

const HeaderTitle = {
  title: 'コンソールにアウトプット',
  subTitle: '開発ツールを開く、閉じる'
};

// console.log('おうむ返し')
// console オブジェクト
// log メソッド
// 'おうむ返し' パラメータ
const Chapter21 = () => {
  console.log('おうむ返し')
  console.log(2+3)
  console.log(123-35)

  console.log('フライ返し') // 文字列
  console.log(16 + 15) //数式
  console.log('16 + 15') //文字列

  console.log('続行するときは"C"キーを押してください')

  return (
    <AppContext.Provider value={HeaderTitle}>
      <Layout>
        <p>F12キーを押下する</p>
      </Layout>
  </AppContext.Provider>
  )
}

export default Chapter21
