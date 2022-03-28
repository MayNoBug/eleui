<template>
    <div>
        <el-form :model="form" :rules="rules">
            <el-form-item prop="name">
                <!-- 用户名输入 -->
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item prop="pw">
                <!-- 密码框输入 -->
                <el-input v-model="form.pw"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
  export default {
      name:"Myfrom",
    data() {
      return {
        form: {
          name: '路飞',
          pw:"123456",
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules:{
            name:[{type:"string",required:true,pattern:/zhangsan/,message:"用户名不对"}],
            pw:[]
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>