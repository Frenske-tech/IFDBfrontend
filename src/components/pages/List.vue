<template>
  <layout-div>
        <div class="container">
            <h2 class="text-center mt-5 mb-3">movie Manager</h2>
            <div class="card">
                <div class="card-header">
                    <router-link to="/create"
                        class="btn btn-outline-primary"
                        >Create New movie
                    </router-link>
                </div>
                <div class="card-body">
             
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th width="240px">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                             
                            <tr v-for="movie in movies" :key="movie.id">
                                <td>{{movie.name}}</td>
                                <td>{{movie.description}}</td>
                                <td>
                                    <router-link :to="`/show/${movie.id}`" class="btn btn-outline-info mx-1">Show</router-link>
                                    <router-link :to="`/edit/${movie.id}`" class="btn btn-outline-success mx-1">Edit</router-link>
                                    <button 
                                        @click="handleDelete(movie.id)"
                                        className="btn btn-outline-danger mx-1">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                                 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </layout-div>
</template>
 
<script>
import axios from 'axios';
// import Layoutdiv from '../Layoutdiv.vue';
import Swal from 'sweetalert2'
 
export default {
  name: 'movieList',
  components: {
    // Layoutdiv,
  },
  data() {
    return {
      movies:[]
    };
  },
  created() {
    this.fetchmovieList();
  },
  methods: {
    fetchmovieList() {
      axios.get('/movie/getall')
        .then(response => {
            this.movies = response.data;
            return response
        })
        .catch(error => {
          return error
        });
    },
    handleDelete(id){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.request(`/movies/${id}`)
                .then( response => {
                    Swal.fire({
                        icon: 'success',
                        title: 'movie deleted successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.fetchmovieList();
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
                });
            }
          })
    }
  },
};
</script>