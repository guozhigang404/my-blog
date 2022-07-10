import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://image-1306150029.cos.ap-beijing.myqcloud.com/blog-home-img/123.jpg",
    siteTitle: "知趣",
    github: "https://github.com/DuYi-Edu",
    qq: "3263023350",
    qqQrCode:
      "https://image-1306150029.cos.ap-beijing.myqcloud.com/blog-home-img/123.jpg",
    weixin: "yh777bao",
    weixinQrCode:
      "https://image-1306150029.cos.ap-beijing.myqcloud.com/blog-home-img/123.jpg",
    mail: "duyi@gmail.com",
    icp: "冀ICP备2022000386号-1",
    githubName: "DuYi-Edu",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});