<template>
  <v-card-actions>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon @click="openModalAddTag(note.id)" v-bind="attrs" v-on="on" text color="red">
          <v-icon>mdi-pound</v-icon>
        </v-btn>
      </template>
      <span>Add Tag</span>
    </v-tooltip> 
    
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon color="orange" v-bind="attrs" v-on="on">
          <v-icon>mdi-file-document-edit</v-icon>
        </v-btn>
      </template>
      <span>Editar nota</span>
    </v-tooltip> 

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon color="red" v-bind="attrs" v-on="on" @click="deleteNote(note.id)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
      <span>Deletar nota</span>
    </v-tooltip> 

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon color="blue" @click="openModal(note)" v-bind="attrs" v-on="on">
          <v-icon>mdi-book-open</v-icon>
        </v-btn>
      </template>
      <span>Ler nota</span>
    </v-tooltip> 


    <v-spacer></v-spacer>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon @click="favorite(note.id)" v-bind="attrs" v-on="on">
          <v-icon>mdi-star-outline</v-icon>
        </v-btn>
      </template>
      <span>Favoritar nota</span>
    </v-tooltip> 
  
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon  @click="openModalShared" v-bind="attrs" v-on="on">
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </template>
      <span>Compartilhar nota</span>
    </v-tooltip> 
  </v-card-actions>
</template>

<script>
export default {
  data: () => ({}),

  props: {
    note: {
      type: Object,
      required: true,
    }
  },

  methods: { },
}
</script>