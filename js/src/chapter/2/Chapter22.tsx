import React from 'react'
import AppContext from '../../context/AppContext';
import Layout from '../../components/Layout';

// 単一行コメント
const HeaderTitle = {
  title: 'Javascriptはどこに書く？',
  subTitle: 'HTMLにJavaScriptを直接記述する'
};

/**
 * 複数行にまたがるコメント
 * @returns 
 */
const Chapter22 = () => {
  
  console.log('よく柿食う客だ')
  return (
    <AppContext.Provider value={HeaderTitle}>
      <Layout>
        <p>ブラウザのコンソールを開きます。</p>
      </Layout>
    </AppContext.Provider>
  )
}

export default Chapter22
