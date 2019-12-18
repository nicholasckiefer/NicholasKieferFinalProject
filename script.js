
 $('#topPage').html('........LOADING........');

jQuery(document).ready(function(){
    axios.get('http://csc225.mockable.io/movies')
    .then(function(response){
        // console.log(response.data);
        var movieHTML = response.data.map(function(movie){
            $('#topPage').html('Nicks Movie Page');
            return '<p class ="movie" data-movie="'+movie.id+'">' + movie.title + '</p>';
        });
       
        $('#movie').html(movieHTML);
        

    });

    $('body').on('click','.movie',function(){
        var id = $(this).data('movie');
        var url = 'http://csc225.mockable.io/movies/' + id;
        $('#current-movie').html('...LOADING...');
        axios.get(url).then(function(response){
            var movie = response.data;
            var movieHTML = '<p>' + movie.title + '</p>';
            movieHTML += '<p>' + movie.director + '</p>';
            movieHTML += '<p>' + movie.release + '</p>';
            movieHTML += '<img src="' + movie.poster + '">';
            $('#current-movie').html(movieHTML);
        })
    
    });

   
    
});

