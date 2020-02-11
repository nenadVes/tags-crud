<template>
  <modal @before-close="beforeClose" @before-open="beforeOpen" width="600" height="461" name="add-tag">
    <form @submit.prevent="save(tag)" class="add-tag-wrapper">
      <h1>
        Add New Tag
      </h1>
      <h3>
        Add tags that you wish to apply to contacts.
      </h3>
      <div class="input-wrapper">
        <label for="tag-input">Tag Name</label>
        <input v-validate.disabled="'required'"
               name="name"
               v-model="tag.name"
               type="text"
               id="tag-input"
               placeholder="e.g. Tagliatele" />
        <span class="error-message">{{ errors.first('name') }}</span>
      </div>

      <div class="color-picker-wrapper">
        <div @click="selectColor(color)"
             :key="color"
             v-for="color in TAG_COLORS"
             :class="['color-holder', { 'color-selected': color === selectedColor}]"
             :style="{'background-color': `#${color}`, 'border-color': `#${color}`}">
        </div>
        <span class="error-message">{{ errors.first('color') }}</span>
      </div>
      <div class="btn-wrapper">
        <button type="button" class="cancel-btn" @click="$modal.hide('add-tag')">
          Cancel
        </button>
        <button type="submit" class="save-btn">
          Save Tag
        </button>
      </div>
    </form>
  </modal>
</template>

<script>
import { TAG_COLORS } from '@/models/tag.model'

export default {
  name: 'AddTagModal.vue',
  data () {
    return {
      TAG_COLORS,
      selectedColor: '',
      tag: {
        name: '',
        color: ''
      }
    }
  },
  watch: {
    'tag.name' (newValue) {
      this.tag.name = newValue.toUpperCase()
    }
  },
  methods: {
    selectColor (color) {
      this.selectedColor = color
      this.tag.color = color
      this.$validator.detach('color')
    },
    async save (tag) {
      this.$validator.validateAll().then(async isValid => {
        if (isValid) {
          await this.$store.dispatch('tags/create', { tag })
          this.$modal.hide('add-tag')
        }
      }).catch(e => {})
    },
    beforeClose () {
      Object.assign(this.$data, this.$options.data()) // hack to reset data on modal re-showing
      if (this.fields.color) {
        this.$validator.detach('color')
      }
      this.$validator.pause()
    },
    beforeOpen () {
      this.$validator.attach({ name: 'color', rules: { required: true } })
    }
  }
}
</script>

<style scoped>
.add-tag-wrapper {
  text-align: center;
  margin-top: 80px;
}

h1 {
  color: #2b3a3e;
  font-family: Roboto;
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
}

h3 {
  color: #6a7578;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
}

.input-wrapper {
  display: grid;
  margin-left: 20%;
}

.input-wrapper input {
  background-color: #fae7e1;
  border: 1px solid #d95c32;
  border-radius: 2px;
  height: 40px;
  width: 70%;
}
.input-wrapper input::placeholder {
  color: #999999;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  width: 87px;
  text-align: left;
  padding-left: 10px;
}

.input-wrapper label {
  color: #6a7578;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 18px;
  width: 59px;
  text-align: left;
}

.color-picker-wrapper {
  text-align: center;
  display: flex;
  margin-left: 20%;
  margin-top: 20px;
  flex-wrap: wrap;
  width: 43%;
}

.color-holder {
  width: 20px;
  height: 20px;
  margin: 1px 12px;
  margin-left: 0;
  border-radius: 50%;
  background: content-box;
  padding: 2px;
}

.color-holder:hover {
  border: 1px solid;
}

.color-selected {
  border: 1px solid;
}

.btn-wrapper {
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 15px;
  width: 100%;
}

.cancel-btn {
  background-color: transparent;
  border-color: transparent;
  color: #999999;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  margin-left: 10px;
}

.save-btn {
  background-image: linear-gradient(180deg, #FF794D 0%, #EB6236 100%);
  border: 1px solid #D95C32;
  border-radius: 2px;
  width: 103px;
  height: 40px;
  margin-right: 10px;
  color: #FFFFFF;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
}

.error-message {
  color: red;
  text-align: left;
}
</style>
