<template>
  
</template>

<script>
export default {
}
//require.context() 函数来创建自己的 context。
//参数1：要搜索的目录。
//参数2：布尔值是否要搜索其子目录
//参数3：文件匹配的正则式
const requ = require.context('../7.环境变量',true,/\js$/ig)
</script>

<style>

</style>