<template>
  <v-container class="grey lighten-5 pt-0">
    <v-row v-if="items.length > 0">
      <v-col v-for="note in items" :key="note.id" cols="6" md="4">
        <v-card class="pa-1" outlined tile>
          <v-card-title>
            
            <span class="title font-weight-light">
              {{ note.title }}
            </span>
            
          </v-card-title>

          <v-card-text class="headline text-justify body-1">
            <!-- {{ note.body.slice(0, 30) + '...' }} -->
          </v-card-text>

          <v-chip-group v-if="note.tags.length > 0" column class="ml-2">
            <v-chip v-for="tag in note.tags" :key="tag.id"
              class="ma-1"
              color="green"
              label
              outlined
            >
              #{{tag.title}}
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon right @click="removeTag(tag.id)" v-bind="attrs" v-on="on">mdi-close-circle</v-icon>
                </template>
                <span>Remove Tag</span>
              </v-tooltip>
            </v-chip>
          </v-chip-group>

          <v-chip-group v-if="note.tags.length == 0" column class="ml-2">
            <v-chip class="ma-1"
              color="gray"
              label
              outlined
            >
              Nota sem tag
            </v-chip>
          </v-chip-group>

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

        </v-card>
      </v-col>
    </v-row>
  </v-container>  
</template>

<script>
export default {
  data: () => ({ }),

  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>
