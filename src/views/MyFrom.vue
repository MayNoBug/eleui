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
        // 自定义正则校验
        let myfn = function(rule,value){
            console.log(rule,value)
            let rg = /\w{2,6}/
            if(!rg.test(value)){
                return callback(new Error("信息不对"))
            }
            
        }
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
            name:[{valitor:myfn,trigger:"blur"}],
            pw:[]
        }
        // valitor跟message  pattren二选一
        // reigger表示什么时候触发正则校验,值是事件名
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>