$.ajax({
    type: "GET",
    url: "https://www.cbr-xml-daily.ru/daily_json.js",
    success: function (response) {
        let jsonObj = JSON.parse(response);

        $.each(jsonObj["Valute"], function (indexInArray) {
            let nowValHtml = `<option value="` + indexInArray + `">` + indexInArray + `</option>`
            $("#valList").append(nowValHtml)
        });


        $('#countInput').on('input', function () {
            this.value = this.value.replace(/[^0-9\.]/g, '');
            let nowVal = $("#valList").val()
            let nowValRate = jsonObj["Valute"][nowVal]["Value"]
            let countVal = $("#countInput").val()


            $("#resultText").text(
                Math.round(nowValRate * countVal))
        });

    }
});