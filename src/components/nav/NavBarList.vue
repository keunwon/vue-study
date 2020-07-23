<template>
  <div>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="title">Menu</v-list-item-title>
        <v-list-item-subtitle>0.0.1</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn @click="$store.commit('setEdit', !$store.state.editable)" icon>
          <v-icon
            v-text="$store.state.editable ? 'mdi-eye' : 'mdi-pencil'"
          ></v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
    <v-divider></v-divider>

    <v-list nav>
      <v-list-group
        v-for="(item, i) in items"
        :key="i"
        v-model="item.active"
        :prepend-icon="item.icon"
        :no-action="!$store.state.editable"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
              <span v-if="$store.state.editable">
                <v-btn icon @click="openDialogItem(i)">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </span>
            </v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="(subItem, j) in item.subItems"
          :key="j"
          :to="$store.state.editable ? null : subItem.to"
        >
          <v-list-item-content>
            <v-list-item-title :class="$store.state.editable ? 'pl-4' : ''">
              {{ subItem.title }}
              <span v-if="$store.state.editable">
                <v-btn icon @click="openDialogSubItem(i, j)">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </span>
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-action v-if="$store.state.editable">
            <v-btn icon :to="subItem.to" exact>
              <v-icon>mdi-arrow-right-bold-circle-outline</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list-group>
    </v-list>
  </div>
</template>

<script>
export default {
  props: ['items'],
  data() {
    return {
      dialogItem: false,
      selectedItemIndex: 0,
      selectedSubItemIndex: 0,
      formItem: {
        icon: 'mdi-crosshairs-question',
        title: '',
      },
    };
  },
  methods: {
    openDialogItem(index) {
      this.selectedItemIndex = index;
      if (index < 0) {
        this.formItem.icon = 'mdi-crosshairs-question';
        this.formItem.title = '';
      } else {
        this.formItem.icon = this.items[index].icon;
        this.formItem.title = this.items[index].title;
      }
      this.dialogItem = true;
    },
    openDialogSubItem(index, subIndex) {
      this.selectedItemIndex = index;
      this.selectedSubItemIndex = subIndex;
    },
  },
};
</script>

<style></style>
