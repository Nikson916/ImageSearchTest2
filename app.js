$(document).ready(function () {
    function searchFlickr(tags) {
        var api_key = '9bb0e763627e6ab99e605740ce5d47c8';
        var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + api_key + '&tags=' + tags + '&format=json&nojsoncallback=1';

        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                $('#images').empty();
                var photos = data.photos.photo;
                for (var i = 0; i < 10; i++) {
                    var photo = photos[i];
                    var photoUrl = 'https://live.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
                    $('#images').append('<img src="' + photoUrl + '" />');
                }
            },
            error: function (xhr, status, error) {
                console.error('Ошибка');
            }
        });
    }

    $('#searchButton').click(function () {
        var tags = $('#tagsInput').val();
        searchFlickr(tags);
    });
});

