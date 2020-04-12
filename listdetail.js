$(document).ready(function () {

    // panggil fungsi menampilkan semua data global
    dataGlobal();
    dataUsa();
    dataSpanyol();
    dataItaly();
    dataGermany();
    dataChina();
    dataKorsel();
    dataJepang();
    dataMalay();
    dataNegara();

    mapping();
    

    //refresh otomatis
    setInterval(function () {
        dataGlobal();
        dataUsa();
        dataSpanyol();
        dataItaly();
        dataGermany();
        dataChina();
        dataKorsel();
        dataJepang();
        dataMalay();
        dataNegara();

        mapping();
        
    }, 3000);


    function mapping() {
        $.ajax({
            url: 'https://corona.lmao.ninja/all',
            success: function (data) {
                try {
                    
                    var json = data;
                    var mapid = data.countryInfo;

                    $('#mapid').html(mapid);



                } catch {
                    alert('Error');
                }
            }
        });
    }

    function dataGlobal() {
        $.ajax({
            url: 'https://corona.lmao.ninja/all',
            success: function (data) {
                try {
                    
                    var json = data;
                    var kasus = data.cases;
                    var meninggal = data.deaths;
                    var sembuh = data.recovered;

                    $('#kasus-global').html(kasus);
                    $('#meninggal-global').html(meninggal);
                    $('#sembuh-global').html(sembuh);



                } catch {
                    alert('Error');
                }
            }
        });
    }


    function dataUsa() {
        $.ajax({
            url: 'https://corona.lmao.ninja/countries?sort=country',
            success: function (data) {
                try {

                    var json = data;
                    var html = [];

                    if (json.length > 0) {
                        var i;
                        for (i = 0; i < json.length; i++) {
                            var dataNegara = json[i];
                            var namaNegara = dataNegara.country;

                            if (namaNegara === 'USA') {
                                var kasus = dataNegara.cases;
                                var meninggal = dataNegara.deaths;
                                var sembuh = dataNegara.recovered;

                                $('#usa-kasus').html(kasus);
                                $('#usa-meninggal').html(meninggal);
                                $('#usa-sembuh').html(sembuh);

                            }
                        }
                    }

                } catch {
                    alert('Error');
                }
            }
        });
    }
    function dataSpanyol() {
        $.ajax({
            url: 'https://corona.lmao.ninja/countries?sort=country',
            success: function (data) {
                try {

                    var json = data;
                    var html = [];

                    if (json.length > 0) {
                        var i;
                        for (i = 0; i < json.length; i++) {
                            var dataNegara = json[i];
                            var namaNegara = dataNegara.country;

                            if (namaNegara === 'Spain') {
                                var kasus = dataNegara.cases;
                                var meninggal = dataNegara.deaths;
                                var sembuh = dataNegara.recovered;

                                $('#spain-kasus').html(kasus);
                                $('#spain-meninggal').html(meninggal);
                                $('#spain-sembuh').html(sembuh);

                            }
                        }
                    }

                } catch {
                    alert('Error');
                }
            }
        });
    }
    function dataItaly() {
        $.ajax({
            url: 'https://corona.lmao.ninja/countries?sort=country',
            success: function (data) {
                try {

                    var json = data;
                    var html = [];

                    if (json.length > 0) {
                        var i;
                        for (i = 0; i < json.length; i++) {
                            var dataNegara = json[i];
                            var namaNegara = dataNegara.country;

                            if (namaNegara === 'Italy') {
                                var kasus = dataNegara.cases;
                                var meninggal = dataNegara.deaths;
                                var sembuh = dataNegara.recovered;

                                $('#italy-kasus').html(kasus);
                                $('#italy-meninggal').html(meninggal);
                                $('#italy-sembuh').html(sembuh);

                            }
                        }
                    }

                } catch {
                    alert('Error');
                }
            }
        });
    }
    
    function dataGermany() {
        $.ajax({
            url: 'https://corona.lmao.ninja/countries?sort=country',
            success: function (data) {
                try {

                    var json = data;
                    var html = [];

                    if (json.length > 0) {
                        var i;
                        for (i = 0; i < json.length; i++) {
                            var dataNegara = json[i];
                            var namaNegara = dataNegara.country;

                            if (namaNegara === 'Germany') {
                                var kasus = dataNegara.cases;
                                var meninggal = dataNegara.deaths;
                                var sembuh = dataNegara.recovered;

                                $('#germany-kasus').html(kasus);
                                $('#germany-meninggal').html(meninggal);
                                $('#germany-sembuh').html(sembuh);

                            }
                        }
                    }

                } catch {
                    alert('Error');
                }
            }
        });
    }

    function dataChina() {
        $.ajax({
            url: 'https://corona.lmao.ninja/countries?sort=country',
            success: function (data) {
                try {

                    var json = data;
                    var html = [];

                    if (json.length > 0) {
                        var i;
                        for (i = 0; i < json.length; i++) {
                            var dataNegara = json[i];
                            var namaNegara = dataNegara.country;

                            if (namaNegara === 'China') {
                                var kasus = dataNegara.cases;
                                var meninggal = dataNegara.deaths;
                                var sembuh = dataNegara.recovered;

                                $('#china-kasus').html(kasus);
                                $('#china-meninggal').html(meninggal);
                                $('#china-sembuh').html(sembuh);

                            }
                        }
                    }

                } catch {
                    alert('Error');
                }
            }
        });
    }

    function dataKorsel() {
        $.ajax({
            url: 'https://corona.lmao.ninja/countries?sort=country',
            success: function (data) {
                try {

                    var json = data;
                    var html = [];

                    if (json.length > 0) {
                        var i;
                        for (i = 0; i < json.length; i++) {
                            var dataNegara = json[i];
                            var namaNegara = dataNegara.country;

                            if (namaNegara === 'S. Korea') {
                                var kasus = dataNegara.cases;
                                var meninggal = dataNegara.deaths;
                                var sembuh = dataNegara.recovered;

                                $('#korsel-kasus').html(kasus);
                                $('#korsel-meninggal').html(meninggal);
                                $('#korsel-sembuh').html(sembuh);

                            }
                        }
                    }

                } catch {
                    alert('Error');
                }
            }
        });
    }

    

    function dataJepang() {
        $.ajax({
            url: 'https://corona.lmao.ninja/countries?sort=country',
            success: function (data) {
                try {

                    var json = data;
                    var html = [];

                    if (json.length > 0) {
                        var i;
                        for (i = 0; i < json.length; i++) {
                            var dataNegara = json[i];
                            var namaNegara = dataNegara.country;

                            if (namaNegara === 'Japan') {
                                var kasus = dataNegara.cases;
                                var meninggal = dataNegara.deaths;
                                var sembuh = dataNegara.recovered;

                                $('#japan-kasus').html(kasus);
                                $('#japan-meninggal').html(meninggal);
                                $('#japan-sembuh').html(sembuh);

                            }
                        }
                    }

                } catch {
                    alert('Error');
                }
            }
        });
    }
    function dataMalay() {
        $.ajax({
            url: 'https://corona.lmao.ninja/countries?sort=country',
            success: function (data) {
                try {

                    var json = data;
                    var html = [];

                    if (json.length > 0) {
                        var i;
                        for (i = 0; i < json.length; i++) {
                            var dataNegara = json[i];
                            var namaNegara = dataNegara.country;

                            if (namaNegara === 'Malaysia') {
                                var kasus = dataNegara.cases;
                                var meninggal = dataNegara.deaths;
                                var sembuh = dataNegara.recovered;

                                $('#malay-kasus').html(kasus);
                                $('#malay-meninggal').html(meninggal);
                                $('#malay-sembuh').html(sembuh);

                            }
                        }
                    }

                } catch {
                    alert('Error');
                }
            }
        });
    }

    function dataNegara() {
        $.ajax({
            url: 'https://corona.lmao.ninja/countries?sort=country',
            success: function (data) {
                try {

                    var json = data;
                    var html = [];

                    if (json.length > 0) {
                        var i;
                        for (i = 0; i < json.length; i++) {
                            var dataNegara = json[i];
                            var namaNegara = dataNegara.country;

                            if (namaNegara === 'Indonesia') {
                                var kasus = dataNegara.cases;
                                var meninggal = dataNegara.deaths;
                                var sembuh = dataNegara.recovered;

                                $('#data-kasus').html(kasus);
                                $('#data-meninggal').html(meninggal);
                                $('#data-sembuh').html(sembuh);

                            }
                        }
                    }

                } catch {
                    alert('Error');
                }
            }
        });
    }

});

