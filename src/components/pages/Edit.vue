<template>
   <layout-div>
        <h2 class="text-center mt-5 mb-3">Edit movie</h2>
        <div class="card">
            <div class="card-header">
                <router-link 
                    class="btn btn-outline-info float-right"
                    to="/">View All movies
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
                        Save movie
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
  name: 'movieEdit',
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
  created() {
    const id = this.$route.params.id;
    axios.get(`/movie/${id}`)
    .then(response => {
        let movieInfo = response.data
        this.movie.name = movieInfo.name
        this.movie.description = movieInfo.description
        return response
    })
    .catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'An Error Occured!',
            showConfirmButton: false,
            timer: 1500
        })
        return error
    })
  },
  methods: {
    handleSave() {
        this.isSaving = true
        const id = this.$route.params.id;
        axios.patch(`/movie/${id}`, this.movie)
          .then(response => {
            Swal.fire({
                icon: 'success',
                title: 'movie updated successfully!',
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