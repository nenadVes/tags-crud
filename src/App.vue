<template>
  <div id="app">
    <!-- add modals here -->
    <AddTagModal/>
    <TagsTableView/>
    <Copyright/>
  </div>
</template>

<script>
import TagsTableView from '@/components/tags/TagsTableView.vue'
import AddTagModal from '@/components/modals/AddTagModal'
import Copyright from '@/components/shared/Copyright'

export default {
  name: 'App',
  components: {
    TagsTableView,
    AddTagModal,
    Copyright
  }
}
</script>

<style>
  html {
    background-color: #efefef;
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    width: 100%;
  }
</style>
