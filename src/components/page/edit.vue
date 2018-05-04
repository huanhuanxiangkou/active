<template>
  <div>
    <quill-editor
     class="quill" 
     v-model="progs" 
    >
    </quill-editor>
  </div>
</template>
<script>
export default {
  data(){
    return{
       progs: 'bbk'
    }
  },
  methods: {
          // ssss: function () {
          //   console.log(this.progs)
          // }
      }
}
</script>
<style>

</style>


