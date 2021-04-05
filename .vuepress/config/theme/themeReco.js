module.exports = {
  type: 'blog',
  // 博客设置
  blogConfig: {
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: 'Category' // 默认 “分类”
    },
    tag: {
      location: 3, // 在导航栏菜单中所占的位置，默认3
      text: 'Tag' // 默认 “标签”
    },
    socialLinks: [
      { icon: 'reco-github', link: 'https://github.com/recoluan' },
      { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
    ]
  },
  // 最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
  // 作者
  author: 'reco_luan',
  authorAvatar: '/head.png',
  // valine 设置
  valineConfig: {
    appId: 'Q6hMeY2PSaM9FMkXetzoJoU5-gzGzoHsz',
    appKey: 'iLQlev5jo2Cm5pLcI0z3qhtr',
    placeholder: '填写邮箱可以收到回复提醒哦！',
    verify: true, // 验证码服务
    // notify: true, // 
    recordIP: true,
    hideListAccessNumber: true
  },
  friendLink: [
    {
      title: '午后南杂',
      desc: 'Enjoy when you can, and endure when you must.',
      email: '1156743527@qq.com',
      link: 'https://www.recoluan.com'
    },
    {
      title: 'vuepress-theme-reco',
      desc: 'A simple and beautiful vuepress Blog & Doc theme.',
      logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      link: 'https://vuepress-theme-reco.recoluan.com'
    },
    {
      title: '小诺',
      desc: '可能是支持数据库最全面的低代码快速开发平台',
      logo: "https://doc.xiaonuo.vip/xiaonuo_logo.png",
      link: 'https://doc.xiaonuo.vip/'
    },
  ],
  // 备案号
  record: '京京ICP备2021009702号',
  // 项目开始时间
  startYear: '2017',
  mode: 'light'
}