<template>
  <layout-div>
    <h2 class="text-center mt-5 mb-3">Add new movie</h2>
    <div class="card">
        <div class="card-header">
            <router-link 
                class="btn btn-outline-info float-right"
                to="/">View All Movies
            </router-link>
        </div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        v-model="movie.name"
                        type="text"
                        class="form-control"
                        id="name"
                        name="name"/>
                </div>
                <div class="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea 
                        v-model="movie.description"
                        class="form-control"
                        id="description"
                        rows="3"
                        name="description"></textarea>
                </div>
                <button 
                    @click="handleSave()"
                    :disabled="isSaving"
                    type="button"
                    class="btn btn-outline-primary mt-3">
                    Add movie
                </button>
            </form>
        </div>
    </div>
  </layout-div>
</template>
 
<script>
import axios from 'axios';
// import Layoutdiv from '../Layoutdiv.vue';
import Swal from 'sweetalert2'
 
export default {
  name: 'ProjectCreate',
  components: {
    // Layoutdiv,
  },
  data() {
    return {
      movie: {
        name: '',
        description: '',
      },
      isSaving:false,
    };
  },
  methods: {
    handleSave() {
        this.isSaving = true
        axios.post('/movie/add', this.movie)
          .then(response => {
            Swal.fire({
                icon: 'success',
                title: 'movie saved successfully!',
                showConfirmButton: false,
                timer: 1500
            })
            this.isSaving = false
            this.movie.name = ""
            this.movie.description = ""
            return response
          })
          .catch(error => {
            this.isSaving = false
            Swal.fire({
                icon: 'error',
                title: 'An Error Occured!',
                showConfirmButton: false,
                timer: 1500
            })
            return error
          });
    },
  },
};
</script>