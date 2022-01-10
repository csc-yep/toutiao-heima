module.exports = {
  resolve: {
      alias: {
          // 告诉webpack, 程序员写的代码中 ，@符号表示src这一层目录
          '@': path.join(__dirname,'./src')
      }
  }
}