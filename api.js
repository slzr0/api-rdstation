<script type ='text/javascript' src="https://d335luupugsy2.cloudfront.net/js/integration/stable/rd-js-integration.min.js"></script>
<script type="text/javascript">

// LEAD - SEND
jQuery("#button-send").click(function () {
    console.log(email);
    setTimeout(function () {
        var data_array = [{
                name: 'name',
                value: jQuery("#name").val()
            }, {
                name: 'email',
                value: jQuery("#email").val()
            }, {
                name: 'phone',
                value: jQuery("#phone").val() 
            }, {
                name: 'token_rdstation',
                value: 'your token here'
            }
        ];

        RdIntegration.post(data_array, function (xhr) {
            var response = JSON.parse(xhr.responseText);
            if (xhr.status == 200 && response.result == 'success') {
                console.log('ok');
            } else {
                console.log('erro');
            }
        });
    }, 4000);
});
</script>
