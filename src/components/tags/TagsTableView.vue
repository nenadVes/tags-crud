<template>
  <div>
    <h1>Tags</h1>
    <div class="btn-wrapper">
      <button @click="$modal.show('add-tag')" class="add-btn">
        Add tag
      </button>
    </div>
    <div class="table-wrapper">
      <table class="table">
        <thead>
          <th class="tag-name" @click="sortAscending = !sortAscending">
            Tag Name
            <span><img :class="{'rotate-carret': !sortAscending}" src="../../assets/icn-arrow-up@1x.svg" alt=""></span>
          </th>
          <th>
            Contacts
          </th>
          <th>
            Created By
          </th>
          <th>
            Date Created
          </th>
          <th>
            Actions
          </th>
        </thead>
        <tbody class="table-body">
        <tr :key="index" v-for="(tag,index) in tags">
          <td>
            <span class="tag" :style="{'background-color': `#${tag.color}`}">
              {{ tag.name }}
            </span>
          </td>
          <td>
            12
          </td>
          <td>
            Administrator
          </td>
          <td>
            {{ new Date(Date.now()).toDateString() }}
          </td>
          <td>
            <span @click="deleteTag(tag)" class="action">
              Delete
            </span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      sortAscending: true
    }
  },
  computed: {
    tags () {
      return this.$store.getters['tags/getSortedByName'](this.sortAscending)
    }
  },
  methods: {
    deleteTag (tag) {
      this.$store.dispatch('tags/remove', { tag })
    }
  },
  mounted () {
    this.$store.dispatch('tags/get')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #2B3A3E;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 22px;
    opacity: 0.7;
    text-align: left;
    margin-left: 10%;
    text-transform: uppercase;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }

  .tag-name {
    color: orangered;
    cursor: pointer;
    user-select: none;
  }

  .rotate-carret {
    transform: rotate(180deg);
  }

  .btn-wrapper {
    text-align: left;
    margin-left: 10%;
    padding: 20px;
    padding-left: 0;
    background-color: transparent;
  }

  .add-btn {
    background-color: #FBD7CC;
    border-radius: 2px;
    width: 138px;
    height: 40px;
    color: #EB6136;
    font-family: Roboto;
    font-size: 15px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
  }

  .table-wrapper {
    width: 100%;
    background-color: transparent;
  }

  .table {
    width: 80%;
    margin: 0 auto;
    border-collapse:collapse
  }

  th {
    color: #999999;
    font-family: Roboto;
    font-size: 11px;
    font-weight: 700;
    line-height: 18px;
    text-transform: uppercase;
  }

  tr {
    height: 61px;
  }
  tr:hover {
    background-color: #FFFFFF;
    border-radius: 6px;
    box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.1);
  }

  tr:hover .action{
    opacity: 1;
  }

  .table-body {
    background-color: #FFFFFF;
    border-radius: 6px;
    box-shadow: 0 0 10px 0 rgba(34, 34, 34, 0.2);
    color: #2B3A3E;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
  }

  .tag {
    color: #FFFFFF;
    font-family: Roboto;
    font-size: 11px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;
    text-transform: uppercase;
    padding: 4px;
    border-radius: 14%;
  }

  .action {
    color: #D95C32;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    text-align: right;
    opacity: 0;
    z-index: 100;
  }

  .action:hover {
    opacity: 0.5 !important;
    cursor: pointer;
  }

</style>
