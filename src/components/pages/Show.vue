<template>
   <layout-div>
        <h2 class="text-center mt-5 mb-3">Show movie</h2>
        <div class="card">
            <div class="card-header">
                <router-link 
                    class="btn btn-outline-info float-right"
                    to="/">View All movies
                </router-link>
            </div>
            <div class="card-body">
                <b className="text-muted">Name:</b>
                <p>{{movie.name}}</p>
                <b className="text-muted">Description:</b>
                <p>{{movie.description}}</p>
            </div>
        </div>
   </layout-div>
</template>
 
<script>
import axios from 'axios';
// import Layoutdiv from '../Layoutdiv.vue';
import Swal from 'sweetalert2'
 
export default {
  name: 'movieShow',
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
     
  },
};
</script>